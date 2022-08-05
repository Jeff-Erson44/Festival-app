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

    const handleImg = async (e) => {
        setImg(e.target.files[0])
    }

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

            {user?.image && <img src={user?.image} alt="profil" />}


            <Link href={`/profil/modify/${user?.username}`}>Modifier le profil</Link>

            <form onSubmit={handleForm}>
                <input 
                    type="file" 
                    accept=".jpg, .jpeg, .png"
                />
                <button type="submit" onChange={handleImg}>Envoyer</button>
            </form>

        </>
    )
}