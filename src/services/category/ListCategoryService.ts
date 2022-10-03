import prismaClient from '../../prisma';

class ListCategoryService{
    async excecute(){
        const category = await prismaClient.category.findMany({
            select:{
                id:true,
                name:true,
            }
        })
    
        return category;
    }
}

export {ListCategoryService}