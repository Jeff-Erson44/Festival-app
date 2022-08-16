import Image from "next/image"
import styled from 'styled-components'
import Link from "next/link"


const LoginStyle= styled.aside`

@media(max-width:768px){
    display: none;
}
        .container{
        margin: 0;
        width: 430px;
        margin: 100px 0 0 15px;
        position: fixed;
        z-index: 1;
        box-shadow: 2px 2px 16px 1px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        padding: 15px;
        .container--logo{
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
        }
        &__status{
            &--link{
                display: flex;
                gap: 10px;
            }
        }
    }
`

export default function Login(){
    return(
        <>
        <LoginStyle>
            <div className="container">
                <div className='container--logo'>
                    <Image
                        src="/logo.webp"
                        alt="logo de l'application"
                        width={80}
                        height={100}
                    />
                </div>
                <div className='container__status'>
                    <div className="container__status--link">
                        <Image
                            src={'/icone/user.svg'}
                            height={35}
                            width={35}
                        />
                        <Link href="/login/">
                            <p>Se connecter</p>
                        </Link>
                    </div>
                    <div className="container__status--link">
                        <Image
                            src={'/icone/user-plus.svg'}
                            height={35}
                            width={35}
                        />
                        <Link href="/login/signup">
                            <p>S'inscrire</p>
                        </Link>
                    </div>
                </div>
            </div>
        </LoginStyle>
        </>
    )
}