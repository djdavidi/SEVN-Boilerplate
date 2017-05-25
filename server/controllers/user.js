const User = require('../models').User;

module.exports = {
    index(req, res) {
        User.findAll({
          include: Item
        })
          .then(function (authors) {
            res.status(200).json(authors);
          })
          .catch(function (error) {
            res.status(500).json(error);
          });
    },
    create(req, res) {
        return User
            .create({
                user: req.body.email,
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        return User.findById(req.params.id)
            .then(user => res.status(200).send(user))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return User.findById(req.params.id)
            .then(user => res.status(200).send(user))
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return User.findById(req.params.id)
            .then(user => res.status(200).send(user))
            .catch(error => res.status(400).send(error));
    },
};
