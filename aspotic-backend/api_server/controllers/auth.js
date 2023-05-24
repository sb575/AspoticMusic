var mongoose = require('mongoose');
var User = mongoose.model('User');
var service = require('./service');


/* POST api/auth/signup */
module.exports.signup = function(req, res) { 
  User
  .create({username: req.body.username, password: req.body.password}, function(err, user) { 
    if (err) {
      return res.status(400).send(err); 
    }
    return res
    .status(200)
    .send({token: service.createToken(user)}); 
  });
};

/* POST api/auth/login */
module.exports.login = async function(req, res) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid user and/or password" });
    }
    const token = service.createToken(user);
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

/* POST /auth/signout/:id */
module.exports.signout = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      return res.status(500).send(err);
    }
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    user.token = null;
    user.save(function(err) {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send({ message: "Signed out successfully" });
    });
  });
};