import { PrismaClient } from '@prisma/client';
import { uploadImage } from '../../../utils/cloudinary';


const prisma = new PrismaClient();

export default async function handler(req, res){

    const { content, description, nameFestival, userId } = req.body;
    console.log();
    const userUpload = await prisma.user.findUnique({
        where: {
            id: userId,
        }});

        if (userUpload) {
            if(content){
                const imagePost = await prisma.post.create({
                    data : {
                        description,
                        nameFestival,
                        content,
                        userId: userUpload.id,
                    }
                })
                res.status(200).json({
                    content: imagePost.content,
                    description: imagePost.description,
                    nameFestival: imagePost.nameFestival,
                    userId: imagePost.userId,
                });
            }
            else {
                res.status(500).json({
                    message: 'Image not found',
                })
            }
        }else{
            res.status(500).json({
                message: 'User not found',
            })
        }  
}