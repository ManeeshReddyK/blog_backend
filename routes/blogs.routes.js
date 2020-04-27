const express = require("express");
const blogControllers = require('../controllers/blog.controllers');
const loginRequired = require('../middlewares/loginRequired');
let router = express.Router();


router.get("/blogs", blogControllers.getAllBlogs);

router.get("/blogs/:userEmail", blogControllers.getAllBlogsWithRespectiveUser);

router.get("/blog/:blogId", blogControllers.getBlogDetails);

router.put("/blog/:blogId", loginRequired, blogControllers.updateBlog);

router.post("/blog", loginRequired, blogControllers.createBlog);

router.delete("/blog/:blogId", loginRequired, blogControllers.deleteBlog);

module.exports = router;