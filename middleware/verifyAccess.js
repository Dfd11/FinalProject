let jwt = require("jsonwebtoken")

function verifyToken(req,res,next){

    let token = req.cookies.token || '' ;

    if (!token) {
        return res.redirect('/login')
    }

    else {

        // Validación de token

        jwt.verify(token, process.env.SECRET, function(err, datos){

        if (err) {
            console.log(err)
            return res.redirect('/login')
        }
        else {
            
            req.userId = datos.id
            console.log(req.userId)
            next()
            
        }


        })

    }

}

module.exports = verifyToken