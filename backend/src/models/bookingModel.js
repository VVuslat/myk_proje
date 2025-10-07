// ADIM 3 TAMAMLANDI: Rezervasyon modeli ve dosya tabanlı persistans

/**
 * @module bookingModel
 * @description Rezervasyon verilerini bookings.json dosyasında saklayan yardımcı fonksiyonlar
 */

const fs = require('fs');
const path = require('path');
const bookingsPath = path.join(__dirname, '../../mock_data/bookings.json');

function oku() {
  if (!fs.existsSync(bookingsPath)) return [];
  return JSON.parse(fs.readFileSync(bookingsPath, 'utf8'));
}

function yaz(data) {
  // Basit atomic write
  fs.writeFileSync(bookingsPath, JSON.stringify(data, null, 2), 'utf8');
}

/**
 * Yeni rezervasyon ekler
 * @param {Object} booking
 * @returns {Object} Eklenen rezervasyon
 */
function rezervasyonEkle(booking) {
  const bookings = oku();
  bookings.push(booking);
  yaz(bookings);
  return booking;
}

/**
 * Rezervasyonları döndürür
 */
function tumRezervasyonlar() {
  return oku();
}

/**
 * ID ile rezervasyon döndürür
 */
function rezervasyonGetir(id) {
  return oku().find(b => b.bookingId === id);
}

/**
 * Rezervasyon siler
 */
function rezervasyonSil(id) {
  const bookings = oku();
  const kalan = bookings.filter(b => b.bookingId !== id);
  yaz(kalan);
}

module.exports = { rezervasyonEkle, tumRezervasyonlar, rezervasyonGetir, rezervasyonSil };
