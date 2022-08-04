import Head from "next/head"
import { useCookies } from "react-cookie"


export default function Profil() {

    const [cookies, setcookies] = useCookies(["user"])



    return(
        <>
            <Head>
                <title>Festiva&apos;app JK - {cookies?.user?.username}'s profile</title>
            </Head>
            <h1>Profil</h1>

            <div>
                <p>{cookies?.user?.username}</p>
                <p>{cookies?.user?.email}</p>
 
                {cookies?.user?.bio !== "" ? <p>{cookies?.user?.bio}</p> : null}
                <h3>Membre depuis : </h3>
                <p>{cookies?.user?.createdAt}</p>
                <p>{cookies?.user?.bio}</p>
            </div>
        </>
    )
}