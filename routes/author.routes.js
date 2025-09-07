const { getAllAuthors } = require("./../controllers/author.controller");
const router = require("express").Router();

router.get("/", getAllAuthors);

module.exports = router;
