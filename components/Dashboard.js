import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { useCookies, removeCookie } from 'react-cookie'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


const DashboardStyle = styled.aside`
@media (max-width: 768px) {
    display: none;
}
    .container{
        margin: 0;
        width: 450px;
        margin-left: 15px;
        margin-top: 100px;
        position: fixed;
        z-index: 1;
        &__profil, &__navigation{
            border-radius: 20px;
            box-shadow: 2px 2px 16px 1px rgba(0, 0, 0, 0.25);
            padding: 20px 40px;
            background: #F7F7F7;
            margin-bottom: 50px;
        }
        &__profil{
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
                .photo {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                }
            }
        }
        &__navigation{
            &--item{
                display: flex;
                margin-bottom: 20px;
                &:last-child{
                    margin-bottom: 0;
                }
                p{
                    margin-left: 15px;
                }
            }
        }
    }
    @media (min-width: 768px) and (max-width: 1025px) {
    .container{
        width: 350px!important;
        margin-left: 30px;
        &__profil, &__navigation{
            padding: 15px 30px;
            margin-bottom: 30px;
        }
        &__profil{
            margin-bottom: 0;
            h2{
                font-size: 1.3rem;
            }
            &--info{
                .profil{
                    p{
                        font-size: 1rem;
                    }
                }
                .photo{
                    width: 25%;
                    height: 25%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                }
            }
        }
        &__navigation{
            &--item{
                margin-bottom: 0;
            }
        }
    }
}
`
export default function Dashboard() {
    const router = useRouter()
    const [user, setUser] = useState()
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    useEffect(() => {
        setUser(cookies.user)
    } , [cookies.user])

    const logout = (e) => {
        e.preventDefault()
        removeCookie("user",  {path: '/'})
        router.push('/')
    }

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

                <div className='container__navigation'>
                    <div className='container__navigation--item'>
                        <Image
                            src="/icone/settings.svg"
                            width={30}
                            height={30}
                        />
                        <Link href="/">
                            <p>Paramètres</p>
                        </Link>
                    </div>

                    <div className='container__navigation--item'>
                        <Image
                            src="/icone/log-out.svg"
                            width={30}
                            height={30}
                        />
                            <p onClick={logout}>Déconnexion</p>
                    </div>
                </div>
            </div>
        </DashboardStyle>
    </>)
}
