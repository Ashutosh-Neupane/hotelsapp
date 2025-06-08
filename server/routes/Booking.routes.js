const router = require("express").Router();
const {doBooking,listBookings,cancelBooking,yourBooking} = require("../controller/Booking.controller.js");
const {checkAuth, checkAdmin} = require("../middleware/middlware.auth.js");

router.post("/",checkAuth,doBooking);
router.get("/checkBooking",checkAuth,checkAdmin,listBookings);
router.delete("/:id",checkAuth,cancelBooking);
router.get("/",checkAuth,yourBooking);

module.exports = router;