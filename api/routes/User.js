const express = require("express");
const router = express.Router();

const { register } = require("../controllers/User");

router.post("/register", register);

module.exports = router;

// {
//     A:{
//         B:"value",
//         C:"Value",
//         D:{
//             "E":"Value",
//             "F":"Value"
//         }
//     }
// }
