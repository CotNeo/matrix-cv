# Next.js Portfolio Projesi - Dokümantasyon

## 📌 Proje Açıklaması
Bu proje, **Next.js, TypeScript, Three.js, Tailwind CSS ve UI Animations** kullanarak bir **kişisel portföy web uygulaması** geliştirmek amacıyla oluşturulmuştur. Modüler, ölçeklenebilir ve yönetilebilir bir yapı hedeflenmiştir. 

## 🏗 Proje Yapısı
Proje, bileşen bazlı bir mimariye sahip olup, **Next.js** ile SSR ve statik sayfa oluşturma desteklenmektedir. **TypeScript** kullanılarak kod kalitesi artırılmış, **Tailwind CSS** ile stil yönetimi kolaylaştırılmış ve **Three.js** ile 3D görselleştirme desteği sağlanmıştır.

### 🔹 **Ana Bileşenler ve Sayfalar**
1. **Header**: Navigasyon çubuğu, logo, tema değiştirme ve dil değiştirme desteği.
2. **Hero Section**: Kullanıcıyı karşılayan etkileyici bir giriş bölümü.
3. **About**: Kendini tanıtan metin ve görsel içerikler.
4. **Tech Stack**: Kullandığın teknolojileri sergileyen alan.
5. **Projects**: Tamamlanan veya üzerinde çalışılan projelerin gösterildiği alan.
6. **GitHub Status**: GitHub istatistiklerini gösteren bileşen.
7. **Certificates**: Aldığın sertifikaları içeren alan.
8. **Chatbot**: Kullanıcıların senin hakkında bilgi alabileceği özel bir sohbet botu.
9. **Footer**: İletişim ve sosyal medya bağlantılarının bulunduğu alt kısım.

## 📂 **Dosya Yapısı**
Proje dosya yapısı aşağıdaki gibi organize edilmiştir:

```
root/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── TechStack.tsx
│   ├── Projects.tsx
│   ├── GitHubStatus.tsx
│   ├── Certificates.tsx
│   ├── Chatbot.tsx
│   ├── Footer.tsx
│   ├── LanguageSwitcher.tsx
│   ├── animations/
│   ├── ui/
│   ├── three/
│
├── pages/
│   ├── index.tsx
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── chatbot.tsx
│
├── styles/
│   ├── globals.css
│   ├── tailwind.config.js
│
├── public/
│   ├── assets/
│
├── utils/
│   ├── helpers.ts
│   ├── constants.ts
│   ├── i18n.ts
│
├── tsconfig.json
├── next.config.js
├── package.json
```

## 🌍 **Çok Dilli Destek (Türkçe & İngilizce)**
Web sitesi artık **Türkçe ve İngilizce** dillerinde kullanılabilir. Kullanıcılar **header bölümündeki dil değiştirici** ile diller arasında kolayca geçiş yapabilir.

### **Dil Desteği için Kullanılan Teknolojiler:**
- **Next.js i18n Routing** (Yerleşik dil desteği)
- **react-i18next** veya **next-translate** kütüphanesi
- **Dil anahtarları**: `locales/` klasöründe **tr.json** ve **en.json** dosyaları
- **Tüm metinler dinamik olarak çevrilebilir**

### **Örnek Kullanım** _(i18n.ts)_:
```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to my portfolio",
      "about": "About Me"
    }
  },
  tr: {
    translation: {
      "welcome": "Portföyüme hoş geldiniz",
      "about": "Hakkımda"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
```

### **Dil Değiştirici Bileşeni** _(LanguageSwitcher.tsx)_:
```tsx
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>🇬🇧 English</button>
      <button onClick={() => changeLanguage('tr')}>🇹🇷 Türkçe</button>
    </div>
  );
};

export default LanguageSwitcher;
```

## 🔧 **Kullanılan Teknolojiler**
| Teknoloji | Açıklama |
|-----------|-------------|
| **Next.js** | React tabanlı framework |
| **TypeScript** | Tip güvenliği ve ölçeklenebilirlik |
| **Three.js** | 3D modelleme ve animasyon |
| **Tailwind CSS** | CSS framework |
| **Framer Motion** | UI animasyonları |
| **GitHub API** | GitHub istatistiklerini çekmek için |
| **Vercel** | Deployment ve hosting |
| **react-i18next** | Çoklu dil desteği |
| **Hugging Face / NLP.js / Rasa** | Ücretsiz AI chatbot modelleri |

## 🚀 **Kurulum ve Çalıştırma**

### 1️⃣ **Projeyi Klonla**
```bash
git clone https://github.com/kullaniciadi/next-portfolio.git
cd next-portfolio
```

### 2️⃣ **Bağımlılıkları Yükle**
```bash
yarn install  # veya npm install
```

### 3️⃣ **Geliştirme Ortamında Çalıştır**
```bash
yarn dev  # veya npm run dev
```

### 4️⃣ **Build ve Deploy**
```bash
yarn build && yarn start  # veya npm run build && npm start
```

## 📜 **Lisans**
Bu proje MIT Lisansı altında sunulmaktadır.

---
🎯 **Hedefin:** Profesyonel bir portföy sitesi ile yeteneklerini ve projelerini sergilemek! 🚀

