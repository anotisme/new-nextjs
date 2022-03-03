export default function ServerSideRendered({ data }) {
  console.log(data);
  return (
    <>
      {data.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}