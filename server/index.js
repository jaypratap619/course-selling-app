const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const DB_URL = process.env.DATABASE_URL;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)
app.get("/", (req, res) => res.json({ msg: "hello world after the class" }));

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect(DB_URL)
app.listen(3000, () => console.log('Server running on port 3000'));