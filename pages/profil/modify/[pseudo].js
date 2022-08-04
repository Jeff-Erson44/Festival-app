import { useCookies } from "react-cookie"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Head from "next/head"


export default function Modify({profil}){

    const router = useRouter()
    const [cookies, setcookies] = useCookies(["user"])
    const [user, setUser] = useState()
    useEffect(() => {
        setUser(cookies.user)
    } , [cookies.user])



    return (
        <>
            <Head>  
                <title>Festiv&apos;app JK - Modifier {user?.username}'s </title>
            </Head>

            <h1>Modifier le profil</h1>

    </>)
}