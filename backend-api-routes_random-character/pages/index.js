import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h1>{data.name}</h1>
      <h3>Twitter: {data.twitterName}</h3>
      <h3>Geohash: {data.geohash}</h3>
    </>
  );
}
