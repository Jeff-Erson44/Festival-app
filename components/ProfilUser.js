import Image from 'next/image'
import { useCookies, removeCookie } from 'react-cookie'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

const ProfilUserStyle = styled.div`
@media(min-width: 768px){
    display: flex;
    justify-content: center;
    .container--logo{
        display: none!important;
    }
    .container{
        margin:100px 0 0 200px;
        width: 50%;
        .container__post{
            gap: 25px!important;
            img{
                width: 220px!important;
                height: 220px!important;
            }
        }
        button.btn {
            display: none!important;
        }
    }
}
@media(min-width: 769px) and (max-width: 1024px){
    .container{
        margin:100px 0 0 250px;
        width: 50%;
    }
}
    .container--logo{
        display: flex;
        justify-content: center;
    }
    .container{
        
        &__profil{
            margin-bottom: 35px;
            .photo{
                display: flex;
                justify-content: center;
            }
            p{
                text-align: center;
                line-height: 10px;
            }
            p:nth-child(1), p:nth-child(3){
                font-size: 1.5rem;
                font-family: 'Switzer-SemiBold';
            }
            p:nth-child(3){
                font-size: 1rem;
            }
        }
        .choiceProfil{
            display: flex;
            justify-content: space-around;
            padding: 5px 0;
            .profilChoice{
                &.active{
                color: red;
                }
            }
        }
        .container__post{
            margin-top: 25px;
            display: flex;
            justify-content: space-around;
            padding: 0 20px;
            flex-wrap: wrap;
            gap: 10px;
        }
        .container__space{
            padding: 0 20px;
            margin: 50px 0;
            p{
                padding: 24px 0 24px 38px;
                font-family: 'Switzer-SemiBold';
                border-radius: 20px;
                box-shadow: 2px 2px 16px 1px rgba(0, 0, 0, 0.25);
            }
            .btn-space{
                display: flex;
                margin: 0 auto;
            }
        }
        button.btn {
            margin: 100px auto;
            display: flex;
            margin-bottom: 120px;
            background: red;
        }
    }
`

export default function ProfilUser(users){
    const router = useRouter();
    const [user, setUser] = useState()
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    useEffect(() => {
        setUser(cookies.user)
    } , [cookies.user])
    const [profilChoice, setProfilChoice] = useState('post')

    const logout = (e) => {
        e.preventDefault()
        removeCookie("user",  {path: '/'})
        router.push('/')
       
        toast('Vous êtes déconnecté', 
            {
                icon: '💫',
                style: {
                background: '#234D43',
                color: 'white',
                },
            })
    }
    return(
        <>
        <ProfilUserStyle>
            <div className='container--logo'>
                <Image
                    src={"/logonav.svg"}
                    alt="logo de l'application"
                    width={180}
                    height={200}
                />
            </div>
            <div className="container">
                <div className='container__profil'>
                    <div className='photo'>
                        <Image
                            src={'/default-pdp.png'}
                            height={100}
                            width={100}
                        />
                    </div>
                    <div className='container__profil--info'>
                        <p>{user?.username}</p>
                        <p>{user?.localisation}</p>
                        <p> 4 posts, 354 likes</p>
                        <p>{user?.bio}</p>
                    </div>
                </div>
                <div className='choiceProfil'>
                    <div className={`profilChoice ${profilChoice == 'post' ? 'active' : ''}`} onClick={() => setProfilChoice('post')}>
                        Publications
                    </div>
                    <div className={`profilChoice ${profilChoice == 'space' ? 'active' : ''}`} onClick={() => setProfilChoice('space')}> Spaces
                    </div>
                </div>
                {profilChoice == 'post' ? (
                    <>
                        <div className='container__post'>
                            <Image
                                src={'/image/festival.jpg'}
                                width={125}
                                height={125}
                            />
                            <Image
                                src={'/image/festival.jpg'}
                                width={125}
                                height={125}
                            />
                            <Image
                                src={'/image/festival.jpg'}
                                width={125}
                                height={125}
                            />
                            <Image
                                src={'/image/festival.jpg'}
                                width={125}
                                height={125}
                            />
                        </div>
                    </>
                ):(
                    <>
                        <div className='container__space'>
                            <p>#001 Les Ardentes</p>
                            <p>#002 Afro Nation</p>
                        <button className='btn-space'>
                            Créer un space 
                        </button>
                        </div>
                    </>
                )}

                <button className='btn' onClick={logout}>Se déconnecter</button>
            </div>
        </ProfilUserStyle>
        </>
    )
}


export async function getServerSideProps(context) {
    // récuperer les post de l'utilisateur
    const prisma = new PrismaClient()
    const user = await prisma.user.findMany({
        where: {
            username: user?.username
        },
        select: {
            username: true,
            localisation: true,
            bio: true,
            posts: {
                select: {
                    id: true,
                    nameFestival: true,
                    content: true,
                    description: true,
                }
            }
        }
    })
    return {
        props: {
            users: user
        }
    }
}
