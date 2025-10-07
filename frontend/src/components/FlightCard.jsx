// ADIM 4 TAMAMLANDI: Uçuş kartı ve rezervasyon butonu
import React, { useState } from 'react';
import { createBooking } from '../services/api';

function FlightCard({ flight, highlight }) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [seats, setSeats] = useState(1);
  const [msg, setMsg] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    const res = await createBooking({ flightId: flight.flightId, name, email, seats });
    if (res.bookingId) setMsg('Rezervasyon başarılı!');
    else setMsg(res.mesaj || 'Hata oluştu');
  };

  return (
    <div style={{ border: highlight ? '2px solid green' : '1px solid #ccc', margin: 8, padding: 8, borderRadius: 8 }} aria-label="Uçuş Bilgisi">
      {highlight && <span style={{ color: 'green', fontWeight: 'bold' }}>EN UYGUN</span>}
      <div>Havayolu: {flight.airline}</div>
      <div>Kalkış: {flight.from} - Varış: {flight.to}</div>
      <div>Tarih: {flight.departure}</div>
      <div>Süre: {flight.durationMinutes} dk</div>
      <div>Durak: {flight.stops}</div>
      <div>Fiyat: {flight.price} TL</div>
      <div>Sınıf: {flight.class}</div>
      <div>Kalan Koltuk: {flight.remainingSeats}</div>
      <button onClick={() => setShowForm(!showForm)} aria-label="Rezervasyon Yap">Rezervasyon Yap</button>
      {showForm && (
        <form onSubmit={handleBooking} aria-label="Rezervasyon Formu">
          <input type="text" placeholder="Ad Soyad" value={name} onChange={e => setName(e.target.value)} aria-label="Ad Soyad" required />
          <input type="email" placeholder="E-posta" value={email} onChange={e => setEmail(e.target.value)} aria-label="E-posta" required />
          <input type="number" min={1} max={flight.remainingSeats} value={seats} onChange={e => setSeats(e.target.value)} aria-label="Koltuk Sayısı" required />
          <button type="submit">Onayla</button>
        </form>
      )}
      {msg && <div>{msg}</div>}
    </div>
  );
}

export default FlightCard;
