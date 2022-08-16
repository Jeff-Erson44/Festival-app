import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id, username, email, password, localisation, bio,  } = req.query;
    const user = await prisma.user.findUnique({
        where: {
        id,
        },
        data: {
            id,
            username,
            email,
            password,
            localisation,
            bio,
        }
    })
    res.statut(200).json(user);
    }
