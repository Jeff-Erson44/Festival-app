import Head from "next/head"
import { useCookies } from "react-cookie"
import { useState, useEffect } from "react"
import Link from "next/link"
import styled from "styled-components"
import Dashboard from "../../components/Dashboard"
import Image from "next/image"
import ProfilUser from "../../components/ProfilUser"

const StatusStyle = styled.div`
@media(min-width: 768px){
    display: none;
}
    .container--logo{
        display: flex;
        justify-content: center!important;
        width: inherit;
    }
    .container{
        width: 80%;
        z-index: 1;
        box-shadow: 2px 2px 16px 1px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        padding: 15px;
        margin: 0 auto;
        &__status{
            &--link{
                display: flex;
                gap: 10px;
            }
        }
    }
`



export default function Profil() {

    const [cookies, setcookies] = useCookies(["user"])
    const [user, setUser] = useState()
    useEffect(() => {
        setUser(cookies.user)
    } , [cookies.user])
    const [Img , setImg] = useState()

    const handleForm = async (e) => {
        e.preventDefault()
        const Data = new FormData()
        Data.append("image", Img)
        const res = await fetch(`/api/profil/${cookies?.user?.username}`, {
            method: "POST",
            body: Data,
        })
        const data = await res.json()
        if (res.ok) {
            setUser(data)
            setcookies('user',JSON.stringify(json),{
                path:'/',
                maxAge:1296000,
                sameSite:true,
            })
        }
    }
    return(
        <>
            <Head>
                <title>Festiv&apos;app - JK profil</title>
            </Head>
            <Dashboard/>
            {user ? (
            <>
            <ProfilUser/>
            </>
            ) : (
            <StatusStyle>
            <div className='container--logo'>
                <Image
                    src={"/logonav.svg"}
                    alt="logo de l'application"
                    width={180}
                    height={200}
                />
            </div>
            <div className="container">
                <div className='container__status'>
                    <div className="container__status--link">
                        <Image
                            src={'/icone/user.svg'}
                            height={35}
                            width={35}
                        />
                        <Link href="/login/">
                            <p>Se connecter</p>
                        </Link>
                    </div>
                    <div className="container__status--link">
                        <Image
                            src={'/icone/user-plus.svg'}
                            height={35}
                            width={35}
                        />
                        <Link href="/login/signup">
                            <p>S'inscrire</p>
                        </Link>
                    </div>
                </div>
            </div>
            </StatusStyle>
            )}
        </>
    )
}


