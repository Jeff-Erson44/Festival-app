import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import styled from 'styled-components'


const NavbarStyle = styled.nav`
    nav{
        display: flex;
        background: black;
        color: white;
        height: 5vh;
        ul{ 
            display: flex;
            justify-content: center;
            align-items: center;
            li{
                margin-right: 20px;
            }
        }
    }
`

export default function Navbar() {
    const router = useRouter()
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const logout = (e) => {
        e.preventDefault()
        removeCookie("user",  {path: '/'})
        router.push('/login/')
    }

    return (
        <>
        <NavbarStyle>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    {cookies.user ? 
                        (<li><Link href="/post">Créer un post</Link></li>) : 
                        ("") 
                    }
                    {cookies.user ? 
                        (<button className="deco" onClick={(e) => logout(e)} >Déconnexion</button>) : 
                        (<button> <Link href="/login">S'identifier</Link></button>)
                    }
                </ul>
            </nav>
        </NavbarStyle>
        </>)
}
