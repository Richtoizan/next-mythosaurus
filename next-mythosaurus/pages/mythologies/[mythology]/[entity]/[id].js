import {
  getDocumentById,
  getAllDocuments,
  getAllDocumentsWithAttribute,
} from "db";
import Head from "next/head";

export async function getStaticProps(context) {
  const entityId = context.params.id;
  const entityType = context.params.entity;

  const entity = await getDocumentById(entityType, entityId);

  return {
    props: {
      entityType,
      entity,
    },
  };
}

export async function getStaticPaths() {
  const mythologies = await getAllDocuments("mythologies");

  const entityTypes = ["gods", "heroes"]; // Add more entity types here as needed

  const paths = [];
  for (const mythology of mythologies) {
    for (const entityType of entityTypes) {
      const entities = await getAllDocumentsWithAttribute(
        entityType,
        "mythology",
        mythology._id
      );

      for (const entity of entities) {
        paths.push({
          params: {
            mythology: mythology._id,
            entity: entityType,
            id: entity._id,
          },
        });
      }
    }
  }

  return {
    paths,
    fallback: false,
  };
}

const Entity = ({ entityType, entity }) => {
  const title = entityType.charAt(0).toUpperCase() + entityType.slice(1);

  return (
    <>
      <Head>
        <title>
          {title}: {entity.name}
        </title>
        <meta name="keywords" content="mythology" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1>{entity.name}</h1>
      <p>{entity.description}</p>
      {/* Add more attributes here as needed */}
    </>
  );
};

export default Entity;
