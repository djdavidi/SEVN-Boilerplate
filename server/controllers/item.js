const Item = require('../models').Item;

module.exports = {
    create(req, res) {
        return Item
            .create({
                name: req.body.name,
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
    getOne(req, res) {
        return Item.findById(req.params.id)
            .then(todo => res.status(200).send(todo))
            .catch(error => res.status(400).send(error));
    },
};
