const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

mongoose.connect(process.env.MONGO_URL,(err)=>{
    console.log(err ?? 'Successfully Connected');
});

//middle Ware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(express.urlencoded({extended : true}));

app.use("/api/users/",userRoute);
app.use("/api/auth/",authRoute);

app.listen(4000, () => {
    console.log('Backend server is running!');
})