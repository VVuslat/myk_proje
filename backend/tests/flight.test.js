// ADIM 5 TAMAMLANDI: Backend uçuş endpointleri için testler

/**
 * @file flight.test.js
 * @description Uçuş arama ve en uygun uçuş endpointleri için Jest + Supertest testleri
 */
const request = require('supertest');
const app = require('../src/app');

describe('Uçuş API Testleri', () => {
  test('GET /api/flights doğru filtreleme yapıyor', async () => {
    const res = await request(app).get('/api/flights?from=İstanbul&to=Ankara');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    res.body.forEach(f => {
      expect(f.from).toBe('İstanbul');
      expect(f.to).toBe('Ankara');
    });
  });

  test('GET /api/flights/cheapest en uygun uçuşu döndürüyor', async () => {
    const res = await request(app).get('/api/flights/cheapest?from=İstanbul&to=Ankara');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('price');
    expect(res.body).toHaveProperty('flightId');
  });
});
