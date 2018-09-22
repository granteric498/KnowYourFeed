var db = require("../models");

module.exports = function (app) {
    app.get("/api/authors", function (req, res) {
        db.Authors.findAll({
            include: [db.Post]
        }).then(function (dbAuthors) {
            res.json(dbAuthors);
        });
    });
    app.get("/api/authors/:id", function (req, res) {
        db.Authors.findOne({
            where: {
                id: req.parms.id
            },
            include: [db.Post]
        }).then(function (dbAuthors) {
            res.json(dbAuthors);
        });
    });
};