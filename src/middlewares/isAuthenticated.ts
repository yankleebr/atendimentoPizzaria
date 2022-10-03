import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
    sub: string;
}


export function isAuthenticated( req:Request, res:Response, next:NextFunction){
    
    //Receber o Token
    const authToken = req.headers.authorization;

    if (!authToken){
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ")

    //console.log(token);
    
    //Validar o Token
    try{
       const {  sub } = verify(
            token,
            process.env.JWT_SECRET
             ) as Payload;

            //Recuperar o ID do token
             req.user_id = sub;
            
             return next();

        } catch (err){
            res.status(401).end();
        }
    
}

