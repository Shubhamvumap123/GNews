const express = require("express");
const news = require("../model/newsmodel");

const app = express();

app.get("/", async (req, res) => {
  try {
    const newss = await news.find().lean().exec();

    res.status(200).send(newss);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

 app.post("/", async (req, res) => {
   try {
     const newss = await User.create(req.body);
   } catch (err) {
     return res.status(500).send({ message: err.message });
   }
 });

 module.exports = app;