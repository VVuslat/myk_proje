// ADIM 3 TAMAMLANDI: Uçuş route dosyası

/**
 * @module flightRoutes
 * @description Uçuş arama ve en uygun uçuş endpointleri için route tanımları
 */
const express = require('express');
const router = express.Router();
const { getFlights, getCheapestFlight } = require('../controllers/flightController');

router.get('/flights', getFlights);
router.get('/flights/cheapest', getCheapestFlight);

module.exports = router;
