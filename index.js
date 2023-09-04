require ("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require ("mongoose");
const fileUpload = require ("express-fileupload");
const cloudinary = require("cloudinary").v2;
const authRouter =require ("./routes/authRouter");
const storyRouter = require ("./routes/storyRouter");
const auth = require ("./middleware/authetication");
const cors = require ("cors");
// const rateLimit = require ('express-rate-limit');
//cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})


//middleware
app.use(express.json());
app.use(fileUpload({useTempFiles: true}))
app.use(cors())
// app.use(rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
// 	max: 100, // Limit each IP address
// }

// ))

//routes
app.use("/api/v1", authRouter);
app.use("/api/v1/story", auth, storyRouter);


//db connecti
const startServer = async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI);
       app.listen(PORT, ()=>{
        console.log(`server listening on port ${PORT}...`);
       })
    } catch (error) {
       console.log(error); 
    }
};

startServer()




app.use((req, res)=>{
    res.status(400).json({success: false, msg:"Resource not found"})
});



