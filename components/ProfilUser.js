import Image from 'next/image'
import { useCookies, removeCookie } from 'react-cookie'
import { useState, useEffect } from 'react';


export default function ProfilUser(){

    const [user, setUser] = useState()
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    useEffect(() => {
        setUser(cookies.user)
    } , [cookies.user])
    return(
        <>
            <h1>test</h1>
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
            </div>
        </>
    )
}

