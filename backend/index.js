const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

//Connecting to mongodb atlas
const uri =
  "mongodb+srv://abhiroop1969:r3xzCelMeq3EBxbX@cluster0.fpkc9zj.mongodb.net/miniproject?retryWrites=true&w=majority";

//mongoose.connect returns a promise so have to use .then and .catch
mongoose
  .connect(uri)
  .then(() => {
    console.info("Connected to DB");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/", (req, res) => {
  res.send("Something");
});

//for uploading tender
app.use("/uploads", express.static("uploads"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// middleware
app.use("/api/user", require("./routes/user"));
app.use("/api/tender", require("./routes/tender"));
app.use("/api/gov", require("./routes/gov_reviewer"));




app.listen(4000, () => {
  console.log("Listening at port 4000");
});
