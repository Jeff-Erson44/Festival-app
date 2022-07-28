import Head from "next/head"
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

export default function Index() {
    const router = useRouter()
    // si l'utilisateur est déjà connecté, on le redirige vers la page d'accueil
    useEffect(() => {
        if(cookies.user){
            router.push('/')
        }
     });
    // Etat du cookie
    const [cookies, setCookie] = useCookies(['user']);

    // Etat des donnes du formulaire inscription 
    const [inputUser, setInputUser] = useState({
        id: "",
        username: "",
        email: "",
        password: "",
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
                }),
            });
            const data = await res.json();
            if(res.ok){
                router.reload('/')
            }else{
                console.log('error');
            }
          
        }
    }
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
            router.push('/')
        }else{
            console.log('error');
        }
    }


    return (
        <>
            <Head>
                <title>Festiv&apos;app JK - Inscription/Connexion</title>
            </Head>

            <div>
                <div className={`form ${form === 'signin' ? 'active' : ''}`} onClick={() => setForm('signin')}>Se connecter</div>
                <div className={`form ${form === 'signup' ? 'active' : ''}`} onClick={() => setForm('signup')}>S'inscrire</div>
            </div>

            {form === 'signup' && (
                <>
                <h2>Créer un compte</h2>
                <form onSubmit={handleSignUp}>
                    <label> Nom d'utilisateur : </label>
                    <input type="text" name="username" value={inputUser.username || ''} onChange={(e) => setInputUser({ ...inputUser, username: e.target.value })} />
                    <label> Email : </label>
                    <input type="text" name="email" value={inputUser.email || ''} onChange={(e) => setInputUser({ ...inputUser, email: e.target.value })} />
                    <label> Mot de passe : </label>
                    <input type="password" name="password" value={inputUser.password || ''} onChange={(e) => setInputUser({ ...inputUser, password: e.target.value })} />
                    <button type="submit">Créer</button>
                </form>
                </>
                )}
            {form === 'signin' && (
                <>
                <h2>Connexion</h2>
                <form onSubmit={handleSignIn}>
                    <label> Nom d'utilisateur : </label>
                    <input type="text" name="username" value={inputedUser.username || ''} onChange={(e) => setInputedUser({ ...inputUser, username: e.target.value })} />
                    <label> Mot de passe : </label>
                    <input type="password" name="password" value={inputedUser.password || ''} onChange={(e) => setInputedUser({ ...inputedUser, password: e.target.value })} />
                    <button type="submit">Connexion</button>
                </form>
                </>
            )}   
    </>)
}
