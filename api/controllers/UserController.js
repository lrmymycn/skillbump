/**
 * UserController
 *
 * @module      :: Controller
 * @description    :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

    find: function (req, res) {

        User.find({

        }).done(function (err, users) {
                if (err) {
                    var validation = require('../utils/validation.js');

                    res.json({
                        error: true,
                        message: validation.friendlyError(err),
                        debug: err
                    }, 500);
                } else {
                    res.json(users);
                }
            });

    },

    create: function (req, res) {

        User.create({
            firstName: req.param('firstName'),
            lastName:req.param('lastName'),
            email:req.param('email'),
            password:req.param('password'),
            role:req.param('role')
        }).done(function (err, user) {
                if (err) {
                    var validation = require('../utils/validation.js');

                    res.json({
                        error: true,
                        message: validation.friendlyError(err),
                        debug: err
                    }, 500);
                } else {
                    res.json({
                        error: false,
                        message: 'success'
                    });
                }
            });
    },

    login: function (req, res) {

        var bcrypt = require('bcryptjs');

        User.findOneByEmail(req.body.email).done(function (err, user) {
            if (err) res.json({ error: 'DB error' }, 500);

            if (user) {
                bcrypt.compare(req.body.password, user.password, function (err, match) {
                    if (err) res.json({ error: 'Server error' }, 500);

                    if (match) {
                        // password match
                        req.session.user = user.id;
                        res.json(user);
                    } else {
                        // invalid password
                        if (req.session.user) req.session.user = null;
                        res.json({ error: 'Invalid password' }, 400);
                    }
                });
            } else {
                res.json({ error: 'User not found' }, 404);
            }
        });
    },


    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to UserController)
     */
    _config: {}


};
