import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res){
    if (req.method === 'POST') {
        const { createdAt, updatedAt, description, nameFestival, content, userId } = req.body;
        const post = await prisma.post.create({
            data: {
                createdAt,
                updatedAt,
                description,
                nameFestival,
                content,
                userId
            },
        })
        res.status(200).json(post);
    }
}