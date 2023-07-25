const express = require("express");
const dotEnv = require("dotenv");
const helmet = require("helmet");
var cors = require('cors')

const app = express();

const userRoutes = require("./routes/User");
const postRoutes = require("./routes/Post");

// middle wares
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

dotEnv.config();
app.use(express.json());
app.use(helmet());


app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
module.exports = app;
