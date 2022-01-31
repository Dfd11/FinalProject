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
    res.send(`This is the HOME PAGE 
    <form action="/login" method="GET"><button>LOGIN</button></form>
    <form action="/copyright" method="GET"><button>COPYRIGHT</button></form>
    <form action="/about_us" method="GET"><button>ABOUT US</button></form> 
    <form action="/contact" method="GET"><button>CONTACT</button></form>`)
})

app.get("/login", function(req,res){
    //res.sendFile(path.join(__dirname,"login.html"));
    res.send(`This is the LOGIN PAGE 
    <form action="/" method="GET"><button>ROOT</button></form> 
    <form action="/register" method="GET"><button>REGISTER</button></form>
    <form action="/user/test" method="GET"><button>LOGIN TEST</button></form>`)
})

app.get("/register", function(req,res){
    //res.sendFile(path.join(__dirname,"register.html"));
    res.send(`This is the REGISTER PAGE 
    <form action="/user/test" method="GET"><button>REGISTER TEST</button></form>
    <form action="/" method="GET"><button>ROOT</button></form>`)
})

app.get("/user/:user", function(req,res){
    //res.sendFile(path.join(__dirname,"home.html"));
    res.send(`This is the '${req.params.user} HOME PAGE 
    <form action="/${req.params.user}/devices" method="GET"><button>DEVICES</button></form>`)
})

app.get("/:user/devices", function(req,res){
 //   res.sendFile(path.join(__dirname,"home.html"));
    res.send(`This is the 'USERS DEVICES PAGE' 
    <form action="/user/${req.params.user}" method="GET"><button>USER HOME</button></form>`)
})

app.get("/copyright", function(req,res){
   // res.sendFile(path.join(__dirname,"home.html"));
   res.send(`This is the 'COPYRIGHT PAGE' 
   <form action="/" method="GET"><button>ROOT</button></form>
   <form action="/user/test" method="GET"><button>USER HOME</button></form>`)
})

app.get("/about_us", function(req,res){
    //res.sendFile(path.join(__dirname,"home.html"));
    res.send(`This is the 'ABOUT US PAGE'
    <form action="/" method="GET"><button>ROOT</button></form>
    <form action="/user/test" method="GET"><button>USER HOME</button></form>`)
})

app.get("/contact", function(req,res){
    //res.sendFile(path.join(__dirname,"home.html"));
    res.send(`This is the 'CONTACT PAGE'
    <form action="/" method="GET"><button>ROOT</button></form>
    <form action="/user/test" method="GET"><button>USER HOME</button></form>`)
})