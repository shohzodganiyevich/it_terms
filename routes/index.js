const authorRoutes = require("./author.routes");
const socialRoutes = require("./social.routes");
const authorSocialRoutes = require("./author_social.routes");
const routes = require("express").Router();

routes.use("/author", authorRoutes);
routes.use("/social", socialRoutes);
routes.use("/author_social", authorSocialRoutes);

module.exports = routes;
