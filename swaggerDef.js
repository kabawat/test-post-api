const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Your API Documentation',
            version: '1.0.0',
            description: 'Description of your API',
        },
        servers: [
            {
                url: 'http://localhost:8080', // Change this URL as per your server
            },
        ],
    },
    apis: ["./swagger/product/*.js", ], // Path to the API routes directory
};

const specs = swaggerJsdoc(options);

module.exports = specs;
