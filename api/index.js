const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authRoute = require("./route/auth");
const userRoute = require("./route/users");
const postRoute = require("./route/posts");
const categoriesRoute = require("./route/categories");
const multer = require("multer");
const path = require("path");

app.use(express.json()); //send json object
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoriesRoute);

// app.use("/dhruv", (req, res) => {
//   console.log("hey this is dhruv url");
// });

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});

// var router1 = express.Router();
// var router2 = express.Router();
// var router3 = express.Router();

// router1.get("/r1", (req, res) => {
//   console.log("Router1");
//   res.end();
// });
// router2.get("/r2", (req, res) => {
//   console.log("Router2");
//   res.end();
// });
// router3.get("/r3", (req, res) => {
//   console.log("Router3");
//   res.end();
// });

// app.use(router1);
// app.use(router2);
// app.use(router3);
