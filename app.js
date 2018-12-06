const express = require("express");
const app = express();
const indexRoutes = require('./routes/index')

app.use(express.static("public"));

app.use('/', indexRoutes)

app.listen(3001, () => {
  console.log(3001);
});
