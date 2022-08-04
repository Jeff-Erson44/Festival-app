import { PrismaClient } from '@prisma/client';
import { compare } from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(
    req, res
){


    if(req.method === 'POST'){
        const { username,  password } = req.body;
        if(!username ||  !password){
            res.status(400).send('Données manquantes');
            return;
        }

        // on cherche dans la base de données l'utilisateur avec le username correspondant
        const passwordUser = await prisma.user.findUnique({
            where: {
                username,
            }
        });

        if(passwordUser){
            const isValid = await compare(password, passwordUser.password);
            if(!isValid){
                res.status(400).send('Mot de passe ou nom d\'utilisateur incorrect');
            }else{
                res.status(200).json({
                    username : passwordUser.username,
                    email : passwordUser.email,
                    id : passwordUser.id,
                    createdAt : passwordUser.createdAt,
                })
                await prisma.$disconnect()
                console.log('Vous êtes déconnecté');
            }
        }
    }
}