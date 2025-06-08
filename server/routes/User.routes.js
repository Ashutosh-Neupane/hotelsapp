const router = require("express").Router();

const {Login,Signup,Logout} = require("../controller/User.controller.js");
const {checkAuth} = require("../middleware/middlware.auth.js");

router.post("/login",Login);
router.post("/signup",Signup);
router.post("/logout",checkAuth,Logout);
router.get("/blogs",checkAuth,getBlogs);
router.post("/blogs",checkAuth,addBlog);
router.put("/blogs/:id",checkAuth,updateBlog);

module.exports = router;