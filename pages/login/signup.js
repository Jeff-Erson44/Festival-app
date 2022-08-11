import Head from "next/head"
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const SignupStyle = styled.div`
    @media screen and (max-width: 768px) {
        .container{
            .container__image{
                display: none;
            }
            .container__form{
                padding: 0 20px!important;
                &--logo{
                    margin-top: 40px;
                }
                p{
                    font-size: 1rem!important;
                    margin-bottom: 20px;
                }
                form{
                    input, textarea{
                        margin-bottom: 25px;
                    }
                    button{
                        margin-bottom: 30px!important;
                    }
                }
            }
        }
    }
    .container {
        display: flex;
        .container__image{
            align-content: center;
        }
        .container__form{
            padding: 0 150px;
            &--logo{
                display: flex;
                justify-content: center;
            }
            p{
                text-align: center;
                margin: 35px 0;
                font-size: 1.5rem;
            }
            form{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }
            input, textarea{
                width: 100%;
                margin-bottom: 45px;
                padding: 10px 0 10px 20px;
            }
            button{
                display: flex;
                margin: 20px 0 20px;
            }
        }
        .text-info{
            font-size: 1rem!important;
            margin-top: -5px!important;
            span{
                font-family: 'Switzer-Semibold';
            }
        }
    }
`
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
        <SignupStyle>
        <Toaster />
        <Head>
            <title>Festiv&apos;app JK - Inscription</title>
        </Head>

        <div className="container">
            <div className="container__image">
                <Image
                    src="/login/signup.webp"
                    alt="photo illustration festival page de création de compte"
                    width={694}
                    height={1042}
                />
            </div>
            <div className="container__form">
                <div className="container__form--logo">
                    <Image
                        src="/logo.webp"
                        alt="logo de l'application"
                        width={125}
                        height={157}
                    />
                </div>
                <p>Créez un compte pour voir et partager<br></br> vos photos avec vos amis</p>
                <form onSubmit={handleSignUp}>
                    <input 
                        type="text" 
                        name="username"
                        placeholder="Nom d'utilisateur"
                        value={inputUser.username || ''} 
                        onChange={(e) => setInputUser({ ...inputUser, username: e.target.value })} 
                    />
                    <input 
                        type="text" 
                        name="email"
                        placeholder="Email"
                        value={inputUser.email || ''} 
                        onChange={(e) => setInputUser({ ...inputUser, email: e.target.value })} 
                    />
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Mot de passe"
                        value={inputUser.password || ''} 
                        onChange={(e) => setInputUser({ ...inputUser, password: e.target.value })} 
                    />
                    <input 
                        type="text" 
                        name="localisation"
                        placeholder="Localisation"
                        value={inputUser.localisation || ''} 
                        onChange={(e) => setInputUser({ ...inputUser, localisation: e.target.value })} 
                    />
                    <textarea 
                        name="bio"
                        placeholder="Dis nous en plus sur toi"
                        value={inputUser.bio || ''} 
                        onChange={(e) => setInputUser({ ...inputUser, bio: e.target.value })} 
                    />
                    <button type="submit">Créer un compte</button>
                </form>
                <p className="text-info">Vous avez déja un compte ?&nbsp;  
                    <span> 
                        <Link href='../login'>
                             Connectez-vous ici 
                        </Link>
                    </span>
                </p>
            </div>
        </div>
        </SignupStyle>
    </>)
}
