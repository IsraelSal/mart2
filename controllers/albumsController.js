// Controller for all /albums routes
var request = require("request");
var Jsonindex;
var risultato = [];
var url = "https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0";
var giorni;
var datecast;
var d;
request({
    url: url,
    json: true
}, function (error, response, body) {
  Jsonindex = body["sol_keys"][body["sol_keys"].length - 1];
    if (!error && response.statusCode === 200) {
      risultato[0] = body["sol_keys"][0];
      risultato[1] = body[Jsonindex].First_UTC;
      risultato[1] = risultato[1].substring(0,10);

      risultato[2] = body[Jsonindex].AT.av
      risultato[3] = body[Jsonindex].AT.mn
      risultato[4] = body[Jsonindex].AT.mx

      d = new Date(risultato[1]).toDateString();
      console.log(risultato.map(t=>t)); // Print the json response
    }
});

module.exports = {
  getAllAlbums(req, res) {
    return res.render('music', { giorni: 'SOL ' + risultato[0],
                                datecast: d,
                                temperatura: risultato[2] + ' C°  ',
                                massimo: ' max  ' + risultato[4] + ' C°  -  ',
                                minimo: ' min  ' + risultato[3] + 'C°'});
    //return res.render('music', { data: risultato });

  },
};