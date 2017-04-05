var express = require('express');
var mysql = require('mysql');
var app = express();

app.get('/api/dvds/:id', function (request, response) {
  var connection = mysql.createConnection({
    host     : 'itp460.usc.edu',
    user     : 'student',
    password : 'ttrojan',
    database : 'dvd'
  });

  connection.connect();
 connection.query('SELECT title, award, genre_id, rating_id FROM dvds WHERE id = ?', [ request.params.id ], function(error, dvds) {
    if (error) {
      throw error;
    }

   var dvd = dvds[0];

    connection.query('SELECT * FROM genres WHERE id = ?', [ dvd.genre_id ], function(error, genres) {
      if (error) {
        throw error;
      }

      var genre = genres[0];
      dvd.genre = genre;
      delete dvd.genre_id;


  connection.query('SELECT * FROM ratings WHERE id = ?', [ dvd.rating_id ], function(error, ratings) {
    if (error) {
      throw error;
    }

    var rating = ratings[0];
    dvd.rating = rating;
    delete dvd.rating_id;
   response.json(dvd);

   connection.end();

  });

   });

});
});

app.listen(8000);
