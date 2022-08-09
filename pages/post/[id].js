import Head from "next/head"
import { PrismaClient } from "@prisma/client";
import Image from "next/image";

export default function Post(posts) { 

    const fetchData = async () => {
        const response = await fetch(`../api/post/getPost`);
        const json = await response.json()
        setDatas(json)
    }
    return(
        <>
            <Head>
                <title>Festiv&apos;app - JK </title>
            </Head>
            <h1>Profil</h1>
       
            <div key={posts.id}>
                <h2>{posts.description}</h2>
                <h3>{posts.nameFestival}</h3>
                <Image
                src={posts.user?.image? posts.user?.image : '/../public/default-pdp.png'}
                width={50}
                height={50}
                />
                <Image
                src={posts.content}
                width={400}
                height={400}
                alt={posts.description} 
                />
            </div>
        </> 
    )
}

export async function getServerSideProps(context) {
    const user_id = context.query.id
    console.log(user_id);
    const parseUser = parseInt(user_id)
    const primsa = new PrismaClient();
    const posts = await primsa.post.findUnique({
        where: {
            id :parseUser
        },
        select: {
            id: true,
            content: true,
            description: true,
            nameFestival: true,
            user: {
                select: {
                    id: true,
                    username: true,
                    image: true,
                }
            },
            comments: {
                select: {
                    id: true,
                    content: true,
                    user: {
                        select: {
                            id: true,
                            username: true,
                            image: true,
                        }
                    }
                }
            }
        }
    });console.log(posts);
    return{
        props: {
            posts
        }
    }
}