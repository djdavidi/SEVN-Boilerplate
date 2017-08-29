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


    app.post('/api/signup', passport.authenticate('local-signup', {
        successRedirect: '/api/user',
        failureRedirect: '/api/error'
    }));
    // app.post("/login", )
    app.get('/api/logout', (req, res) => {
         req.session.destroy(function(err) {
	        return res.json(error);
	    });
    });

       app.get('/api/error', (req, res) => {
	    return res.json(401);
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
