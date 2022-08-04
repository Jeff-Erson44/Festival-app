import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'



export default function Post()  {
  const router = useRouter()
  const [cookies, setcookies] = useCookies(['user'])
  const [Datas, setDatas] = useState([])
  const [inputedData, setInputedData] = useState({
    id: "",
    description: "",
    content:"",
    nameFestival:"",
  })
  const fetchData = async () => {
    const response = await fetch(`../api/post/getPost`);
    const json = await response.json()
    setDatas(json)
    }

  console.log(inputedData)

  const handleCreatePost = async (e) => {
    e.preventDefault()
    const response = await fetch(`../api/post/createPost`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description : inputedData.description,
        content : inputedData.content,
        nameFestival : inputedData.nameFestival,
        userId : cookies.user.id,
      }),
    })
    const json = await response.json()
    console.log(json)
    setInputedData({ id:"", description:"", content:"", nameFestival:"" })
    fetchData()

    router.push("/")
  }

    useEffect(() => {
      fetchData()
      }, [])

  return (
    <>
        <Head>
            <title>Festiva&apos;app JK - Nouveau post </title>
        </Head>

        <h1>Listing Post</h1>

        <div>
            <form onSubmit={handleCreatePost}>
                <input 
                    value={inputedData.description} 
                    type="text" 
                    placeholder='description' 
                    onChange={(e)=> setInputedData({...inputedData, description: e.target.value})} 
                />
                <input 
                    value={inputedData.content || ""} 
                    type="text" 
                    placeholder='Content' 
                    onChange={(e)=> setInputedData({...inputedData, content: e.target.value})}
                />
                <input 
                    value={inputedData.nameFestival || ""} 
                    type="text" 
                    placeholder='Nom du Festival' 
                    onChange={(e)=> setInputedData({...inputedData, nameFestival: e.target.value})}
                />
                <button type="submit">Publier</button>
            </form>
        </div>
    </>)
    
        
}



