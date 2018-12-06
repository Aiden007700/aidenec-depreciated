const express = require("express");
const pages = require('../controller/pages')
const router = express.Router();

router.get("/portfolio", pages.work);

router.get("/", pages.index);

module.exports = router;