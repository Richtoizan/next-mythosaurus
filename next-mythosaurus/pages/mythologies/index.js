import { getAllDocuments } from "db";

import Link from "next/link";
import Head from "next/head";

export async function getStaticProps() {
  const documents = await getAllDocuments("mythologies");
  return {
    props: {
      documents,
    },
  };
}

const Mythologies = ({ documents }) => {
  return (
    <>
      <Head>
        <title>Mythosaurus | Home</title>
        <meta name="keywords" content="mythology" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <h1>All Mythologies</h1>
      <div>
        {documents.map((document) => (
          <div key={document._id}>
            {
              <div key={document._id}>
                <Link href={"/mythologies/" + document._id}>
                  <h2>{document.name}</h2>
                </Link>
                <p>{document.description}</p>
              </div>
            }
          </div>
        ))}
      </div>
    </>
  );
};

export default Mythologies;
