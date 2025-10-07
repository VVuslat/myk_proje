// ADIM 3 TAMAMLANDI: Uçuş controller dosyası

/**
 * @module flightController
 * @description Uçuş arama ve en uygun uçuş endpointleri için controller
 */
const { tumUcuslariGetir, ucusFiltrele } = require('../models/flightModel');
const { enUygunUcus } = require('../services/priceFilter');

/**
 * GET /api/flights
 * Uçuşları filtreler ve listeler
 */
function getFlights(req, res) {
  const filtre = {
    from: req.query.from,
    to: req.query.to,
    departureDate: req.query.departureDate,
    class: req.query.class,
    maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined
  };
  const flights = ucusFiltrele(filtre);
  res.json(flights);
}

/**
 * GET /api/flights/cheapest
 * En uygun uçuşu döndürür
 */
function getCheapestFlight(req, res) {
  const filtre = {
    from: req.query.from,
    to: req.query.to,
    departureDate: req.query.departureDate,
    class: req.query.class,
    maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined
  };
  const flights = ucusFiltrele(filtre);
  const cheapest = enUygunUcus(flights);
  if (!cheapest) return res.status(404).json({ mesaj: 'Uygun uçuş bulunamadı.' });
  res.json(cheapest);
}

module.exports = { getFlights, getCheapestFlight };
