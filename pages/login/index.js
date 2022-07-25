import Head from "next/head"
import { useState } from "react";

export default function Index() {

    // Etat des donnes du formulaire 
    const [inputUser, setInputUser] = useState({
        id: "",
        username: "",
        email: "",
        password: "",
    })

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
            console.log(data);
        }
    }

    return (
        <>
            <Head>
                <title>Sign Up</title>
            </Head>

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
    )
}
