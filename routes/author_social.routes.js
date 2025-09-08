const {
  getAllAuthor_socials,
  addAuthor_social,
  updateAuthor_social,
  deleteAuthor_social,
  getOneAuthor_socialByID,
} = require("../controllers/author_social.controller");
const router = require("express").Router();

router.get("/", getAllAuthor_socials);
router.post("/", addAuthor_social);
router.patch("/:id", updateAuthor_social);
router.delete("/:id", deleteAuthor_social);
router.get("/:id", getOneAuthor_socialByID);

module.exports = router;
