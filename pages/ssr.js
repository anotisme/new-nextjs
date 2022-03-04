// server site rendering

export default function ServerSideRendered({ data }) {
  const posts = data.posts;
  return (
    <>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>Title: {post.title}</h2>
          <p>Content: {post.content}</p>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}