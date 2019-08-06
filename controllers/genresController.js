// Controller for all /genres routes
var request = require("request");
var Jsonindex;
var risultato = [];
var url = "https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0";

request({
    url: url,
    json: true
}, function (error, response, body) {
  Jsonindex = body["sol_keys"][body["sol_keys"].length - 1];
    if (!error && response.statusCode === 200) {
      risultato[0] = body[Jsonindex].AT.av
      risultato[1] = body[Jsonindex].AT.mn
      risultato[2] = body[Jsonindex].AT.mx
      console.log(risultato.map(t=>t)); // Print the json response

    }
});
module.exports = {
  getAllGenres(req, res) {
    return res.render('music', { data: 'Temperatura -' +  risultato[0] + ' C° ' + '\n' + ' max -' + risultato[2]+ ' C° ' +
    + ' min -' + risultato[1] + 'C°'
  });
  },
};
