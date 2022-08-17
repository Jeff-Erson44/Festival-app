import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import styled from 'styled-components'

const PostStyled = styled.div`
  .container{
    &--logo{
      display: flex;
      justify-content: center;
      margin: 80px 0;
    }
    form{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      input{
        width: 100%;
        margin-bottom: 50px;
        padding: 10px 10px 10px 35px;
      }
    }
  }
  @media (max-width: 768px){
    .container{
      padding: 0 20px;
      margin-bottom: 150px
    }
  }
  @media (min-width: 768px) and (max-width: 1024px){
    .container{
      padding: 0 200px;

    }
  }
  @media (min-width: 1025px){
    .container{
      padding: 0 500px;
    }
  }
`

export default function Post()  {

  const [image , setImage] = useState()
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

  const handleChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleCreatePost = async (e) => {
    e.preventDefault()
    const form = new FormData()
    form.append("file", image)
    form.append('upload_preset', 'my-upload')
    const data = await fetch (`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`, {
      method: "POST",
      body: form,
    }).then(r => r.json());
    console.log(data.secure_url)

  if(data.secure_url){
    const response = await fetch(`../api/post/createPost`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description : inputedData.description,
        content : data.secure_url,
        nameFestival : inputedData.nameFestival,
        userId : cookies.user.id,
      }),
    })
    const json = await response.json()
    console.log(json)
    setInputedData({ id:"", description:"", content:"", nameFestival:"" })
    fetchData()
    toast('Votre post a bien été créé',
      {
        icon: '🎉',
        style: {
          background: '#234D43',
          color: 'white',
        },
      }
    ); 
    // mettre un delais avant de recharger la page pour que le toast soit visible
    setTimeout(() => {
      router.push('/')
    } , 2000)
  }else{
    toast('Voous devez etre connecté remplir tous les champs pour créer un post',
      {
        icon: '🚨',
        style: {
          background: '#234D43',
          color: 'white',
        },
      }
    );
  }

  }
    useEffect(() => {
      fetchData()
      }, [])

  return (
    <>
    <PostStyled>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
        <Head>
            <title>Festiv&apos;app JK | Nouveau post </title>
        </Head>

        <div className='container'>
            <div className='container--logo'>
              <Image
                    src="/logo.webp"
                    alt="logo de l'application"
                    width={125}
                    height={157}
                />
            </div>
            <form onSubmit={handleCreatePost}>
                <input 
                  type="file" 
                  placeholder='Content' 
                  onChange={handleChange}
                />
                <input 
                  value={inputedData.nameFestival || ""} 
                  type="text" 
                  placeholder='Nom du Festival' 
                  onChange={(e)=> setInputedData({...inputedData, nameFestival: e.target.value})}
                />
                <input 
                  value={inputedData.description} 
                  type="text" 
                  placeholder='description' 
                  onChange={(e)=> setInputedData({...inputedData, description: e.target.value})} 
                />
                <button type="submit">Créer un post</button>
            </form>
        </div>
        </PostStyled>
    </>)
}



