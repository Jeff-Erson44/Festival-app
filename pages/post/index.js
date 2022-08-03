
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useCookies } from 'react-cookie'



export default function Post()  {
  const [cookies, setcookies] = useCookies(['user'])
  const [Datas, setDatas] = useState([])
  const [inputedData, setInputedData] = useState({
    id: "",
    description: "",
    content:"",
    nameFestival:"",
  })

  console.log(inputedData)

  const fetchData = async () => {
    const response = await fetch(`../api/post/getPost`);
    const json = await response.json()
    setDatas(json)
  }

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
  }

    const handleDeleteData = async (id) => {
        console.log(id)
    const response = await fetch(`../api/post/deletePost`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ id })
    })
    const json = await response.json()
    console.log(json)
    fetchData()
    }

    useEffect(() => {
    fetchData()
    }, [])

  return (
    <>
        <Head>
            <title>Festiva&apos;app</title>
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
                <button type="submit">Submit</button>
            </form>
        </div>
      <div>
        {Datas.map(({id, description, content, nameFestival}) =>{
          return(
            <div key={id}>
              <h3>{description}</h3>
              <p>{content}</p>
              <p>{nameFestival}</p>
              <button onClick={() => handleDeleteData(id)}>Delete data</button>
            </div>
          )
        })}
      </div>

    </>)
    
        
}



