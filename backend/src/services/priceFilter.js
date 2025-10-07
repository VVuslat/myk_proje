// ADIM 3 TAMAMLANDI: En uygun uçuşu seçen fonksiyon

/**
 * @module priceFilter
 * @description En uygun uçuşu seçmek için kullanılan fonksiyon
 * Kural: Öncelik en düşük fiyat, eşit fiyat varsa daha az durak, eşit durak varsa daha kısa süre, son çare flightId küçük olan
 */

/**
 * En uygun uçuşu seçer
 * @param {Array} flights Uçuş listesi
 * @returns {Object} En uygun uçuş
 */
function enUygunUcus(flights) {
  if (!flights.length) return null;
  return flights.sort((a, b) => {
    if (a.price !== b.price) return a.price - b.price;
    if (a.stops !== b.stops) return a.stops - b.stops;
    if (a.durationMinutes !== b.durationMinutes) return a.durationMinutes - b.durationMinutes;
    return a.flightId - b.flightId;
  })[0];
}

module.exports = { enUygunUcus };
