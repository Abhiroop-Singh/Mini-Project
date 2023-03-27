const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//Connecting to mongodb atlas
const uri = "mongodb+srv://abhiroop1969:r3xzCelMeq3EBxbX@cluster0.fpkc9zj.mongodb.net/miniproject?retryWrites=true&w=majority";

//mongoose.connect returns a promise so have to use .then and .catch
mongoose.connect(uri)
.then(()=>{console.info("Connected to DB");})
.catch((e)=>{console.log(e);});


app.get('/',(req,res)=>{
    res.send("Something");
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// middleware
app.use('/api/',require('./routes/user'));

app.listen(4000,()=>{
    console.log("Listening at port 4000");
});