import Head from "next/head"
import { useCookies } from "react-cookie"
import { useState, useEffect } from "react"
import Link from "next/link"
import { PrismaClient } from "@prisma/client"
import Dashboard from "../../../components/Dashboard"
import styled from "styled-components"

const UpdateStyle = styled.div`
    form{
        margin-left: 150px;
    }

`


export default function Profil() {

    const [cookies, setcookies] = useCookies(["user"])
    const [user, setUser] = useState()
    useEffect(() => {
        setUser(cookies.user)
    } , [cookies.user])
    const [inputedData, setInputedData] = useState({
        id: "",
        username: "",
        email: "",
        password: "",
        localisation: "",
        bio: "",
      })

    const handleUpdateData = async () => {
        const response = await fetch(`/api/auth/updateProfil`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: inputedData.id,
            username: inputedData.username,
            email: inputedData.email,
            password: inputedData.password,
            bio: inputedData.bio,
            localisation: inputedData.localisation,
          }),
        })
        const json = await response.json()
        console.log(json)
        setInputedData({ id:"", username: "", email: "", password: "", localisation: "", bio: "" })
        setEditMode(false)
        fetchData()
      }
    return(
        <>
        <UpdateStyle>
            <Head>
                <title>Festiv&apos;app - JK profil</title>
            </Head>
{/*            <Dashboard/>*/}


        <form onClick={handleUpdateData}>
          <input 
                value={inputedData.username} 
                type="text" 
                placeholder='username' 
                onChange={(e)=> setInputedData({...inputedData, username: e.target.value})} 
            />
          <input 
                value={inputedData.email} 
                type="text" 
                placeholder='email' 
                onChange={(e)=> setInputedData({...inputedData, email: e.target.value})} 
            />
          <input 
                value={inputedData.bio} 
                type="text" 
                placeholder='bio' 
                onChange={(e)=> setInputedData({...inputedData, bio: e.target.value})} 
            />
          <input 
                value={inputedData.localisation} 
                type="text" 
                placeholder='localisation' 
                onChange={(e)=> setInputedData({...inputedData, localisation: e.target.value})} 
            />
          <input 
                value={inputedData.password} 
                type="text" 
                placeholder='password' 
                onChange={(e)=> setInputedData({...inputedData, password: e.target.value})} 
            />
         
          <button type="submit">Modifier</button>
        </form>
        </UpdateStyle>
        </>
    )
}


