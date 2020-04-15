require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require('./logs/log4js');
const authRoutes = require('./routes/auth.routes');
const blogRoutes = require('./routes/blogs.routes');

let app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.use("/api", blogRoutes);

mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_DBNAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true
})
    .then(() => {
        logger.info('connected to database');
        app.listen(process.env.PORT);
        logger.info(`connected to server on port ${process.env.PORT}`);
    })
    .catch((error) => {
        logger.error("not connected to database");
        logger.error('error :', error);
    })

