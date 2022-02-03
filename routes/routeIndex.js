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
    res.render("login")
})

router.get("/register", function(req,res){
    //res.sendFile(path.join(__dirname,"register.html"));
    res.render("register")
})

router.get("/user/:user", function(req,res){
    //res.sendFile(path.join(__dirname,"home.html"));
    let user = req.params.user
    res.render("user",{user})
})

router.get("/:user/devices", function(req,res){
 //   res.sendFile(path.join(__dirname,"home.html"));
    let user = req.params.user
    res.render("devices",{user})
    
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
    res.render("contact")
})

module.exports = router