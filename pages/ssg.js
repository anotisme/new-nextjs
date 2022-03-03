// static site generation
import { server } from '../config';

export default function StaticSiteGeneration({ data }) {
  return data.posts.map((e, index) => (
    <div key={index}>
      <h1>{e.title}</h1>
      <p>{e.content}</p>
    </div>
  ));
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`${server}/api/posts`)
  const data = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  }
}