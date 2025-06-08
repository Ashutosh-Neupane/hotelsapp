const router = require("express").Router();
const {
  listHotels,
  addHotel,
  getHotel,
  deleteHotel,
  updateHotel,
 updateRating,
} = require("../controller/Hotels.controller.js");
const { checkAuth, checkAdmin } = require("../middleware/middlware.auth.js");
const { upload } = require("../util/multer.util.js");

router.get("/", listHotels);
router.get("/:id", getHotel);
router.post("/", checkAuth, checkAdmin, upload.any(), addHotel);
router.delete("/:id", checkAuth, checkAdmin, deleteHotel);
router.put("/:id", checkAuth, checkAdmin, upload.any(), updateHotel);
router.post("/:id/rating", checkAuth, updateRating);

module.exports = router;
