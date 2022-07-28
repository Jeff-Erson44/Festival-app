import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

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
            <nav>
                <ul>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/login">S'identifier</Link>
                    </li>
                    <li>
                    <button className="deco" onClick={(e) => logout(e)}>Déconnexion</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

  

  
  
