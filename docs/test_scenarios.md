# Test Senaryoları

Bu dosyada backend API için test senaryoları ve beklenen sonuçlar açıklanmıştır.

## Senaryo 1: Uçuş Arama
- GET /api/flights endpointine filtre parametreleri ile istek gönderildiğinde, doğru uçuşlar listelenmeli.

## Senaryo 2: En Uygun Uçuş
- GET /api/flights/cheapest endpointine uygun parametrelerle istek gönderildiğinde, en uygun uçuş dönmeli (fiyat, durak, süre önceliği ile).

## Senaryo 3: Rezervasyon Oluşturma
- POST /api/bookings ile rezervasyon oluşturulduğunda, ilgili uçuşun koltuk sayısı azalmalı ve rezervasyon kaydı oluşmalı.

## Senaryo 4: Rezervasyon Görüntüleme
- GET /api/bookings/:id ile rezervasyon bilgisi doğru dönmeli.

## Senaryo 5: Rezervasyon İptali
- DELETE /api/bookings/:id ile rezervasyon silindiğinde, ilgili uçuşun koltuk sayısı geri artırılmalı.

// ADIM 1 TAMAMLANDI: Test senaryoları dosyası oluşturuldu.
