const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
    get: (params) => {
        return new Promise((resolve, reject) => {

            User.find(params, (err, users) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            });
        });
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            User.findById(id, (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                }
            });
        });
    },
    createUser: (params) => {

        if (params['password']) {
            params['password'] = bcrypt.hashSync(params.password, 10);
        }
        
        return new Promise((resolve, reject) => {
            User.create(params, (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                }
            });
        });

    }
}