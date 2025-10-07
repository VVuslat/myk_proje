// ADIM 4 TAMAMLANDI: Ana sayfa ve arama formu
import React, { useState } from 'react';
import FlightCard from '../components/FlightCard';
import { fetchFlights, fetchCheapest, createBooking } from '../services/api';

const cities = ['İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Trabzon', 'Gaziantep', 'Diyarbakır', 'Kayseri', 'Adana', 'Bodrum'];
const classes = ['Ekonomi', 'Business'];

function Home() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [ucusClass, setUcusClass] = useState('Ekonomi');
  const [maxPrice, setMaxPrice] = useState('');
  const [flights, setFlights] = useState([]);
  const [cheapest, setCheapest] = useState(null);
  const [highlightId, setHighlightId] = useState(null);

  const handleSearch = async () => {
    const res = await fetchFlights({ from, to, departureDate: date, class: ucusClass, maxPrice });
    setFlights(res);
    setCheapest(null);
    setHighlightId(null);
  };

  const handleCheapest = async () => {
    const res = await fetchCheapest({ from, to, departureDate: date, class: ucusClass, maxPrice });
    setCheapest(res);
    setHighlightId(res?.flightId);
  };

  return (
    <div>
      <h1>Uçak Bileti Rezervasyon Sistemi</h1>
      <form onSubmit={e => { e.preventDefault(); handleSearch(); }} aria-label="Uçuş Arama Formu">
        <label>Kalkış:
          <select value={from} onChange={e => setFrom(e.target.value)} aria-label="Kalkış Şehri">
            <option value="">Seçiniz</option>
            {cities.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        <label>Varış:
          <select value={to} onChange={e => setTo(e.target.value)} aria-label="Varış Şehri">
            <option value="">Seçiniz</option>
            {cities.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        <label>Tarih:
          <input type="date" value={date} onChange={e => setDate(e.target.value)} aria-label="Uçuş Tarihi" />
        </label>
        <label>Sınıf:
          <select value={ucusClass} onChange={e => setUcusClass(e.target.value)} aria-label="Uçuş Sınıfı">
            {classes.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        <label>Max Fiyat:
          <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} aria-label="Maksimum Fiyat" />
        </label>
        <button type="submit">Uçuşları Ara</button>
        <button type="button" onClick={handleCheapest}>En Uygun Fiyatlıyı Göster</button>
      </form>
      <div>
        {flights.map(f => (
          <FlightCard key={f.flightId} flight={f} highlight={highlightId === f.flightId} />
        ))}
        {cheapest && <div><strong>EN UYGUN:</strong> <FlightCard flight={cheapest} highlight={true} /></div>}
      </div>
    </div>
  );
}

export default Home;
