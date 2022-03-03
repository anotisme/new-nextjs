// client side rendered
import { useEffect, useState } from 'react';

export default function ClientSideRendered() {
  const [state, setState] = useState([]);

  async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    setState(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {state.map((e) => (
        <h2 key={e.id}>{e.title}</h2>
      ))}
    </>
  );
}