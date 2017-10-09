const Item = require('../models').Item;

module.exports = {
    create(req, res) {
        return Item
            .create({
                name: req.body.name,
            })
            .then(item => res.status(201).send(item))
            .catch(error => res.status(400).send(error));
    },
    getOne(req, res) {
        return Item.findById(req.params.id)
            .then(item => res.status(200).send(item))
            .catch(error => res.status(400).send(error));
    },
    getAll(req, res) {
        console.log("in get all")
        return Item.findAll()
            .then(item => res.status(200).send(item))
            .catch(error => res.status(400).send(error));
    }
};
