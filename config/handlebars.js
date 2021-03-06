var handlebars = require('express-handlebars');

var partials = [
  'views/app',
  'views/partials'
];

var hbs = handlebars.create({
  defaultLayout: 'main',
  extname: '.hbs',
  partialsDir: partials,
  layoutsDir: 'views/layouts'
});

module.exports = hbs;