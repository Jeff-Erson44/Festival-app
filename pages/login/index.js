import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react';
import { PrismaClient } from '@prisma/client';
import toast, { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import Link from 'next/link';

export default function Signin() {

    const router = useRouter()
    useEffect(() => {
        if(cookies.user){
            router.push('/')
        }
     });
    const [cookies, setCookie] = useCookies(['user']);
    // Etat des donnes du formulaire de connexion 
    const [inputedUser, setInputedUser] = useState({
        username: "",
        password: "",
    })
    // Etat des donnes du formulaire inscription 
    const [inputUser, setInputUser] = useState({
        id: "",
        username: "",
        email: "",
        password: "",
        localisation: "",
        bio: "",
    })

    // Etat formulaire de connexion
    const handleSignIn = async (e) => {
        e.preventDefault();
        // On récupère toutes les infos utisateurs
        const res = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: inputedUser.username,
                password: inputedUser.password,
            }),
        });
        const data = await res.json();
        if(res.ok){
            setCookie("user", JSON.stringify(data), {
                path: '/',
                maxAge: 1296000, // Expires after 1hr
                sameSite: true,
            })
            toast('Connexion réussie',
                    {
                        icon: '🚀',
                        style: {
                        background: '#234D43',
                        color: 'white',
                        },
                    })
                    // mettre un delais avant de recharger la page pour que le toast soit visible
            setTimeout(() => {
            router.push('/')
            } , 3000)
        }else{
            console.log('error');
        }
    }

    return(
        <>
        <Toaster />
            <Head>
                <title>Signin</title>   
            </Head>
            <h1>Signin</h1>

            <h2>Connexion</h2>
                <form onSubmit={handleSignIn}>
                    <label> Nom d'utilisateur : </label>
                    <input type="text" name="username" value={inputedUser.username || ''} onChange={(e) => setInputedUser({ ...inputUser, username: e.target.value })} />
                    <label> Mot de passe : </label>
                    <input type="password" name="password" value={inputedUser.password || ''} onChange={(e) => setInputedUser({ ...inputedUser, password: e.target.value })} />
                    <button>Connexion</button>
                </form>
                <h3>Vouas n'avez pas de compte ? <span> 
                    <Link href='../login/signup'>
                        Inscrivez-vous ici 
                    </Link>
                    </span>
                </h3>
        </>
    )
}