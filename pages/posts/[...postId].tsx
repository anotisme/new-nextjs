import { useRouter } from "next/router"

function PostParamsPage() {

	const router = useRouter()
	return (
		<div>
			<h1>Post Params Page</h1>
			<p>Query: {JSON.stringify(router.query)}</p>
		</div>
	)
}

export default PostParamsPage