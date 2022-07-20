const express = require("express");
const News = require("../model/newsmodel");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/", async (req, res) => {
  try {
    const newss = await News.find().lean().exec();

    res.status(200).send(newss);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

 app.post("/", async (req, res) => {
   try {
     const newss = await News.create(req.body);
     return res.status(500).send({newss});
   } catch (err) {
     return res.status(500).send({ message: err.message });
   }
 });

 module.exports = app;