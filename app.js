const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql')
// DB Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'bay',
  password: 'a1234567',
})

// Router
const indexRouter = require('./routes/index')
const membersRouter = require('./routes/members')
const memberRouter = require('./routes/member')
const newsRouter = require('./routes/news')
const newsDescRouter = require('./routes/news_desc')
const moviesRouter = require('./routes/movies')
const movieDescRouter = require('./routes/movie_desc')

// SETUP
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Routing
app.use('/', indexRouter)
app.use('/members', membersRouter)
app.use('/members/:id', memberRouter)
app.use('/news', newsRouter)
app.use('/news/:id', newsDescRouter)
app.use('/movies', moviesRouter)
app.use('/movies/:id', movieDescRouter)


/**
 * API
 */
// メンバー取得
app.get('/api/getAllMember', (req, res) => {
  connection.query('SELECT * FROM members', (err, results) => {
    if (err) throw err
    res.json({status: true, members: results})
  })
})


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
