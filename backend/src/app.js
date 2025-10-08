// Swagger dokümantasyonu
try {
	const swaggerSetup = require('./utils/swagger');
	swaggerSetup(app);
} catch (e) {
	// Swagger kurulumu için eksik bağımlılık veya dosya varsa hata bastırılır
}
// ADIM 1 TAMAMLANDI: Express uygulamasının ana dosyası oluşturuldu.

/**
 * Express uygulamasının ana giriş noktası
 * Tüm uçuş ve rezervasyon API endpointleri burada tanımlanacak
 * Türkçe açıklamalar ve MYK uyumlu yapı
 */

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());


// Uçuş ve rezervasyon route'ları
const flightRoutes = require('./routes/flightRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
app.use('/api', flightRoutes);
app.use('/api', bookingRoutes);

// Ana kök URL için sağlık ve bilgilendirme endpointi
app.get('/', (req, res) => {
	res.send('MYK Uçak Bileti Rezervasyon Sistemi Backend API çalışıyor. Swagger için /api-docs adresini kullanın.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Sunucu ${PORT} portunda çalışıyor`);
});

module.exports = app;
