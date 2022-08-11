import Head from "next/head"
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

export default function Index() {
    const router = useRouter()

    // Etat du cookie
    const [cookies, setCookie] = useCookies(['user']);

    // Etat des donnes du formulaire inscription 
    const [inputUser, setInputUser] = useState({
        id: "",
        username: "",
        email: "",
        password: "",
        localisation: "",
        bio: "",
    })
    // Etat des donnes du formulaire de connexion 
    const [inputedUser, setInputedUser] = useState({
        username: "",
        password: "",
    })
    //Etat du formulaire à afficher
    const [form, setForm] = useState("signup");

    // Etat formulaire d'inscription
    const handleSignUp = async (e) => {
        e.preventDefault();
        // On récupère toutes les infos utisateurs
        if (!inputUser.username || !inputUser.email.includes('@') || !inputUser.password  ){
            alert("Données manquantes");
            return;
        }else{
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: inputUser.username,
                    email: inputUser.email,
                    password: inputUser.password,
                    localisation: inputUser.localisation,
                    bio: inputUser.bio,
                }),
            });
            const data = await res.json();
                if(res.ok){
                    setCookie("user", JSON.stringify(data), {
                        path: '/signup',
                        maxAge: 1296000, // Expires apres 2 semaines
                        sameSite: true,
                    })
                    toast('Compte créé !!',
                    {
                        icon: '🎉',
                        style: {
                        background: '#234D43',
                        color: 'white',
                        },
                    })
                    // mettre un delais avant de recharger la page pour que le toast soit visible
                    setTimeout(() => {
                    router.push('../login')
                    } , 2000)
                }else{
                    console.log('error');
                    toast('Oups !',
                    {
                        icon: '❌',
                        style: {
                        background: '#234D43',
                        color: 'white',
                        },
                    })
                }
        }
    }



return (
    <>
        <Toaster />
        <Head>
            <title>Festiv&apos;app JK - Inscription</title>
        </Head>


        <h2>Créer un compte</h2>

        <form onSubmit={handleSignUp}>
            <label> Nom d'utilisateur : </label>
            <input type="text" name="username" value={inputUser.username || ''} onChange={(e) => setInputUser({ ...inputUser, username: e.target.value })} />
            <label> Email : </label>
            <input type="text" name="email" value={inputUser.email || ''} onChange={(e) => setInputUser({ ...inputUser, email: e.target.value })} />
            <label> Mot de passe : </label>
            <input type="password" name="password" value={inputUser.password || ''} onChange={(e) => setInputUser({ ...inputUser, password: e.target.value })} />
            <label> Localisation : </label>
            <input type="text" name="localisation" value={inputUser.localisation || ''} onChange={(e) => setInputUser({ ...inputUser, localisation: e.target.value })} />
            <label> Biographie : </label>
            <textarea name="bio" value={inputUser.bio || ''} onChange={(e) => setInputUser({ ...inputUser, bio: e.target.value })} />
            <button type="submit">Créer</button>
        </form>
        <h3>Vous avez déja un compte ? <span> 
        <Link href='../login/signin'>
                Connectez-vous ici 
            </Link>
            </span>
        </h3>
    </>)
}
