import jwt from "jsonwebtoken";
import authConfig from "../config/auth";

function authMiddleware(request, response, next){
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({ error: "Token not provided" });
    }

 
 const Token = authToken.split(" ").at(1);

 try{
    jwt.verify(Token, authConfig.secret, (err, decoded) => {
        if (err) {
            throw new Error();
        }
        
        request.userId = decoded.id;
     
        
 })
 
} catch (err) {
    return response.status(401).json({ error: "Token invalid"});

    }


 
 
    return next();
}

      export default authMiddleware;  