//Load libraries
let express = require("express");
const mongoose = require("mongoose");
let dotenv = require("dotenv");
const morgan = require("morgan")
                                                                                                /*COOKIE PARSER*/
                                                                                                /*DOTENV*/

//Init the server
let app = express();
dotenv.config()

//Connect to mongo DB  
mongoose.connect(process.env.MONGODB_HOST,{                                                  /*SET MONGO VARIABLE IN HEROKU*/
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log("db Connected"))
    .catch(err => console.log(err))

const router = require('./routes/routeIndex')

//settings
let PORT = process.env.PORT || 3000;
app.set('port',PORT)
app.set('views','views')
app.set('view engine','ejs')


//middleware
//To be able to read json
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/",router);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

