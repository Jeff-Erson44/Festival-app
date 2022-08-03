import Head from 'next/head';
import { useCookies } from 'react-cookie';

export default function Home() {

  const [cookies, setcookies] = useCookies(['user'])

  return (
    <>
      <Head>
        <title>Festiv'app JK</title>
      </Head>
      
      <h1>Festival</h1>
      <p>Test final : TS </p>
      <div>
        <p>{cookies?.user?.username}</p>
      </div>

  
    </>)
}







