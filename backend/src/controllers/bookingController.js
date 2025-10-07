// ADIM 3 TAMAMLANDI: Rezervasyon controller dosyası

/**
 * @module bookingController
 * @description Rezervasyon oluşturma, görüntüleme ve iptal endpointleri için controller
 */
const { rezervasyonEkle, rezervasyonGetir, rezervasyonSil } = require('../models/bookingModel');
const { tumUcuslariGetir } = require('../models/flightModel');
const fs = require('fs');
const path = require('path');
const flightsPath = path.join(__dirname, '../../mock_data/flights.json');

function seatDecrement(flightId, count) {
  const flights = tumUcuslariGetir();
  const idx = flights.findIndex(f => f.flightId === flightId);
  if (idx === -1) return false;
  if (flights[idx].remainingSeats < count) return false;
  flights[idx].remainingSeats -= count;
  fs.writeFileSync(flightsPath, JSON.stringify(flights, null, 2), 'utf8');
  return true;
}

function seatIncrement(flightId, count) {
  const flights = tumUcuslariGetir();
  const idx = flights.findIndex(f => f.flightId === flightId);
  if (idx === -1) return false;
  flights[idx].remainingSeats += count;
  fs.writeFileSync(flightsPath, JSON.stringify(flights, null, 2), 'utf8');
  return true;
}

/**
 * POST /api/bookings
 * Rezervasyon oluşturur
 */
function createBooking(req, res) {
  const { flightId, name, email, seats } = req.body;
  if (!flightId || !name || !email || !seats) return res.status(400).json({ mesaj: 'Eksik bilgi.' });
  if (!seatDecrement(flightId, seats)) return res.status(400).json({ mesaj: 'Yeterli koltuk yok.' });
  const booking = {
    bookingId: 'B' + Date.now(),
    flightId,
    name,
    email,
    seats
  };
  rezervasyonEkle(booking);
  res.status(201).json(booking);
}

/**
 * GET /api/bookings/:id
 * Rezervasyon görüntüleme
 */
function getBooking(req, res) {
  const booking = rezervasyonGetir(req.params.id);
  if (!booking) return res.status(404).json({ mesaj: 'Rezervasyon bulunamadı.' });
  res.json(booking);
}

/**
 * DELETE /api/bookings/:id
 * Rezervasyon iptali
 */
function deleteBooking(req, res) {
  const booking = rezervasyonGetir(req.params.id);
  if (!booking) return res.status(404).json({ mesaj: 'Rezervasyon bulunamadı.' });
  rezervasyonSil(req.params.id);
  seatIncrement(booking.flightId, booking.seats);
  res.json({ mesaj: 'Rezervasyon iptal edildi.' });
}

module.exports = { createBooking, getBooking, deleteBooking };
