import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import styled from 'styled-components'

const NavbarStyle = styled.div`
    nav {
        background: black;
        color: white;
        display: flex;
        height: 4vh;
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

    const logout = (e) => {
        e.preventDefault()
        removeCookie("user",  {path: '/'})
        router.push('/login/')
    }

    useEffect (() => {
        setUser(cookies.user)
    } , [cookies.user])

    return (
        <>
        <NavbarStyle>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    {user ? 
                        (<li><Link href="/post">Créer un post</Link></li>) : 
                        ("") 
                    }
                    {user ? 
                        (<li><Link href="/profil/${user?.username}">Mon profil</Link></li>) : 
                        ("")
                    }
                    {user ? 
                        (<button className="deco" onClick={(e) => logout(e)} >Déconnexion</button>) : 
                        (<button> <Link href="/login">S'identifier</Link></button>)
                    }
                </ul>
            </nav>
        </NavbarStyle>
        </>)
}
