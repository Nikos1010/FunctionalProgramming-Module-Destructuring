const express = require('express');
const dotenv = require('dotenv');
const { getAreaCircle, getAreaSquare } = require('./examples/destructuring.js');

const app = express();
dotenv.config();

app.use('/circle',getAreaCircle);

app.use("/square", getAreaSquare);

app.use(express.json());

app.listen(process.env.PORT, () => console.log(`Server on port: ${process.env.PORT}`));