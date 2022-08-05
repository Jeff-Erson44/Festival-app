import Head from 'next/head';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import { parseCookies } from '../helpers'
import { prisma } from '@prisma/client';

export default function Home() {
  const [cookies, setcookies] = useCookies(["user"])
  const [user, setUser] = useState()
  useEffect(() => {
      setUser(cookies.user)
  } , [cookies.user])

const handleDeleteData = async (id) => {

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

  const [Datas, setDatas] = useState([])
  const fetchData = async () => {
  const response = await fetch(`../api/post/getPost`);
  const json = await response.json()
  setDatas(json)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>

      <Head>
        <title>Festiv'app JK</title>
      </Head>
      
      <h1>Festival</h1>
      <p>Test final : TS </p>

      <h2>Bonjour {user?.username}</h2>




      <div>
        {Datas.map(({id, description, content, nameFestival, userId}) =>{
          return(
            <div key={id}>
              <h3>{description}</h3>
              <p>{content}</p>
              <p>{nameFestival}</p>
              <p>ecrit par : </p>
              <div>
                {cookies?.user?.id === userId ? <button onClick={() => handleDeleteData(id)}>Supprimer</button> : null}
              </div>              
            </div>
          )
        })}
      </div>  
    </>)
}


