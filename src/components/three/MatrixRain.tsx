'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MatrixRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const raindropsMeshRef = useRef<THREE.InstancedMesh | null>(null);
  const texturesRef = useRef<THREE.Texture | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Temizleme fonksiyonu
    const cleanup = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (texturesRef.current) {
        texturesRef.current.dispose();
      }
    };

    // Canvas boyutları
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Three.js kurulumu
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Matrix karakter tekstüründen atlas oluştur
    const createMatrixTextureAtlas = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      // Matrix karakterleri için doku seti
      const CHAR_SET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
      const ROWS = 8;
      const COLS = 12;
      const CHAR_SIZE = 32;

      canvas.width = COLS * CHAR_SIZE;
      canvas.height = ROWS * CHAR_SIZE;
      
      // Karakterleri çiz
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.font = `${CHAR_SIZE * 0.8}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      let index = 0;
      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
          if (index < CHAR_SET.length) {
            // Rastgele parlaklıkta yeşil renk
            const brightness = 0.7 + Math.random() * 0.3;
            ctx.fillStyle = `rgba(0, ${Math.floor(255 * brightness)}, ${Math.floor(100 * brightness)}, 1)`;
            
            // Karakteri çiz
            ctx.fillText(
              CHAR_SET[index],
              x * CHAR_SIZE + CHAR_SIZE / 2,
              y * CHAR_SIZE + CHAR_SIZE / 2
            );
            index++;
          }
        }
      }

      // Atlası dokuya dönüştür
      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.NearestFilter;
      texture.magFilter = THREE.NearestFilter;
      return { texture, ROWS, COLS, CHAR_SET };
    };

    // Matrix tekstür atlas'ı oluştur
    const matrixAtlas = createMatrixTextureAtlas();
    if (!matrixAtlas) {
      cleanup();
      return;
    }
    texturesRef.current = matrixAtlas.texture;

    // Damla materyal
    const material = new THREE.MeshBasicMaterial({
      map: matrixAtlas.texture,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
    });

    // Yağmur damlası geometrisi (düz kare)
    const geometry = new THREE.PlaneGeometry(0.2, 0.2);

    // Matrix yağmuru parametreleri
    const DROPS_COUNT = 500;
    const MAX_DEPTH = 10;
    
    // Örneğe dayalı mesh oluştur
    const raindrops = new THREE.InstancedMesh(geometry, material, DROPS_COUNT);
    raindropsMeshRef.current = raindrops;
    scene.add(raindrops);

    // Her damla için veri
    const dropData = Array.from({ length: DROPS_COUNT }, () => {
      const x = (Math.random() * 2 - 1) * 5;
      const y = (Math.random() * 2 - 1) * 5 + 5; // Ekranın üstünden başla
      const z = -(Math.random() * MAX_DEPTH);
      
      // Rastgele karakter indeksi
      const charIndex = Math.floor(Math.random() * matrixAtlas.CHAR_SET.length);
      const col = charIndex % matrixAtlas.COLS;
      const row = Math.floor(charIndex / matrixAtlas.COLS);
      
      // UV koordinatları
      const u = col / matrixAtlas.COLS;
      const v = row / matrixAtlas.ROWS;
      
      return {
        position: new THREE.Vector3(x, y, z),
        speed: 0.01 + Math.random() * 0.03,
        charIndex,
        // Her karenin UV offset'ini hesapla
        uvOffset: { u, v },
        uvScale: { u: 1 / matrixAtlas.COLS, v: 1 / matrixAtlas.ROWS },
        opacity: 0.5 + Math.random() * 0.5,
        scale: 0.7 + Math.random() * 0.7,
      };
    });

    // Örneklere dummy objesi oluştur
    const dummy = new THREE.Object3D();

    // UV dönüşümleri için özel shader material
    material.onBeforeCompile = (shader) => {
      // Instance'ları farklı karakterleri gösterecek şekilde değiştir
      shader.vertexShader = shader.vertexShader.replace(
        '#include <common>',
        `#include <common>
        attribute vec2 uvOffset;
        attribute vec2 uvScale;
        attribute float instanceOpacity;
        varying vec2 vUvOffset;
        varying vec2 vUvScale;
        varying float vInstanceOpacity;`
      );

      shader.vertexShader = shader.vertexShader.replace(
        '#include <uv_vertex>',
        `#include <uv_vertex>
        vUvOffset = uvOffset;
        vUvScale = uvScale;
        vInstanceOpacity = instanceOpacity;`
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <common>',
        `#include <common>
        varying vec2 vUvOffset;
        varying vec2 vUvScale;
        varying float vInstanceOpacity;`
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        'vec4 diffuseColor = vec4( diffuse, opacity );',
        `
        // UV'yi atlas içindeki doğru karaktere dönüştür
        vec2 adjustedUv = vUv * vUvScale + vUvOffset;
        vec4 texColor = texture2D(map, adjustedUv);
        
        // Farklı parlaklık efekti için instance opacity kullan
        vec4 diffuseColor = vec4(texColor.rgb, texColor.a * vInstanceOpacity * opacity);`
      );
    };

    // Animasyon döngüsü
    const animate = () => {
      if (!raindrops) return;

      // Her damlayı güncelle
      dropData.forEach((drop, i) => {
        // Damlayı aşağı hareket ettir
        drop.position.y -= drop.speed;
        
        // Ekranın altına ulaştığında yeniden başlat
        if (drop.position.y < -5) {
          drop.position.y = 5;
          drop.position.x = (Math.random() * 2 - 1) * 5;
          
          // Yeni bir karakter seç
          drop.charIndex = Math.floor(Math.random() * matrixAtlas.CHAR_SET.length);
          const col = drop.charIndex % matrixAtlas.COLS;
          const row = Math.floor(drop.charIndex / matrixAtlas.COLS);
          drop.uvOffset.u = col / matrixAtlas.COLS;
          drop.uvOffset.v = row / matrixAtlas.ROWS;
        }

        // Dummy'nin dönüşümünü ayarla
        dummy.position.copy(drop.position);
        dummy.scale.set(drop.scale, drop.scale, drop.scale);
        dummy.updateMatrix();
        
        // Örneğe uygula
        raindrops.setMatrixAt(i, dummy.matrix);
      });

      raindrops.instanceMatrix.needsUpdate = true;

      // Render
      if (scene && camera && renderer) {
        renderer.render(scene, camera);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Boyut değişikliğine yanıt ver
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };

    // Dinleyicileri ekle
    window.addEventListener('resize', handleResize);
    
    // Animasyonu başlat
    animate();

    // Temizleme
    return () => {
      cleanup();
      window.removeEventListener('resize', handleResize);
      // Store the ref in a variable to avoid the stale ref warning
      const currentContainer = containerRef.current;
      if (currentContainer && renderer.domElement) {
        currentContainer.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full z-0" />
  );
};

export default MatrixRain; 