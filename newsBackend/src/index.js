const express = require("express");
const connect = require("./config/dbs");
const newscontroller=require("./controller/newscontrollerr")
const app = express();
app.use(express.json());

app.use("/news", newscontroller);

app.listen(5000, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }
  console.log("Listening to port 5000");
});