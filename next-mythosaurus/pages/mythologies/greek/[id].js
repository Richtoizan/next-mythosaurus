import { getGodByName } from "/db";

export async function getServerSideProps() {
  const zeus = await getGodByName("Zeus");

  return {
    props: {
      zeus,
    },
  };
}
// export const getStaticPaths = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

//   const paths = data.map((greek) => {
//     return {
//       params: { id: greek.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
//   const data = await res.json();

//   return {
//     props: { greek: data },
//   };
// };

const Details = ({ zeus }) => {
  return (
    <div>
      <h1>Details</h1>
      <h3>{zeus.name}</h3>
      <p>{zeus.description}</p>
      {/* <p>{greek.address.city}</p> */}
    </div>
  );
};

export default Details;
