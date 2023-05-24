var jwt = require('jsonwebtoken'); 
var moment = require('moment');
var config = require('../config');
const axios = require('axios');
const qs = require('qs');
require('dotenv').config();

/* GET api/token */
exports.getAuth = async (req, res) => {
  try{
    const token_url = `https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${process.env.SPOTIFY_API_ID}&client_secret=${process.env.SPOTIFY_CLIENT_SECRET}`;
    const response = await axios.post(token_url)
    config.accessToken = response.data.access_token;
    res.send(config.accessToken);
    console.log(error);
  }catch(error){
    console.log(error);
  }
}

exports.verifyToken = async function (req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = decoded.user;
    next();
  });

    try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(403).send({ message: "Request without authorization header" });
    }

    const token = authHeader.split(" ")[1];
    const payload = await jwt.verify(token, config.TOKEN_SECRET);
    req.user = payload; 
  
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ message: "Incorrect signature" });
    } else if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).send({ message: "Expired token" });
    } else {
      return res.status(401).send({ message: "Failed to verify token" });
    }
  }
}

exports.ensureAuthenticated = async function(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(403).send({ message: "Request without authorization header" });
    }

    const token = authHeader.split(" ")[1];
    const payload = await jwt.verify(token, config.TOKEN_SECRET);
    req.user = payload; 
  
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ message: "Incorrect signature" });
    } else if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).send({ message: "Expired token" });
    } else {
      return res.status(401).send({ message: "Failed to verify token" });
    }
  }
};

