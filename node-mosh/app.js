const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const Joi = require('joi');
const log = require('./logger');
const morgan = require('morgan');
const helmet = require('helmet');
const router = require('./routes/courses');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());

app.use(log);
// app.use(helmet());
// app.use(morgan('tiny'));

app.use('/api/courses', router);

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('morgan enabled');
}

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log('server is listening on port', port);
});
