var createError = require('http-errors')
const express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')


var indexRouter = require('./routers/index');
const userRouter = require('./routers/user')
const port = process.env.PORT
require('./db/db')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json())
app.use('/', indexRouter);
app.use(userRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
