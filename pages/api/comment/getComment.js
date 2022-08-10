import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res){
    // fonction get 
    const comments = await prisma.comment.findMany();
    res.json(comments);


}