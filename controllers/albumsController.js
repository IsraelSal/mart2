// Controller for all /albums routes
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
      risultato[0] = body["sol_keys"][0];
      risultato[1] = body[Jsonindex].First_UTC;
      console.log(risultato.map(t=>t)); // Print the json response

    }
});
module.exports = {
  getAllAlbums(req, res) {
    return res.render('music', { data: risultato[0] + '  ' + risultato[1] });
    //return res.render('music', { data: risultato });

  },
};