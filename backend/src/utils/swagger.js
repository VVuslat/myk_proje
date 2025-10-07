// ADIM 3 TAMAMLANDI: Swagger dokümantasyonu için temel yapı

/**
 * @module swagger
 * @description Swagger/OpenAPI dokümantasyonu için Express middleware
 */
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../docs/swagger.json');

function swaggerSetup(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

module.exports = swaggerSetup;
