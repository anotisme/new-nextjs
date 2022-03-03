
import { server } from '../config';

export default function SSR({ data }) {
  return data.posts.map((e, index) => (
    <div key={index}>
      <h1>{e.title}</h1>
      <p>{e.content}</p>
    </div>
  ));
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${server}/api/posts`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
