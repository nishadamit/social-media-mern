const express = require("express");
const dotEnv = require("dotenv");
const helmet = require("helmet");
var cors = require('cors')
const path = require("path");
const multer = require("multer");

const app = express();

const userRoutes = require("./routes/User");
const postRoutes = require("./routes/Post");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
const upload = multer({ storage: storage })


// middle wares
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

dotEnv.config();
app.use("/images", express.static(path.join(__dirname, "public/images")))
app.use(express.json());
app.use(helmet());

// app.post("/api/upload", upload.single("postImage"), (req,res) =>{
//     res.send("file uploaded successfully");
// })
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
module.exports = app;
