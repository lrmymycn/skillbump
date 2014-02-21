/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        firstName:{
            type:'string',
            required:true
        },
        lastName:{
            type:'string',
            required:true
        },
        email: {
            type: 'string',
            unique: true,
            required: true
        },
        password: {
            type: 'string',
            required: true,
            minLength: 6
        },
        role:{
            type:'string', //ADMIN, AGENT, CUSTOMER
            required:true
        },
        facebookId:'string',
        loginTimes:'integer',

        toJSON: function () {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },

    beforeCreate: function (attrs, next) {
        var bcrypt = require('bcryptjs');

        bcrypt.genSalt(10, function (err, salt) {
            if (err) return next(err);

            bcrypt.hash(attrs.password, salt, function (err, hash) {
                if (err) return next(err);

                attrs.password = hash;
                next();
            });
        });
    }
};
