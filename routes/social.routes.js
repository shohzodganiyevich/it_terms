const {
  getAllSocials,
  addSocial,
  updateSocial,
  deleteSocial,
  getOneSocialByID,
} = require("../controllers/social.controller");
const router = require("express").Router();

router.get("/", getAllSocials);
router.post("/", addSocial);
router.patch("/:id", updateSocial);
router.delete("/:id", deleteSocial);
router.get("/:id", getOneSocialByID);

module.exports = router;
