// Controller for all /artists routes

module.exports = {
  getAllArtists(req, res) {
    return res.render('music', { data: 'Questa dobrebbe fare il refresch page' });
  },
};