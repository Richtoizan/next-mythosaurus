import Link from "next/link";
import styles from '../../../styles/Mythologies.module.css'
import Head from "next/head";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { norse: data }
    }
}

const Norse = ({norse}) => {
    return (
        <>
        <Head>
            <title>Norse Mythology</title>
            <meta name="keywords" content="mythology" />
            <link rel="icon" href="/logo.png" />
        </Head>
        <div>
            <h1>Norse Mythology</h1>
            {norse.map(norse => (
                <Link href={'/mythologies/norse/' + norse.name} key={norse.name} className={styles.single}>
                    <h3>{ norse.name }</h3>
                </Link>
            ))}
        </div>
        </>
    );
}
 
export default Norse;