const bcrypt = require("bcrypt");
const User = require('../../models/index').User;

module.exports = function (req, res) {
  bcrypt.hash(req.body.password.toString(), bcrypt.genSaltSync(8), function(err, hash) {
    if(!err) {
      User
        .create({
          name: req.body.name,
          email: req.body.email,
          password: hash,
        })
        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error));
    }
  });
};