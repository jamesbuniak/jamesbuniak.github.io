// openweatherapp
// 4f3b6671a1a6c638c757a26ba7159446

  var express = require('express');
  var path = require('path');
  var faker = require('faker');
  var request = require('request');

  request(http://your-endpoint.com, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  });

  var app = express();

  app.get('/', function (req, res) {
    res.send('Hello, World!');
  });

  app.listen(1337, function () {
    console.log('The magic is going down port 1337!')
  });

  app.use(express.static('public'));

  app.get('/', function (req, res) {
    res.send('index.html');
  });

  // GET
  app.get('/', function (req, res) {
    res.send('Received a GET request');
  });

  // POST
  app.post('/', function (req, res) {
    res.send('Received a POST request');
  });

  // PUT
  app.put('/', function (req, res) {
    res.send('Received a PUT request');
  });

  // DELETE
  app.delete('/user', function (req, res) {
    res.send('Received a DELETE request');
  });

  app.get('/geo', function (req, res) {
    res.send('I am working!');
  });