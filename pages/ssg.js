// static site generation

export default function StaticSiteGeneration({ data }) {
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

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/posts')
  const data = await res.json()

  // By returning { props: { posts } }, the StaticSiteGeneration component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  }
}