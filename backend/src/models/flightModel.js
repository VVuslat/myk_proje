// ADIM 3 TAMAMLANDI: Uçuş modeli ve mock veri okuma fonksiyonları oluşturuldu

/**
 * @module flightModel
 * @description Uçuş verilerini mock_data/flights.json dosyasından okuyan yardımcı fonksiyonlar
 */

const fs = require('fs');
const path = require('path');
const flightsPath = path.join(__dirname, '../../mock_data/flights.json');

/**
 * Tüm uçuşları döndürür
 * @returns {Array} Uçuş listesi
 */
function tumUcuslariGetir() {
  return JSON.parse(fs.readFileSync(flightsPath, 'utf8'));
}

/**
 * Filtreye göre uçuşları döndürür
 * @param {Object} filtre
 * @returns {Array} Filtrelenmiş uçuşlar
 */
function ucusFiltrele(filtre) {
  let flights = tumUcuslariGetir();
  if (filtre.from) flights = flights.filter(f => f.from === filtre.from);
  if (filtre.to) flights = flights.filter(f => f.to === filtre.to);
  if (filtre.departureDate) flights = flights.filter(f => f.departure.startsWith(filtre.departureDate));
  if (filtre.class) flights = flights.filter(f => f.class === filtre.class);
  if (filtre.maxPrice) flights = flights.filter(f => f.price <= filtre.maxPrice);
  return flights;
}

module.exports = { tumUcuslariGetir, ucusFiltrele };
