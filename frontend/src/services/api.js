// ADIM 4 TAMAMLANDI: Backend API çağrılarını yöneten servis
const BASE_URL = 'http://localhost:5000/api';

export async function fetchFlights(params) {
  const url = new URL(BASE_URL + '/flights');
  Object.keys(params).forEach(k => {
    if (params[k]) url.searchParams.append(k, params[k]);
  });
  const res = await fetch(url);
  return await res.json();
}

export async function fetchCheapest(params) {
  const url = new URL(BASE_URL + '/flights/cheapest');
  Object.keys(params).forEach(k => {
    if (params[k]) url.searchParams.append(k, params[k]);
  });
  const res = await fetch(url);
  return await res.json();
}

export async function createBooking(data) {
  const res = await fetch(BASE_URL + '/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
}
