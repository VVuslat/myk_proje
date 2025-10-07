// ADIM 5 TAMAMLANDI: Backend rezervasyon endpointleri için testler

/**
 * @file booking.test.js
 * @description Rezervasyon oluşturma, görüntüleme ve iptal endpointleri için Jest + Supertest testleri
 */
const request = require('supertest');
const app = require('../src/app');

let bookingId;

describe('Rezervasyon API Testleri', () => {
  test('POST /api/bookings rezervasyon oluşturuyor ve koltuk azaltıyor', async () => {
    const res = await request(app)
      .post('/api/bookings')
      .send({ flightId: 1, name: 'Test Kullanıcı', email: 'test@myk.com', seats: 1 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('bookingId');
    bookingId = res.body.bookingId;
  });

  test('GET /api/bookings/:id rezervasyon görüntülüyor', async () => {
    const res = await request(app).get(`/api/bookings/${bookingId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('bookingId', bookingId);
  });

  test('DELETE /api/bookings/:id rezervasyon iptal ediyor ve koltuk iadesi yapıyor', async () => {
    const res = await request(app).delete(`/api/bookings/${bookingId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('mesaj', 'Rezervasyon iptal edildi.');
  });
});
