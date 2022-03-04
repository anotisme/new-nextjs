export default async function fetcherFunc(url) {
	const res = await fetch(url);
	return res.json();
}