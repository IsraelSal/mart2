// Controller for all /genres routes
var request = require("request");
var Jsonindex;
var risultato = [];
var url = "https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0";
var formula = [];
request({
    url: url,
    json: true
}, function (error, response, body) {
  Jsonindex = body["sol_keys"][body["sol_keys"].length - 1];
    if (!error && response.statusCode === 200) {
      risultato[0] = body[Jsonindex].AT.av
      risultato[1] = body[Jsonindex].AT.mn
      risultato[2] = body[Jsonindex].AT.mx
      formula[0] = (Number(risultato[0]) * 9/5 ) + 32
      formula[1] = (Number(risultato[1]) * 9/5 ) + 32
      formula[2] = (Number(risultato[2]) * 9/5 ) + 32

      //console.log(risultato.map(t=>t)); // Print the json response

    }
});
module.exports = {
  getAllGenres(req, res) {
    return res.render('music', { temperatura: formula[0] + ' F° ',
    minimo: ' min ' + formula[1] + ' F° ',
    massimo: ' max ' + formula[2] + ' F° '
   });
  },
};
