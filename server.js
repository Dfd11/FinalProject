//Load libraries
let express = require("express");
let path = require("path")

//Init the server
let app = express();
let PORT = process.env.PORT || 3000;

//To be able to read json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"home.html"));
})

app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"login.html"));
})

app.get("/register", function(req,res){
    res.sendFile(path.join(__dirname,"register.html"));
})

app.get("/:user", function(req,res){
    res.sendFile(path.join(__dirname,"home.html"));
})

app.get("/:user/devices", function(req,res){
    res.sendFile(path.join(__dirname,"home.html"));
})

app.get("/copyright", function(req,res){
    res.sendFile(path.join(__dirname,"home.html"));
})

app.get("/about_us", function(req,res){
    res.sendFile(path.join(__dirname,"home.html"));
})

app.get("/contact", function(req,res){
    res.sendFile(path.join(__dirname,"home.html"));
})