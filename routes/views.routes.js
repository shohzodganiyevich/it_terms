const { createViewPage } = require("../helpers/create.view.page");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render(createViewPage("index"), { title: "Asosiy sahifa", isHome: true });
});

router.get("/author", (req, res) => {
  res.render(createViewPage("author"), { title: "Author sahifa", isAuthor: true });
});

router.get("/social", (req, res) => {
  res.render(createViewPage("social"), { title: "Social sahifa", isSocial: true });
});

module.exports = router;
