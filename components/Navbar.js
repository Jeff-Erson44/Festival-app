import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import styled from 'styled-components'
import Image from 'next/image'


const NavbarStyle = styled.div`
@media(max-width:768px){
    display: none;
}
    nav {
        position: fixed;
        ul{
            display: flex;
            align-items: center;
            li{
                margin-right: 15px;
            }
        }
    }    
`

export default function Navbar() {
    const [user, setUser] = useState()
    const router = useRouter()
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    



    useEffect (() => {
        setUser(cookies.user)
    } , [cookies.user])

    return (
        <>
        <NavbarStyle>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <Image
                                src="/logonav.svg"
                                alt="logo de l'application"
                                width={210}
                                height={70}
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </NavbarStyle>
    </>)
}
