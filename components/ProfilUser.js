import Image from 'next/image'
import { useCookies, removeCookie } from 'react-cookie'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PrismaClient } from '@prisma/client';

const ProfilUserStyle = styled.div`
@media(min-width: 768px){
    .container--logo{
        display: none!important;
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
    }
`

export default function ProfilUser(users){

    const [user, setUser] = useState()
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    useEffect(() => {
        setUser(cookies.user)
    } , [cookies.user])
    const [profilChoice, setProfilChoice] = useState('post')
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
                        <h1>POst</h1>
                    </>
                ):(
                    <>
                        <h1>Space</h1>
                    </>
                )}
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
