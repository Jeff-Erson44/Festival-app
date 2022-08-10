import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res){
    if(req.method === 'POST'){
        const { id } = req.body;
        const comments = await prisma.comment.delete({
            where: {
                id,
            }
        })
        res.status(200).json(comments);
    }
}