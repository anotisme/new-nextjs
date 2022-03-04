// incremental static generation

export default function IncrementalStaticRegeneration({ data }) {
  return data.posts.map((e, index) => (
    <div key={index}>
      <h1>{e.title}</h1>
      <p>{e.content}</p>
    </div>
  ));
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