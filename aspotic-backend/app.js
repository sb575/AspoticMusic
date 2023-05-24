var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

require('./api_server/models/db'); 

var usersRouter = require('./routes/users');
var apiRouter = require('./api_server/routes/index'); 


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(cors());
app.use(logger('dev'));
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ limit: '200mb', extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/api', apiRouter);

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Aspotic',
    version: '1.0.0',
    description: 'An API REST to manage tracks',
    termsOfService: "http://swagger.io/terms/"
  },
  license: {
    name: "Apache 2.0",
    url: "http://www.apache.org/licenses/LICENSE-2.0.html"
  },
  components: {
    securitySchemes: {
        Authorization: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
            value: "Bearer <JWT token here>"
        }
    }
  },
  servers: [
    {
      url: '/api',
      description: 'Local server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./api_server/routes/*.js',],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerUiOptions = {
  explorer: true
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
