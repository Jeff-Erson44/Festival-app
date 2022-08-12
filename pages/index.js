            
import Head from 'next/head';
import { Cookies, useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import { PrismaClient } from "@prisma/client";
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home({ posts }) {
  const router = useRouter();
  // on veut recuperer l'id du post que l'on commente 
  const [Datas, setDatas] = useState([])
  const [cookies, setcookies] = useCookies(["user"])
  const [user, setUser] = useState()
  const [inputedData, setInputedData] = useState({
    content: "",
})
  useEffect(() => {
      setUser(cookies.user)
  } , [cookies.user])

  const fetchData = async () => {
  const response = await fetch(`../api/post/getPost`);
  const json = await response.json()
  setDatas(json)
  }
  const handleDeletePost= async (id) => {

    const response = await fetch(`api/post/deletePost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id })
    })
    const json = await response.json()
    console.log(json)

    router.replace({pathname: router.asPath},undefined, {scroll: false})
  }

  const handleCreateComment = async (posts) => {
    
    const response = await fetch(`/api/comment/createComment`,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: inputedData?.content,
          userId: user?.id,
          postId: posts,
        }), 
    })
    console.log(user?.id);
    if(response.ok){
      toast('Votre commentaire a bien été créé',
      { 
        icon: '💬',
        style: {
          background: '#234D43',
          color: 'white',
        },
      });
      router.replace({pathname: router.asPath},undefined, {scroll: false})

    }
    const json = await response.json()
    console.log(json)
    setInputedData({ content:"" })
    fetchDataCom()
    // afficher toast de création de commentaire
}

  const fetchDataCom = async () => {
    const response = await fetch(`../api/comment/getComment`);
    const json = await response.json()
    setDatas(json)
    }

  useEffect(() => {
    fetchData(), fetchDataCom()
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

      {posts?.map((post) => (
        <div key={post?.id}>
          <h2>{post?.description}</h2>
          <h3>{post?.nameFestival}</h3>
          <p>{post?.user?.username}</p>
         
            <Image
              src={post?.content}
              width={400}
              height={400}
              alt={post?.description} 
            />

            {user?.id === post?.user?.id && (
              <button onClick={() => handleDeletePost(post?.id)}>
                Supprimer
              </button>
            )}

          <form onSubmit={
            (e) => {
              e.preventDefault(),
              handleCreateComment(post?.id)
              }
            }>
            <input
                type="text"
                name="content"
                placeholder="Votre commentaire"
                value={inputedData?.content || ""}
                onChange={(e)=> setInputedData({...inputedData, content: e.target.value})}
            />
            <button type='submit'>Envoyer</button>
          </form>

          <h2> Commentaire </h2>
              {post?.comments.map((comment) => (
              <div key={comment?.id}>
                <p>{comment?.userId}</p>
                <p>{comment?.content}</p>
              </div>
            ))}
            {post?.comments?.length === 0 ? (
              <p>Aucun commentaire</p>
            ) : (
              ""
            )}
        </div>
      ))
      }
    </>)
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      createdAt: true,
      content: true,
      description: true,
      nameFestival: true,
      user: {
        select: {
          id: true,
          username: true,
          content: true,
        }
      },
      comments: {
        select: {
          id: true,
          content: true,
          userId: true,
          postId: true,
        }
      }
    }  
  });console.log(posts)
  return {
    props: {
      posts
    }
  }
}