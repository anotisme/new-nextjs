// incremental static generation

export default function IncrementalStaticRegeneration({ data }) {
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
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts')
  const data = await res.json()

  return {
    props: {
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}