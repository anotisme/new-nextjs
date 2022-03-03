import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function CSR() {
  const { data, error } = useSWR('/api/posts', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return data.posts.map((e, index) => (
    <div key={index}>
      <h1>{e.title}</h1>
      <p>{e.content}</p>
    </div>
  ));
}

export default CSR