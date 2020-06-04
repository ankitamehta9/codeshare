var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const bodyParser = require('body-parser');

var app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/name', function (req, res, next) {
  res.json({ "name": "ankita" })
});

app.post('/api/authenticate', (req, res, next) => {
  console.log('in authenticate:', req);
  var user = req.body;
  let usertestngo = {
    firstName: 'TestNgo', lastName: 'User', username: 'testngo',
    password: '1234', usertype: 'NGO', role: '', email: 'testngouser@mail.com'
  };

  let usertest = {
    firstName: 'Test', lastName: 'User', username: 'test',
    password: '1234', usertype: '', role: '', email: 'testuser@mail.com'
  };

  if (user.username === usertestngo.username &&
    user.password === usertestngo.password) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(usertestngo);
  } else {
    if (user.username === usertest.username &&
      user.password === usertest.password) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(usertest);
    }
    else
      res.status(401).json({ status: 401, statusText: 'Authentication Failed!' });
  }
});


app.post('/api/postcampaign', (req, res, next) => {
  console.log('in postcampaign ', req.body);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send();
}
);

app.post('/api/donate', (req, res, next) => {
  console.log('in postcampaign ', req.body);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send();
}
);

app.get('/api/getallcampaings', (req, res, next) => {
  console.log('in getallcampaigns ', req.body);
  console.log(req.query.pickedup)
  var json = require("./campaigns.json"); //path of json file
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(json);
}
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
