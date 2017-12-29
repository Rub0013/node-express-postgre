const bcrypt = require("bcrypt");
const User = require('../../models/index').User;

module.exports = function (req, res) {
 console.log(req.body);
  User.findOne({ where: {email: req.body.email} }).then(user => {
    console.log(user);
  })
};