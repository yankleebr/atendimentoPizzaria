import prismaClient from '../../prisma';

interface CategoryRequest{
    name:string;
}


class CreateCategoyService{
    async execute( {name}: CategoryRequest){

        if(name ===''){
            throw new Error('Nome inválido')
        }

        const category = await prismaClient.category.create({
            data:{
                name: name,
            },
            select:{
                id:true,
                name:true
            }
        })

        return category

    }
}


export { CreateCategoyService }