const {
  getAllAuthors,
  addAuthor,
  updateAuthor,
  deleteAuthor,
  getOneAuthorByID,
} = require("./../controllers/author.controller");
const router = require("express").Router();

router.get("/", getAllAuthors);
router.post("/", addAuthor);
router.patch("/:id", updateAuthor);
router.delete("/:id", deleteAuthor);
router.get("/:id", getOneAuthorByID);

module.exports = router;
