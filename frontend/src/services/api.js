/**
 * Backend API ile iletişim fonksiyonları
 * Tüm fonksiyonlar Türkçe JSDoc ile açıklanmıştır.
 */
const BASE_URL = "http://localhost:5000/api"; // Gerekirse .env ile ayarlanabilir

/**
 * Uçuşları filtreleyerek getirir.
 * @param {Object} params - Arama parametreleri (from, to, departureDate, class, maxPrice)
 * @returns {Promise<Array>} Uçuş listesi
 */
export async function fetchFlights(params = {}) {
  const url = new URL(BASE_URL + "/flights");
  Object.keys(params).forEach(k => {
    if (params[k]) url.searchParams.append(k, params[k]);
  });
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Uçuşlar alınamadı");
    return await res.json();
  } catch (err) {
    console.error("fetchFlights hata:", err);
    return [];
  }
}

/**
 * En uygun uçuşu getirir.
 * @param {Object} params - Arama parametreleri
 * @returns {Promise<Object>} En uygun uçuş
 */
export async function fetchCheapest(params = {}) {
  const url = new URL(BASE_URL + "/flights/cheapest");
  Object.keys(params).forEach(k => {
    if (params[k]) url.searchParams.append(k, params[k]);
  });
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("En uygun uçuş alınamadı");
    return await res.json();
  } catch (err) {
    console.error("fetchCheapest hata:", err);
    return null;
  }
}

/**
 * Rezervasyon oluşturur.
 * @param {Object} data - Rezervasyon bilgileri (flightId, passengerName, contact)
 * @returns {Promise<Object>} Rezervasyon sonucu
 */
export async function createBooking(data) {
  try {
    const res = await fetch(BASE_URL + "/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Rezervasyon oluşturulamadı");
    return await res.json();
  } catch (err) {
    console.error("createBooking hata:", err);
    return { error: err.message };
  }
}
