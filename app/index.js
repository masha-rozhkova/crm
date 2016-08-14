const config = require('../config');
const express = require('express');
const app = express();
app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug');
app.use(express.static(`${__dirname}/public`));
app.listen(config.port);
app.get('*', (req, res) => {
  res.render('index');
});
