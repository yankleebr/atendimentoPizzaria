import { Request, response, Response } from "express";
import { CreateUserService } from '../../services/user/CreateUserService';

class CreatUserController{
    async handle (req: Request, res: Response){
        //console.log(req.body)

        const {name, email, password} = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name,
            email,
            password
        });
        
        return res.json(user)
    }
}

export { CreatUserController}