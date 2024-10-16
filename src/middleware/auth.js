const jwt = require('jsonwebtoken');
const SECRET_KEY = 'desenv_framework_II';

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];

    if(!authHeader)
    {
        return res.sendStatus(401);
    }

    jwt.verify(authHeader, SECRET_KEY, (err, user) =>{
        if(err){
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    })
}

module.exports = authenticateToken;