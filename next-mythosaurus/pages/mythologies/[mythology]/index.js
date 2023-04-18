import {
  getDocumentById,
  getAllDocumentsWithAttribute,
  getAllDocuments,
} from "db";
import Link from "next/link";
import Head from "next/head";
import EntityDropdown from "components/EntityDropdown";

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
      <EntityDropdown
        entityType="gods"
        mythologyId={mythology._id}
        entities={gods}
      />
      <EntityDropdown
        entityType="Heros"
        mythologyId={mythology._id}
        entities={heroes}
      />

      {/* Add more entity types here as needed */}
    </>
  );
};

export default Mythology;
