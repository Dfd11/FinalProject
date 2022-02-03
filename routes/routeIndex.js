/*----------------------------------------------------------------------------------------------------Libraries*/
const express = require('express');
const router = express();
let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")
/*----------------------------------------------------------------------------------------------------Models */
router.get("/", function(req,res){
    //res.sendFile(path.join(__dirname,"home.html"));
    res.render("gen_home")
    
})

router.get("/login", function(req,res){
    //res.sendFile(path.join(__dirname,"login.html"));
    res.send(`This is the LOGIN PAGE 
    <form action="/" method="GET"><button>ROOT</button></form> 
    <form action="/register" method="GET"><button>REGISTER</button></form>
    <form action="/user/test" method="GET"><button>LOGIN TEST</button></form>`)
})

router.get("/register", function(req,res){
    //res.sendFile(path.join(__dirname,"register.html"));
    res.send(`This is the REGISTER PAGE 
    <form action="/user/test" method="GET"><button>REGISTER TEST</button></form>
    <form action="/" method="GET"><button>ROOT</button></form>`)
})

router.get("/user/:user", function(req,res){
    //res.sendFile(path.join(__dirname,"home.html"));
    res.send(`This is the '${req.params.user} HOME PAGE 
    <form action="/${req.params.user}/devices" method="GET"><button>DEVICES</button></form>`)
})

router.get("/:user/devices", function(req,res){
 //   res.sendFile(path.join(__dirname,"home.html"));
    res.send(`This is the 'USERS DEVICES PAGE' 
    <form action="/user/${req.params.user}" method="GET"><button>USER HOME</button></form>`)
})

router.get("/copyright", function(req,res){
   // res.sendFile(path.join(__dirname,"home.html"));
   res.render(`copyright`)
})

router.get("/about_us", function(req,res){
    //res.sendFile(path.join(__dirname,"home.html"));
    res.render("about_us")
})

router.get("/contact", function(req,res){
    //res.sendFile(path.join(__dirname,"home.html"));
    res.send(`This is the 'CONTACT PAGE'
    <form action="/" method="GET"><button>ROOT</button></form>
    <form action="/user/test" method="GET"><button>USER HOME</button></form>`)
})

module.exports = router