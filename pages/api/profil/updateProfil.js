
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req,res) {
  if(req.method === "POST"){
    const {id, email, username, bio} = req.body
    const profil = await prisma.profil.update({
        where : {
            id,
        },
        data : {
            email,
            username,
            bio,
        },
    })
        res.status(200).json(profil)
    }
}