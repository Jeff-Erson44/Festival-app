import { useCookies } from "react-cookie"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Head from "next/head"


export default function Modify({}){

    const router = useRouter()
    const [cookies, setcookies] = useCookies(["user"])
    const [user, setUser] = useState()
    useEffect(() => {
        setUser(cookies.user)
    } , [cookies.user])
    const [Data, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch("/api/profil/getProfil",);
        const json = await response.json()
        setData(json)
    }

    const [inputedUser, setInputedUser] = useState({
        username: '',
        email: '',
        bio: '',
    })
    console.log(inputedUser);
    const handleUpdateProfil = async () => {
        const response = await fetch(`/api/profil/updateProfil`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id : inputedUser.id,
            username: inputedUser.username,
            email: inputedUser.email,
            bio: inputedUser.bio,
          }),
        })
        const json = await response.json()
        console.log(json)
        setInputedProfil({ id:"", username:"", email:"", bio:"" })
        fetchData()
      }
    
      useEffect(() => {
        fetchData()
      }, [])



    return (
        <>
            <Head>  
                <title>Festiv&apos;app JK - Modifier {user?.username}'s </title>
            </Head>

            <h1>Modifier le profil</h1>

            <form onSubmit={handleUpdateProfil}>
                <label>Username</label>
                <input type="text" value={inputedUser.username} onChange={(e) => setInputedUser({...inputedUser, username: e.target.value})} />
            </form>

    </>)
}