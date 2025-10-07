// ADIM 3 TAMAMLANDI: Rezervasyon route dosyası

/**
 * @module bookingRoutes
 * @description Rezervasyon oluşturma, görüntüleme ve iptal endpointleri için route tanımları
 */
const express = require('express');
const router = express.Router();
const { createBooking, getBooking, deleteBooking } = require('../controllers/bookingController');

router.post('/bookings', createBooking);
router.get('/bookings/:id', getBooking);
router.delete('/bookings/:id', deleteBooking);

module.exports = router;
