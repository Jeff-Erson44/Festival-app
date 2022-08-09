import Head from 'next/head';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import { PrismaClient } from "@prisma/client";
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';

export default function Home({ posts }) {
  const [Datas, setDatas] = useState([])
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


  // toast de suppresion de post
  toast('Votre post a bien été supprimé',
    {
      icon: '🗑️',
      style: {
        background: '#234D43',
        color: 'white',
      },  
    });
    fetchData()
  }

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
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Head>
        <title>Festiv'app JK</title>
      </Head>
      
      <h1>Festival</h1>
      <p>Test final : TS </p>

      <h2>Bonjour {user?.username}</h2>

          
    </>)
}

