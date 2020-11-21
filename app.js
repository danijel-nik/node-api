const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

// Load config
dotenv.config({ path: './config/config.env' });
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());

// Fix Cors issue on frontend
app.use(cors());

// Import Routes
const homeRoute = require('./routes');
app.use('/', homeRoute);
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);