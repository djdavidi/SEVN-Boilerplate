const User = require('../models/').User;
const Item = require('../models/').Item;

module.exports= {
  //Get a list of all users using model.findAll()
  index(req, res) {
    User.findAll({
      include: Item
    })
      .then(function (users) {
        res.status(200).json(users);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  show(req, res) {
    User.findById(req.params.id, {
      include: Item
    })
    .then(function (user) {
      res.status(200).json(user);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  create(req, res) {
    User.create(req.body)
      .then(function (newUser) {
        res.status(200).json(newUser);
      })
      .catch(function (error){
        res.status(500).json(error);
      });
  },

  update(req, res) {
    User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function (updatedUser) {
      res.status(200).json(updatedUser);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  delete(req, res) {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedUser) {
      res.status(200).json(deletedUser);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }
};