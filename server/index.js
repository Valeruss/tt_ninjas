const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/index')
require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

const db = process.env.DB_CONNECTION_STRING;

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
        mongoose.connect(db)
            .then((response) => console.log('Connected to DB'))
            .catch((error) => console.log(error));
    } catch (error) {
        console.log(error);
    }
};

start();
