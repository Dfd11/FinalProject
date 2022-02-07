/*----------------------------------------------------------------------------------------------------Libraries*/
const express = require('express');
const axios = require('axios')
const router = express();
const User = require('../model/user');
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let verify = require('../middleware/verifyAccess')
/*----------------------------------------------------------------------------------------------------Models */
let Device = require("../model/device");
const { db } = require('../model/device');
const { token } = require('morgan');
const { request } = require('express');
/*----------------------------------------------------------------------------------------------------Routes */
router.get("/", function(req,res){

    let token = req.cookies.token || '' ;
    console.log(token)
    axios.get(`http://api.mediastack.com/v1/news?access_key=a50b229b653dcd0bf6070d5ba6d7a944&categories=technology&languages=en,es&limit=5`)
    .then(response =>{
        const apiResponse = response.data;
        if (token) {
            res.render('gen_home', { articles : apiResponse.data, userId: true })
        }
        else {
            res.render('gen_home', { articles : apiResponse.data, userId: false })
        }
        
    }).catch(error => {
        console.log(error);
    });
})

router.get("/login", function(req,res){
    res.render("login")
})

router.get("/register", function(req,res){
    res.render("register")
})

router.get("/devices", verify, async (req,res) =>{                                                              /* VERIFY */      
    let user = req.userId
    
    let devices = await Device.find({user:user})
    let locations = await Device.distinct("deviceLocation",{user:user})
    console.log(devices,locations)
    res.render("devices",{user,devices,locations})
    
})

router.get("/copyright", function(req,res){
   res.render(`copyright`)
})

router.get("/about_us", function(req,res){
    res.render("about_us")
})

router.get("/contact", function(req,res){
    res.render("contact")
})

router.post("/:user/devices", verify, async (req,res) =>{                                                       
    let device = new Device(req.body)
    device.user = req.params.user                                                                            
    device.deviceIp= "192.168.10.1"                                                                
    console.log(device)
    await device.save()
    res.redirect("/devices")
})

router.get("/delete/:user/:id",verify, async (req,res) =>{                                                   
    let id = req.params.id
    await Device.remove({_id:id})
    res.redirect("/devices")                                                        
})

router.get("/edit/:user/:id",verify, async (req,res) =>{                                                   
    let user = req.params.user
    let id = req.params.id
    let device =await Device.findById(id)
    console.log(device)
    res.render("edit",{device,user,id})                                                        
})

router.post("/edit/:user/:id",verify, async (req,res) =>{                                                   
    let user = req.params.user
    let id = req.params.id
    await Device.updateOne({_id:id},req.body)
    res.redirect(`/devices`)                                                   
})


router.post('/login', async (req,res) => {
    
    let username = req.body.username
    let plainpassword = req.body.password

    let user = await User.findOne({username: username})

    // No existe usuario
    if (!user) {
        res.redirect("/login")
    }

    // Existe usuario
    else {
        let valid = await bcrypt.compareSync(plainpassword, user.password)

        if (valid) {

            let token = jwt.sign({id:user.username}, process.env.SECRET, {expiresIn:"1h"});
            console.log(token)
            res.cookie("token", token,{httpOnly:true})
            res.redirect("/")
        }

        else {
            res.redirect("/login")
        }
    }

    
})


router.post('/addUser', async (req,res) => {

    let user = new User (req.body)

    let exists = await User.findOne({username: user.username})
    console.log(user)
    console.log(exists)

    if (!exists) {
    
        // Hash a la contraseña

        user.password = bcrypt.hashSync(user.password,10)

        await user.save()

        res.redirect('/login')
    }
    else {
        
        res.redirect('/register')
    }
    
})

router.get("/logoff", (req,res) => {
    res.clearCookie("token")
    res.redirect("/")
})

module.exports = router