//dependencies for each module used
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');
var dotenv = require('dotenv');
var pg = require('pg');
var app = express();

//client id and client secret here, taken from .env (which you need to create)
dotenv.load();

//connect to database
var conString = process.env.DATABASE_CONNECTION_URL;

//Configures the Template engine
app.engine('html', handlebars({ defaultLayout: 'layout', extname: '.html' }));
app.set("view engine", "html");
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat',
                  saveUninitialized: true,
                  resave: true}));

//set environment ports and start application
app.set('port', process.env.PORT || 3000);

//routes
app.get('/', function(req, res){
  res.render('index');
});

var query = 'SELECT cdph_smoking_prevalence_in_adults_1984_2013.gender, cdph_smoking_prevalence_in_adults_1984_2013.number_of_respondents FROM cogs121_16_raw.cdph_smoking_prevalence_in_adults_1984_2013 WHERE cdph_smoking_prevalence_in_adults_1984_2013.year = \'2013\''; 

app.get('/delphidata', function (req, res) {

    var pg = require('pg');

    pg.connect(conString, function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }

        client.query(query, function(err, result) {
            done();

            if(err) {
              return console.error('error running query', err);
            }
            res.json(result.rows);
        });
    });
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});