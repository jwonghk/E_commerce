const jwt = require('jsonwebtoken');
function verifyToken(req,res, next) {

    // 1) grab the authorization header
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' });
    };

    // 2) Check if the header exists and split Bearer <token>
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'No token provided!'});
    };

    // 3) verify the token, so we should rerun the verification process
    // by using the same secret key that we were using to sign the token
    // during the first time when we generated the token for the user
    try {
        const decodedMsg = jwt.verify(token, process.env.JWT_SECRET || 'some default secret');
        req.user = { 
            userID : decodedMsg.userId,
            email: decodedMsg.email
        };

        return next();
    
       
    } catch (error) {
        return res.status(403).json({error: 'token is invalid!'});
    }
};

module.exports = verifyToken;

