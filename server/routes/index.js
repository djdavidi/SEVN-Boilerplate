const itemsController = require("../controllers").items;
const usersController = require("../controllers").users;

module.exports = (app, passport) => {
  app.get("/api", (req, res) => res.status(200).send({
    message: "Welcome to the SEVN-Boilerplate",
  }));

  app.post("/api/items", itemsController.create);
  app.get("/api/items", itemsController.getOne);



  // user-
  app.post("/api/user", usersController.create);
  app.get("/api/user", usersController.getOne);

  // app.post("/login", )
  app.get('/logout', (req, res) => {
  	// logout is provided by passport on the req object
        req.logout();
  });

  function isLoggedIn(req, res, next) {
  	// check if user is authenticated
  	// if they are send them to the next piece
  	// of functionality
    if (req.isAuthenticated()) {
        return next();
    }
    // otherwise return an error
    	res.status(401).json(error);
	}
};