import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


const DashboardStyle = styled.aside`
    .container{
        margin: 0;
        width: 450px;
        margin-left: 50px;
        &__profil, &__navigation{
            border-radius: 20px;
            padding: 20px 40px;
            background: #F7F7F7;
        }
        &__profil{
            margin-bottom: 70px;
            h2{
                font-size: 1.75rem;
                text-align: center;
            }
            &--info{
                display: flex;
                .profil{
                    width: 70%;
                    p{
                        font-family: 'Switzer-SemiBold';
                        font-size: 1.25rem;
                        &:last-child{
                            font-size: 0.96rem;
                            font-family:'Switzer-Regular';
                            line-height: 19.8px;
                        }
                    }
                }
            }
        }
        &__navigation{
            &--item{
                display: flex;
                margin-bottom: 30px;
                &:last-child{
                    margin-bottom: 0;
                }
                p{
                    margin-left: 15px;
                }
            }
        }
    }
`
export default function Dashboard() {
    const router = useRouter()
    const [user, setUser] = useState()
    const [cookies, setCookie] = useCookies(['user']);
    useEffect(() => {
        setUser(cookies.user)
    } , [cookies.user])

return(
    <>
        <DashboardStyle>
            <div className='container'>
                <div className='container__profil'>
                    <h2>Mon profil</h2>
                    <div className='container__profil--info'>
                        <div className='profil'>
                            <p>{user?.username}</p>
                            <p>{user?.localisation}</p>
                            <p> 4 posts, 354 likes</p>
                            <p>{user?.bio}</p>
                        </div>
                        <div className='photo'>
                            <Image src="/default-pdp.png" width={125} height={125} 
                            />
                            <Link href={`/profil/modify/${user?.username}`}>
                                <Image src="/icone/edit.svg" width={30} height={30} 
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='container__navigation'>
                    <div className='container__navigation--item'>
                            <Image
                                src="/icone/plus-square.svg"
                                width={30}
                                height={30}
                            />
                        <Link href="/post">
                            <p>Ajouter un post</p>
                        </Link>
                    </div>

                    <div className='container__navigation--item'>
                            <Image
                                src="/icone/globe.svg"
                                width={30}
                                height={30}
                            />
                        <Link href="/">
                            <p>Rejoindre un space</p>
                        </Link>
                    </div>

                    <div className='container__navigation--item'>
                            <Image
                                src="/icone/user.svg"
                                width={30}
                                height={30}
                            />
                        <Link href={`/profil/${user?.username}`}>
                            <p>Voir mon profil</p>
                        </Link>
                    </div>
                </div>
            </div>
        </DashboardStyle>
    </>)
}
