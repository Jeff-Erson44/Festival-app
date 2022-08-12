import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


export default function Dashboard() {
    const router = useRouter()
    const [user, setUser] = useState()
    const [cookies, setCookie] = useCookies(['user']);
    useEffect(() => {
        setUser(cookies.user)
    } , [cookies.user])

    return(
        <>
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
                            <Image src="/default-pdp.png" width={125} height={125} />
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
        </>
    )
}
