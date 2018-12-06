const path = require("path");

exports.work = (req, res, next) => {
  res.sendFile(path.join(__dirname + "/../portfolio.html"));
};

exports.index = (req, res, next) => {
  res.sendFile(path.join(__dirname + "/../index.html"));
};
