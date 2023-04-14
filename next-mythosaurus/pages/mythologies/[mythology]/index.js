import {
  getDocumentById,
  getAllDocumentsWithAttribute,
  getAllDocuments,
} from "db";
import Link from "next/link";
import Head from "next/head";

export async function getStaticProps(context) {
  const mythologyId = context.params.mythology;
  const mythology = await getDocumentById("mythologies", mythologyId);

  const gods = await getAllDocumentsWithAttribute(
    "gods",
    "mythology",
    mythologyId,
    { order: 1 }
  );
  const heroes = await getAllDocumentsWithAttribute(
    "heroes",
    "mythology",
    mythologyId,
    { order: 1 }
  );
  // Add more entity types here as needed

  return {
    props: {
      mythology,
      gods,
      heroes,
      // Add more entity types here as needed
    },
  };
}

export async function getStaticPaths() {
  const mythologies = await getAllDocuments("mythologies");
  const paths = mythologies.map((mythology) => ({
    params: { mythology: mythology._id },
  }));

  return {
    paths,
    fallback: false,
  };
}

const Mythology = ({ mythology, gods, heroes }) => {
  return (
    <>
      <Head>
        <title>{mythology.name} Mythology</title>
        <meta name="keywords" content="mythology" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1>{mythology.name} Mythology</h1>
      <p>{mythology.description}</p>

      {/* Gods */}
      <h2>Gods</h2>
      {gods.slice(0, 5).map((god) => (
        <Link
          href={`/mythologies/${mythology._id}/gods/${god._id}`}
          key={god._id}
        >
          <h3>{god.name}</h3>
        </Link>
      ))}
      <Link href={`/mythologies/${mythology._id}/gods`}>See all gods</Link>

      {/* Heroes */}
      <h2>Heroes</h2>
      {heroes.slice(0, 5).map((hero) => (
        <Link
          href={`/mythologies/${mythology._id}/heroes/${hero._id}`}
          key={hero._id}
        >
          <h3>{hero.name}</h3>
        </Link>
      ))}
      <Link href={`/mythologies/${mythology._id}/heroes`}>See all heroes</Link>

      {/* Add more entity types here as needed */}
    </>
  );
};

export default Mythology;
