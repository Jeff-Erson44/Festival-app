import Head from "next/head"
import { useCookies } from "react-cookie"
import { useState, useEffect } from "react"
import Link from "next/link"


export default function Profil() {

    const [cookies, setcookies] = useCookies(["user"])
    const [user, setUser] = useState()
    useEffect(() => {
        setUser(cookies.user)
    } , [cookies.user])



    return(
        <>
            <Head>
                <title>Festiv&apos;app - JK {user?.username}'s profil</title>
            </Head>
            <h1>Profil</h1>


            <p>{user?.username}</p>
            <p>{user?.email}</p>
            <p>{user?.bio ? user?.bio : "Aucune bio"}</p>
            <p>{user?.createdAt}</p>


            <Link href={`/profil/modify/${user?.username}`}>Modifier le profil</Link>

        </>
    )
}