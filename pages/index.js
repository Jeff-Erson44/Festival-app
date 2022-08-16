            
import Head from 'next/head';
import { Cookies, useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import { PrismaClient } from "@prisma/client";
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import styled from 'styled-components';

const PostStyle = styled.div`
    display: flex;
    justify-content: center;
  .container{
    margin-left: 120px;
    margin-top: 100px;
    width: 45%!important;
    .container--logo{
      display: none;
    }
    &__post{
      border-radius: 15px;
      box-shadow: 2px 2px 16px 1px rgba(0, 0, 0, 0.25);
      padding: 40px;
      border: 1px solid transparent;
      margin-bottom: 45px;
      display: flex;
      &--comment{
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;
        margin-left: 20px;
        .post--comment-list{
          p:first-of-type{
            font-family: 'Switzer-SemiBold';
          }
        }
        .post--comment-formulaire{
          width: 100%!important;
          p:first-of-type{
            font-family: 'Switzer-SemiBold';
          }
          input{
            margin-bottom: 15px;
            width: 97%;
          }
          .btn{
            display: flex;
            justify-content:flex-end ;
          }
          button{
            background: black;
            color: white;
            border-radius: 10px;
            padding: 10px 20px
          }
        }
      }
      .container-left{
        .like-number{
        font-family: 'Switzer-SemiBold';
        }
        .action__post{
          display: flex;
          gap: 15px;
          margin-top: 15px;
          cursor: pointer;
        }
      }
      &--info{
        display: flex;
        gap: 10px;
        .avatar{
          display: flex;
          align-items: center;
        }
        .highlight{     
          p{
            font-size: .875rem;
            font-family: 'Switzer-SemiBold';
          }
          p:last-of-type{
            font-family: 'Switzer-Regular';
          }
        }
      }
    }
  }
  @media(max-width:768px){
    .container{
      width: 100%!important;
      padding: 0 20px;
      margin: 50px 0 120px;
      .container--logo{
        text-align: center;
        margin: 15px 0;
        display: block;
      }
      &__post{
        flex-wrap: wrap;
        padding: 5px;
        border: none;
        box-shadow: none;
        &--comment{
          width: 100%!important;
        }
      }
    }
  }
`

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

      {user ? ( <Dashboard/> ) : ( <Login/> )}
      

      <PostStyle>
      <div className="container">
      <div className='container--logo'>
        <Image
              src="/logo.webp"
              alt="logo de l'application"
              width={80}
              height={100}
          />
      </div>
      {posts?.map((post) => (
        <div key={post?.id}>
        <div className='container__post'>
          <div className='container-left'>
            <div className='container__post--info'>
              <div className='avatar'>
                <Image
                  // mettre l'image de l'utilisateur ou de l'image par defaut
                  src='/default-pdp.png'
                  width={40}
                  height={40}
                />
              </div>
              <div className='highlight'>
                <p>
                  <Link href={`/profil/${user?.username}`}>
                    {post?.user?.username}
                  </Link>
                  </p>
                <p>{post?.nameFestival}</p>
              </div>
            </div>
            <Image
              src={post?.content}
              width={500}
              height={450}
              alt={post?.description}
            />
            <div className='action__post'>
              <Image
                src='/icone/heart.svg'
                width={24} 
                height={24}
              />
              <Image
                src='/icone/send.svg'
                width={24} 
                height={24}
              />
              {user?.id === post?.user?.id && (
                <Image
                  src='/icone/trash.svg'
                  width={24} 
                  height={24}
                  onClick={() => handleDeletePost(post?.id)}
                />
              )}
            </div>
            <p className='like-number'>667 J'aimes</p>
            </div>
            <div className='container__post--comment'>
              <div className='post--comment-list'>
                    {post?.comments.map((comment) => (
                    <div key={comment?.id}>
                      <p>{comment?.user?.username}</p>
                      <p>{comment?.content}</p>
                    </div>
                  ))}
                  {post?.comments?.length === 0 ? (
                    <p>Aucun commentaire</p>
                  ) : (
                    ""
                  )}
                </div>
                {user ? (
                  <div className='post--comment-formulaire'>
                  <form onSubmit={
                  (e) => {
                    e.preventDefault(),
                    handleCreateComment(post?.id)
                    }
                  }>
                    <p>Ajouter un commentaire</p>
                    <input
                      type="text"
                      name="content"
                      placeholder="Votre commentaire"
                      value={inputedData?.content || ""}
                      onChange={(e)=> setInputedData({...inputedData, content: e.target.value})}
                    />
                    <div className='btn'>
                    <button type='submit'>Envoyer</button>
                    </div>
                </form>
              </div>
                ) : ('')}
            </div>
          </div>
        </div>
        ))
      }
      </div>
      </PostStyle>
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
            user:{
                select: {
                    username: true,
                }
            }
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