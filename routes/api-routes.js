const db = require('../models');
module.exports = function (app) {

    //to get users
    app.get('/api/users', function (req, res) {
        db.User.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
    //to post Recipes
    app.post('/api/Recipes', function (req, res) {
        db.Recipes.create(req.body)
            .then(function (userData) {
                res.json(userData);
            }).catch(function (err) {
                res.json(err);
            });
    });
}