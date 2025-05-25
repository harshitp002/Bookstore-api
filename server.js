require('dotenv').config();

const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5050;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Mongodb connected');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT} `);
        });
    })
    .catch((err) => {
        console.error('DB connection Error', err)
    });

