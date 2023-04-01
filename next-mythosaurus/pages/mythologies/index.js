import Link from "next/link";
import Head from "next/head";

const Mythologies = () => {
    return (  
        <>
            <Head>
                <title>Mythosaurus | Home</title>
                <meta name="keywords" content="mythology" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div>
                <h1>All Mythologies</h1>
                <Link href="/mythologies/greek">Greek</Link>
                <Link href="/mythologies/norse">Norse</Link>
            </div>
        </>

    );
}
 
export default Mythologies;