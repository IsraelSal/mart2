// Controller for all /genres routes
var request = require("request");
var Jsonindex;
var risultato = [];
var url = "https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0";
var formula = [];
var giorni;
var datecast;
var d;
request({
    url: url,
    json: true
}, function (error, response, body) {
  Jsonindex = body["sol_keys"][body["sol_keys"].length - 1];
    if (!error && response.statusCode === 200) {
      risultato[0] = body[Jsonindex].AT.av
      risultato[1] = body[Jsonindex].AT.mn
      risultato[2] = body[Jsonindex].AT.mx
      
      risultato[3] = body["sol_keys"][0]
      risultato[4] = body[Jsonindex].First_UTC
      risultato[4] = risultato[4].substring(0,10)
      d = new Date(risultato[4]).toDateString()
      for (let i = 0; i < 3; i++) {
        formula[i] = parseFloat((Number(risultato[i]) * 9/5 ) + 32).toFixed(2);
      }
      //console.log(risultato.map(t=>t)); // Print the json response

    }
});
module.exports = {
  getAllGenres(req, res) {
    return res.render('music', { giorni: 'SOL ' + risultato[3],
                                datecast: d,
      temperatura: formula[0] + ' F° ',
    minimo: ' min ' + formula[1] + ' F° ',
    massimo: ' max ' + formula[2] + ' F° '
   });
  },
};
