const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig')

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//Routes will go here
app.use('/api/auth',require('./routes/authRoutes'));

//Book routes
app.use('/api/books',require('./routes/bookRoutes'));

//Swagger routes
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get('/', (req,res) => {
    res.send('Bookstore API running');
});

module.exports = app;

