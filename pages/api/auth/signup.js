import {  PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";


export default async function( req, res ) {
    // On accepte seulement les requêtes POST
    if ( req.method === "POST" ) {
        const Prisma = new PrismaClient();
        // On récupère toutes les infos utisateurs
        const { username, email, password } = req.body;
        // Validation des données
        if ( !username || !email.includes('@') || !password  ) {
            res.status( 400 ).send( "Données manquantes" );
            return;
        }
    // On vérifie que l'utilisateur n'existe pas déjà et que son email n'est pas déjà utilisé
    const user = await Prisma.user.findUnique({
        where: {
            username,
        }
    })
    // On hash le mot de passe
    if (user){
        res.status( 500 ).send( "Utilisateur déjà existant" );
        return;
    }
    const status  = await Prisma.user.create({
        data: {
            username,
            email,
            password: await hash( password, 8 ),
        }
    })
    await Prisma.$disconnect();
    
    res.status( 200 ).json({ message: 'Compte créé' });
    }

}