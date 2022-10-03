import { Request, Response } from "express";
import { CreateCategoyService } from '../../services/category/CreateCategoyService';

class CreateCategoyController{
    async handle (req: Request, res:Response){

        const {name} = req.body;

        const createCategoyService = await new CreateCategoyService();

        const category = await createCategoyService.execute({
            name
        });

        return res.json(category);

    }
}

export { CreateCategoyController }