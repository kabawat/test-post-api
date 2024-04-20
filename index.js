const express = require('express');
const path = require('path');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swaggerDef'); // Import the generated Swagger documentation

const app = express();

const router = require('./router/');
const connect_db = require('./database');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ['*', 'http://127.0.0.1:5500/', "http://127.0.0.1:5500/", 'http://localhost:5500/', 'http://localhost:3000', 'http://localhost:3001']
}));

app.use(router);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(8080, async function () {
    await connect_db();
    console.log(`Server is running on http://localhost:${8080}`);
});
