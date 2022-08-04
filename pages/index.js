import Head from 'next/head';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';

export default function Home() {

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

  const [Datas, setDatas] = useState([])
  const [cookies, setcookies] = useCookies(['user'])
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




      <div>
        {Datas.map(({id, description, content, nameFestival, userId}) =>{
          return(
            <div key={id}>
              <h3>{description}</h3>
              <p>{content}</p>
              <p>{nameFestival}</p>
              <div>
                {cookies?.user?.id === userId ? <button onClick={() => handleDeleteData(id)}>Supprimer</button> : null}
              </div>              
            </div>
          )
        })}
      </div>  
    </>)
}







