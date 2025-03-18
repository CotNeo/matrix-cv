import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
const resources = {
  en: {
    translation: {
      // Header
      "nav.home": "Home",
      "nav.about": "About",
      "nav.tech": "Tech Stack",
      "nav.projects": "Projects",
      "nav.github": "GitHub",
      "nav.certificates": "Certificates",
      "nav.chatbot": "Chatbot",
      "nav.contact": "Contact",
      
      // Hero Section
      "hero.greeting": "Hello, I&apos;m",
      "hero.title": "Frontend Developer",
      "hero.description": "Passionate about creating interactive web experiences",
      "hero.cta": "View My Work",
      
      // About Section
      "about.title": "About Me",
      "about.subtitle": "Full Stack Developer with MERN Stack Expertise",
      "about.bio": "🚀 Passionate Full-Stack Developer crafting scalable & performant web applications.\n\n⚡ Exploring system design, microservices, and web performance optimization.\n\n🤖 Enthusiastic about AI-driven applications and DevOps automation.\n\n💡 I focus on creating accessible, human-centered products with clean code architecture and RESTful API standards.\n\n🌱 Always learning and diving deep into RESTful API design, scalable architectures, edge computing, and advanced state management.",
      "about.avatarAlt": "Furkan Akar - Full Stack Developer",
      "about.experience.title": "Experience",
      "about.experience.items": [
        "Senior Frontend Developer - TechCorp (2020-Present)",
        "Full Stack Developer - WebSolutions (2018-2020)",
        "MERN Stack Developer - CodeCrafters (2016-2018)"
      ],
      "about.education.title": "Education",
      "about.education.items": [
        "MS in Computer Science - Tech University (2014-2016)",
        "BS in Software Engineering - Code College (2010-2014)"
      ],
      
      // Tech Stack Section
      "tech.title": "Tech Stack",
      "tech.description": "Technologies I've been working with recently",
      "tech.frontend": "Frontend",
      "tech.backend": "Backend",
      "tech.database": "Database",
      "tech.devops": "DevOps & Deployment",
      "tech.api": "API Development",
      "tech.testing": "Testing",
      "tech.tools": "Development Tools",
      "tech.frontend.items": [
        "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "React Bootstrap",
        "Redux", "HTML5", "CSS3", "Framer Motion", "React Router"
      ],
      "tech.backend.items": [
        "Node.js", "Express", "GraphQL", "Socket.IO", "Mongoose", "Axios", "REST APIs", "WebSockets"
      ],
      "tech.database.items": [
        "MongoDB", "PostgreSQL", "JSON"
      ],
      "tech.devops.items": [
        "Docker", "AWS", "Vercel", "Netlify", "Heroku", "CI/CD Pipelines", "Git"
      ],
      "tech.api.items": [
        "RESTful APIs", "GraphQL APIs", "WebSockets", "Postman"
      ],
      "tech.testing.items": [
        "Jest", "Cypress", "Supertest"
      ],
      "tech.tools.items": [
        "Git", "NPM", "Babel", "Vite", "Postman"
      ],
      
      // Projects Section
      "projects.title": "Projects",
      "projects.description": "Some of the projects I've worked on",
      "projects.viewAll": "View All Projects",
      
      // GitHub Status Section
      "github.title": "GitHub Stats",
      "github.description": "A snapshot of my GitHub activity",
      
      // Certificates Section
      "certificates.title": "Certificates",
      "certificates.description": "Professional certifications I've earned",
      "certificates.fullstack.description": "A comprehensive course on modern web development with JavaScript, React, Node.js, Express, and MongoDB. Earned from the University of Helsinki's Full Stack Open program.",
      "certificates.graphql.description": "Advanced course focused on GraphQL implementation with Apollo Server and Client. This certification validates my expertise in building efficient API queries and mutations.",
      "certificates.aws.description": "Preparing for AWS Developer Associate certification with focus on AWS services and cloud application development including Lambda, S3, DynamoDB, and serverless architectures.",
      "certificates.inProgress": "In Progress",
      "certificates.verified": "Verified",
      "certificates.view": "View Certificate",
      "certificates.skills": "Skills Covered",
      
      // Chatbot Section
      "chatbot.title": "Chat with Me",
      "chatbot.description": "Ask me anything about my work or experience",
      "chatbot.placeholder": "Type your message here...",
      "chatbot.send": "Send",
      
      // Footer
      "footer.rights": "All rights reserved",
      "footer.contact": "Contact Me"
    }
  },
  tr: {
    translation: {
      // Header
      "nav.home": "Ana Sayfa",
      "nav.about": "Hakkımda",
      "nav.tech": "Teknoloji",
      "nav.projects": "Projeler",
      "nav.github": "GitHub",
      "nav.certificates": "Sertifikalar",
      "nav.chatbot": "Sohbet Botu",
      "nav.contact": "İletişim",
      
      // Hero Section
      "hero.greeting": "Merhaba, Ben",
      "hero.title": "Frontend Geliştirici",
      "hero.description": "Etkileşimli web deneyimleri oluşturmaya tutkulu",
      "hero.cta": "Çalışmalarımı Gör",
      
      // About Section
      "about.title": "Hakkımda",
      "about.subtitle": "MERN Stack Uzmanı Full Stack Geliştirici",
      "about.bio": "🚀 Ölçeklenebilir ve yüksek performanslı web uygulamaları oluşturan tutkulu bir Full-Stack Geliştirici.\n\n⚡ Sistem tasarımı, mikroservisler ve web performans optimizasyonu alanlarında kendimi geliştiriyorum.\n\n🤖 Yapay zeka odaklı uygulamalar ve DevOps otomasyonu konularına ilgi duyuyorum.\n\n💡 Temiz kod mimarisi ve RESTful API standartları ile erişilebilir, insan odaklı ürünler yaratmaya odaklanıyorum.\n\n🌱 Sürekli öğreniyor ve RESTful API tasarımı, ölçeklenebilir mimariler, edge computing ve gelişmiş durum yönetimi konularında derinleşiyorum.",
      "about.avatarAlt": "Furkan Akar - Full Stack Geliştirici",
      "about.experience.title": "Deneyim",
      "about.experience.items": [
        "Kıdemli Frontend Geliştirici - TechCorp (2020-Günümüz)",
        "Full Stack Geliştirici - WebSolutions (2018-2020)",
        "MERN Stack Geliştirici - CodeCrafters (2016-2018)"
      ],
      "about.education.title": "Eğitim",
      "about.education.items": [
        "Bilgisayar Bilimi Yüksek Lisansı - Tech Üniversitesi (2014-2016)",
        "Yazılım Mühendisliği Lisansı - Code Koleji (2010-2014)"
      ],
      
      // Tech Stack Section
      "tech.title": "Teknoloji Yığını",
      "tech.description": "Son zamanlarda çalıştığım teknolojiler",
      "tech.frontend": "Önyüz Teknolojileri",
      "tech.backend": "Arka Uç Teknolojileri",
      "tech.database": "Veritabanı",
      "tech.devops": "DevOps & Dağıtım",
      "tech.api": "API Geliştirme",
      "tech.testing": "Test",
      "tech.tools": "Geliştirme Araçları",
      "tech.frontend.items": [
        "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "React Bootstrap",
        "Redux", "HTML5", "CSS3", "Framer Motion", "React Router"
      ],
      "tech.backend.items": [
        "Node.js", "Express", "GraphQL", "Socket.IO", "Mongoose", "Axios", "REST API'ler", "WebSockets"
      ],
      "tech.database.items": [
        "MongoDB", "PostgreSQL", "JSON"
      ],
      "tech.devops.items": [
        "Docker", "AWS", "Vercel", "Netlify", "Heroku", "CI/CD Hatları", "Git"
      ],
      "tech.api.items": [
        "RESTful API'ler", "GraphQL API'ler", "WebSockets", "Postman"
      ],
      "tech.testing.items": [
        "Jest", "Cypress", "Supertest"
      ],
      "tech.tools.items": [
        "Git", "NPM", "Babel", "Vite", "Postman"
      ],
      
      // Projects Section
      "projects.title": "Projeler",
      "projects.description": "Üzerinde çalıştığım bazı projeler",
      "projects.viewAll": "Tüm Projeleri Gör",
      
      // GitHub Status Section
      "github.title": "GitHub İstatistikleri",
      "github.description": "GitHub aktivitemin bir özeti",
      
      // Certificates Section
      "certificates.title": "Sertifikalar",
      "certificates.description": "Kazandığım profesyonel sertifikalar",
      "certificates.fullstack.description": "JavaScript, React, Node.js, Express ve MongoDB ile modern web geliştirme üzerine kapsamlı bir kurs. Helsinki Üniversitesi'nin Full Stack Open programından alınmıştır.",
      "certificates.graphql.description": "Apollo Server ve Client ile GraphQL uygulamasına odaklanan ileri düzey kurs. Bu sertifika, verimli API sorguları ve mutasyonları oluşturma konusundaki uzmanlığımı doğrular.",
      "certificates.aws.description": "Lambda, S3, DynamoDB ve sunucusuz mimariler dahil olmak üzere AWS hizmetlerine ve bulut uygulama geliştirmeye odaklanarak AWS Developer Associate sertifikasyonuna hazırlanıyorum.",
      "certificates.inProgress": "Devam Ediyor",
      "certificates.verified": "Doğrulanmış",
      "certificates.view": "Sertifikayı Görüntüle",
      "certificates.skills": "Kapsanan Beceriler",
      
      // Chatbot Section
      "chatbot.title": "Benimle Sohbet Et",
      "chatbot.description": "İşim veya deneyimim hakkında herhangi bir şey sorabilirsiniz",
      "chatbot.placeholder": "Mesajınızı buraya yazın...",
      "chatbot.send": "Gönder",
      
      // Footer
      "footer.rights": "Tüm hakları saklıdır",
      "footer.contact": "Benimle İletişime Geç"
    }
  }
};

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already safes from XSS
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n; 