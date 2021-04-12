// dependencies
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./db/db');
const userRoute = require('./routes/userRoute');
const donorRoute = require('./routes/donorRoute');


// primary setup
const port = 5000;
const app = express();
app.use(express.json());
app.use(cors());

// router setup
app.get('/', (req, res) => res.send("Backend is working!"));
app.use('/user', userRoute);
app.use('/donor', donorRoute);

// port
app.listen(process.env.PORT || port);