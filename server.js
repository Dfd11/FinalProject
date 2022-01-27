//Load libraries
let express = require("express");
let path = require("path")

//Init the server
let app = express();
let PORT = process.env.PORT || 3000;

//To be able to read json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("Public"))

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.get("/", function(req,res){
    //res.sendFile(path.join(__dirname,"home.html"));
    res.send("This is the 'HOME PeGE'")
})

app.get("/login", function(req,res){
    //res.sendFile(path.join(__dirname,"login.html"));
    res.send("This is the 'LOGIN PAGE'")
})

app.get("/register", function(req,res){
    //res.sendFile(path.join(__dirname,"register.html"));
    res.send("This is the 'REGISTER PAGE'")
})

app.get("/:user", function(req,res){
    //res.sendFile(path.join(__dirname,"home.html"));
    res.send(`This is the '${req.params.user} HOME PAGE'`)
})

app.get("/:user/devices", function(req,res){
 //   res.sendFile(path.join(__dirname,"home.html"));
    res.send("This is the 'USERS DEVICES PAGE'")
})

app.get("/copyright", function(req,res){
   // res.sendFile(path.join(__dirname,"home.html"));
   res.send("This is the 'COPYRIGHT PAGE'")
})

app.get("/about_us", function(req,res){
    //res.sendFile(path.join(__dirname,"home.html"));
    res.send("This is the 'ABOUT US PAGE'")
})

app.get("/contact", function(req,res){
    //res.sendFile(path.join(__dirname,"home.html"));
    res.send("This is the 'CONTACT PAGE'")
})