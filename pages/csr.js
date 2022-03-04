// client side rendered
import useSWR from "swr"
import fetcherFunc from '../utils/fetch'

export default function ClientSideRendered() {
  const url = "http://localhost:3000/api/posts";
  const {data} = useSWR(url, fetcherFunc);
  if (!data) return <div>fetching</div>
  
  const {posts} = data;

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