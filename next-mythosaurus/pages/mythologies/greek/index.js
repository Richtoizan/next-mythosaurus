import Link from "next/link";
import styles from "../../../styles/Mythologies.module.css";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { greek: data },
  };
};

const Greek = ({ greek }) => {
  return (
    <>
      <Head>
        <title>Greeks Mythology</title>
        <meta name="keywords" content="mythology" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <h1>Greek Mythology</h1>
        {greek.map((greek) => (
          <Link
            href={"/mythologies/greek/" + greek.id}
            key={greek.id}
            className={styles.single}
          >
            <h3>{greek.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Greek;
