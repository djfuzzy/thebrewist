const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userLogger = require('./app/middleware/user-logger');

const app = express();

var corsOptions = {
  origin: ['http://localhost:8080', 'https://localhost:8080'],
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userLogger);

require('./app/routes/beer.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
