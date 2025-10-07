# MYK Uçak Bileti Rezervasyon Sistemi

Bu proje, MYK Yazılım Geliştirici Seviye 5 yönergesine tam uyumlu, uçak bileti rezervasyon sistemi örneğidir. Tüm kodlar ve dokümantasyon Türkçedir.

## Klasör Yapısı

```
myk_proje/
├── backend/
├── frontend/
├── docs/
├── docker-compose.yml
├── .env.example
└── README.md
```

## Kurulum

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

## Çalıştırma

### Backend
```bash
npm run dev
```

### Frontend
```bash
npm run dev
```

### Docker ile Tüm Sistem
```bash
docker-compose up --build
```

## Testler

```bash
cd backend
npm test
```

## API Dokümantasyonu

Swagger arayüzü: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

## MYK Uyum Özeti

- Tüm gereksinimler ve adımlar MYK Seviye 5 yönergesine uygun şekilde uygulanmıştır.
- Kodlar, testler, Docker dosyaları ve dokümantasyon eksiksizdir.
- Tüm metinler ve açıklamalar Türkçedir.
- Gerçek uçuş verisi kullanılmamaktadır; tüm veriler mock_data içinden gelmektedir.
- Rezervasyon verisi dosya tabanlı saklanır, atomic write ile yarış koşulları önlenir.

## Ek Bilgiler

- docs/ klasöründe UML diyagramları, test senaryoları ve use case açıklamaları yer alır.
- .env.example dosyası ortam değişkenleri için örnektir.
- CI için .github/workflows/nodejs.yml dosyası eklenmiştir.

// ADIM 7 TAMAMLANDI: Ana README ve MYK uyum özeti eklendi.
# myk_proje