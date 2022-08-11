import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const SigninStyle = styled.div`
    width: 100%;
    overflow:hidden ;
    @media screen and (max-width: 768px) {
        .container{
            .container__image{
                display: none;
            }
            .container__form{
                padding: 0 20px!important;
                &--logo{
                    margin-top: 35px!important;
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
        height: 96vh;
        width: 100%;
        .container__image{
            align-content: center;
            width: 40%;
        }
        .container__form{
            padding: 0 150px;
            margin: 0 auto;
            margin-top: 80px;
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
        <SigninStyle>
        <Toaster />
            <Head>
                <title>Signin</title>   
            </Head>
            <div className="container">
                <Image
                        src="/login/signin.webp"
                        alt="logo de l'application"
                        height={1024}
                        width={694}
                    />
            <div className="container__form">
                <div className="container__form--logo">
                    <Image
                        src="/logo.webp"
                        alt="logo de l'application"
                        width={125}
                        height={157}
                    />
                </div>
                <p>Connectez-vous avec votre nom d’utilisateur et votre mot de passe !</p>
                <form onSubmit={handleSignIn}>
                    <input 
                        type="text" 
                        name="username"
                        placeholder="Nom d'utilisateur"
                        value={inputedUser.username || ''} onChange={(e) => setInputedUser({ ...inputUser, username: e.target.value })} 
                    />
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Mot de passe"
                        value={inputedUser.password || ''} 
                        onChange={(e) => setInputedUser({ ...inputedUser, password: e.target.value })} 
                    />
                    <button>Connexion</button>
                </form>
                    <p className="text-info">Vous n'avez pas de compte ?&nbsp;
                        <span> 
                            <Link href='../login/signup'>
                                Inscrivez-vous ici 
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
            </SigninStyle>
        </>
    )
}