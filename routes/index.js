const { getAllAuthors } = require("../controllers/author.controller");

const routes = require("express").Router();

routes.use("/author", getAllAuthors);

module.exports = routes;
