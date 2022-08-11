import Head from "next/head"
import { useCookies } from "react-cookie"
import { useState, useEffect } from "react"
import Link from "next/link"
import { PrismaClient } from "@prisma/client"
import { parseCookies } from "../../helpers"



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
            <h1>Profil</h1>

            <h2>{user?.email}</h2>
            <h2>{user?.username}</h2>
            <h2>{user?.bio}</h2>
            <h2>{user?.localisation}</h2>

            <Link href={`/profil/modify/${user?.username}`}>Modifier le profil</Link>
        </>
    )
}


