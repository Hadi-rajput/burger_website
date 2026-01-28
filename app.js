const express = require('express');
const app = express();
const path = require('path');
const Controller = require("./controller/HomeController");

// Serve static files from views/assets
app.use(express.static(path.join(__dirname, "views")));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/",Controller.gethome);

app.listen(3000,()=>{
    console.log('server running at http://localhost:3000');
})