const Blog = require("../models/Blog.model");
const User = require("../models/User.model");
const logger = require("../logs/log4js");

exports.getAllBlogs = (req, res, next) => {
    logger.info("getAllBlogs method");
    Blog.find()
        .populate("createdBy", "email -_id")
        .then(data => {
            logger.info("successfully data retrived");
            return res.json({
                success: true,
                message: "blogs retrived successfully",
                data,
                statusCode: 200
            })
        })
        .catch(error => {
            logger.error("failed getAllBlogs method");
            logger.error("error: ", error);
            return res.json({
                success: false,
                message: "blogs did not retrived",
                statusCode: 500
            })
        });
}


exports.getAllBlogsWithRespectiveUser = (req, res, next) => {
    let userEmail = req.params.userEmail;

    logger.info("getAllBlogsWithRespectiveUser method");
    logger.info(`userEmail ${userEmail}`);

    User.findOne({ email: userEmail })
        .then(user => {
            if (!user) {
                logger.error("user not existed");
                return res.status(400).json({
                    success: false,
                    message: "user not existed",
                    statusCode: 400
                })
            }
            else {
                logger.info("user existed");
                Blog.find({ createdBy: user._id })
                    .then(data => {
                        logger.info(`blogs with user ${userEmail} retrived successfully`);
                        return res.json({
                            success: true,
                            message: `blogs with user ${userEmail} retrived successfully`,
                            data,
                            statusCode: 200
                        })
                    })
                    .catch(error => {
                        logger.error("failed Blog.find method");
                        logger.error("error: ", error);
                        return res.status(500).json({
                            success: false,
                            message: `blogs with user ${userEmail} retrived failed`,
                            statusCode: 500
                        })
                    })
            }
        })
        .catch(error => {
            logger.error("failed User.findOne method");
            logger.error("error: ", error);
            return res.status(500).json({
                success: false,
                message: `blogs with user ${userEmail} retrived failed`,
                statusCode: 500
            })
        })

}

exports.createBlog = (req, res, next) => {

    logger.info(`createBlog method`);

    let newBlog = { ...req.body };
    newBlog.createdBy = req.userId;
    let createdBlog = new Blog({ ...newBlog })
    createdBlog.save()
        .then(blog => {

            logger.info(`blog created successfully`);

            return res.status(200).json({
                success: true,
                message: `blog created successfully`,
                statusCode: 200
            })
        })
        .catch(error => {

            logger.error("failed createdBlog.save method");
            logger.error("error: ", error);

            return res.status(500).json({
                success: false,
                message: `blog creation failed`,
                statusCode: 500
            })
        })
}

exports.updateBlog = (req, res, next) => {

    logger.info("updateBlog method");

    let blogId = req.params.blogId;
    let userId = req.userId;
    let updatedBlog = req.body;

    Blog.findById(blogId)
        .then(blog => {
            if (!blog) {

                logger.error("blog id not found");

                return res.status(400).json({
                    success: false,
                    message: "blog id not found",
                    statusCode: 400
                })
            }
            else {

                if (blog.createdBy != userId) {

                    logger.error("user is not allowed to update the blog");

                    return res.status(400).json({
                        success: false,
                        message: "user is not allowed to update the blog",
                        statusCode: 400
                    })
                }
                Blog.updateOne({ _id: blogId }, updatedBlog)
                    .then(() => {

                        logger.info("blog updated successfully");

                        return res.status(200).json({
                            success: true,
                            message: "blog updated successfully ",
                            statusCode: 200
                        })
                    })
                    .catch(error => {

                        logger.error("failed Blog.updateOne method");
                        logger.error("error: ", error);

                        return res.status(500).json({
                            success: false,
                            message: `blog updation failed`,
                            statusCode: 500
                        })
                    });
            }
        })
        .catch(error => {

            logger.error("failed Blog.findById method");
            logger.error("error: ", error);

            return res.status(500).json({
                success: false,
                message: `blog updation failed`,
                statusCode: 500
            })
        });
}

exports.deleteBlog = (req, res, next) => {

    logger.info("deleteBlog method");

    let blogId = req.params.blogId;
    let userId = req.userId;

    Blog.findById(blogId)
        .then(blog => {
            if (!blog) {

                logger.error("blog id not found");

                return res.status(400).json({
                    success: false,
                    message: "blog id not found",
                    statusCode: 400
                })
            }
            else {

                if (blog.createdBy != userId) {

                    logger.error("user is not allowed to delete the blog");

                    return res.status(400).json({
                        success: false,
                        message: "user is not allowed to delete the blog",
                        statusCode: 400
                    })
                }
                Blog.deleteOne({ _id: blogId })
                    .then(() => {

                        logger.info("blog deleted successfully");

                        return res.status(200).json({
                            success: true,
                            message: "blog deleted successfully ",
                            statusCode: 200
                        })
                    })
                    .catch(error => {

                        logger.error("failed Blog.deleteOne method");
                        logger.error("error: ", error);

                        return res.status(500).json({
                            success: false,
                            message: `blog deletion failed`,
                            statusCode: 500
                        })
                    });
            }
        })
        .catch(error => {

            logger.error("failed Blog.findById method");
            logger.error("error: ", error);

            return res.status(500).json({
                success: false,
                message: `blog deletion failed`,
                statusCode: 500
            })
        });
}


