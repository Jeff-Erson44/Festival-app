import Link from 'next/link'

export default function Navbar() {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/login">Se connecter</Link>
                    </li>
                    <li>
                        <Link href="/login">Créer un compte</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

  

  
  
