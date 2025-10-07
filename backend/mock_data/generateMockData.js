// ADIM 2 TAMAMLANDI: Sahte uçuş verisi üretici script oluşturuldu.

/**
 * Bu script, rastgele uçuş verileri üretip flights.json dosyasına kaydeder.
 * En az 50 uçuş kaydı oluşturur.
 * Tüm alanlar ve açıklamalar Türkçedir.
 */

const fs = require('fs');
const airlines = ['THY', 'Pegasus', 'SunExpress', 'AnadoluJet', 'AtlasGlobal'];
const cities = ['İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Trabzon', 'Gaziantep', 'Diyarbakır', 'Kayseri', 'Adana', 'Bodrum'];
const classes = ['Ekonomi', 'Business'];

function rastgeleTarih() {
  const start = new Date();
  const end = new Date();
  end.setMonth(end.getMonth() + 2);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function rastgeleUcus(id) {
  let from, to;
  do {
    from = cities[Math.floor(Math.random() * cities.length)];
    to = cities[Math.floor(Math.random() * cities.length)];
  } while (from === to);
  const departure = rastgeleTarih();
  const duration = Math.floor(Math.random() * 180) + 60; // 1-4 saat
  const arrival = new Date(departure.getTime() + duration * 60000);
  return {
    flightId: id,
    airline: airlines[Math.floor(Math.random() * airlines.length)],
    from,
    to,
    departure: departure.toISOString(),
    arrival: arrival.toISOString(),
    durationMinutes: duration,
    stops: Math.floor(Math.random() * 3),
    price: Math.floor(Math.random() * 2000) + 500,
    class: classes[Math.floor(Math.random() * classes.length)],
    remainingSeats: Math.floor(Math.random() * 100) + 10
  };
}

const flights = [];
for (let i = 1; i <= 50; i++) {
  flights.push(rastgeleUcus(i));
}

fs.writeFileSync(__dirname + '/flights.json', JSON.stringify(flights, null, 2), 'utf8');
console.log('50 adet sahte uçuş başarıyla oluşturuldu.');
// ADIM 2 TAMAMLANDI: flights.json dosyasına yazıldı.
