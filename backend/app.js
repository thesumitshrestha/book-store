const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const app = express();
const cors = require('cors');

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/books', router);

mongoose
  .connect(
    'mongodb+srv://admin:<password>@cluster0.yrnqi11.mongodb.net/bookStore?retryWrites=true&w=majority'
  )
  .then(() => console.log('CONNECTED TO DATABASE'))
  .then(() => {
    app.listen(5004);
  })
  .catch((err) => console.log(err));
