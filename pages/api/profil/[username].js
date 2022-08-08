import { getImage } from '../../../utils/formidable';
import { uploadImage } from '../../../utils/cloudinary';
import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

export const config = {
    api: {bodyParser: false,
    },
};

export default async function handler (req, res) {

    const imageGet = await getImage(req);

    const user = await req.query.username;
    const userWho = await prisma.user.findFirst({
        where: {
            username: user,
        }, 
    })
    if(userWho) {
        if(imageGet) {
            res.status(500).json({
                message: "Erreur lors de l'upload de l'image",
            });
            const image = await uploadFile(imageGet.filepath);
            console.log(image);
            const imgUser = await prisma.user.update({
                where: {
                    username: imgUser.username,
                },
                data: {
                    image: image.url,
                },
            });
            res.status(200).json({
                username: imgUser.username,
                email : imgUser.email,
                image: imgUser.image,
                bio : imgUser.bio,
                createdAt : imgUser.createdAt,
                id: imgUser.id,
            });

        }
    }
    res.status(500).json({
        message: "Erreur",
    });
}
