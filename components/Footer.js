import Image from "next/image"
import Link from "next/link"
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import styled from 'styled-components'

const NavStyle = styled.footer`

@media (min-width: 768px){
    display: none;
}
    .container{
        position: fixed;
        bottom: 0;
        left: 0;
        background: black;
        color: white;
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
        width: 100%;
    }
`


export default function NavMobile(){
    const [user, setUser] = useState()
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    return(
        <>
        <NavStyle>
            <div className="container">
                <Link href={'/'}>
                    <Image
                        src={'/icone/house-white.svg'}
                        width={25}
                        height={25}
                    />
                </Link>
                <Link href={'/post'}>
                    <Image
                        src={'/icone/plus-white.svg'}
                        width={25}
                        height={25}
                    />
                </Link>
                <Link href={`/profil/${user?.username}`}>
                    <Image
                        src={'/icone/user-white.svg'}
                        width={25}
                        height={25}
                    />
                </Link>
            </div>
            </NavStyle>
        </>
    )
}