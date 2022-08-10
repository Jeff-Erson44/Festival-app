import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res){
    const { id, content, postId, userId } = req.body;
    const comment = await prisma.comment.create({
        data: {
            id,
            content,
            userId,
            postId,
        },
    });
    res.status(200).json(comment);
}