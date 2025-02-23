import jwt from 'jsonwebtoken';

const authMiddleware = async (req,res,next) => {
 
    const token = req.headers;
    if(!token){
        return res.status(401).send('You are not authorized');
    }

    try {
        const { userId } = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId  = userId;
        next();
    } catch (error) {
        return res.status(401).send('You are not authorized ');
    }


}

export default authMiddleware;