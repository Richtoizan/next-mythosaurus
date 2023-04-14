import { getAllDocumentsWithAttribute, getAllDocuments } from "db";
import Link from "next/link";
import Head from "next/head";

export async function getStaticProps(context) {
  const mythologyId = context.params.mythology;
  const entityType = context.params.entity;

  const entities = await getAllDocumentsWithAttribute(
    entityType,
    "mythology",
    mythologyId,
    { order: 1 }
  );

  return {
    props: {
      entityType,
      entities,
    },
  };
}

export async function getStaticPaths() {
  const mythologies = await getAllDocuments("mythologies");

  const entityTypes = ["gods", "heroes"]; // Add more entity types here as needed

  const paths = [];
  for (const mythology of mythologies) {
    for (const entityType of entityTypes) {
      paths.push({ params: { mythology: mythology._id, entity: entityType } });
    }
  }

  return {
    paths,
    fallback: false,
  };
}

const EntityList = ({ entityType, entities }) => {
  const title = entityType.charAt(0).toUpperCase() + entityType.slice(1);

  return (
    <>
      <Head>
        <title>{title} List</title>
        <meta name="keywords" content="mythology" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1>{title} List</h1>

      <div>
        {entities.map((entity) => (
          <Link
            href={`/mythologies/${entity.mythology}/${entityType}/${entity._id}`}
            key={entity._id}
          >
            <h3>{entity.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default EntityList;
