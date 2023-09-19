import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailsPage() {
  const router = useRouter();
  const routerId = router.query.id;

  const { data, error, isLoading } = useSWR(
    `../api/products/${routerId}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <small>ID: {data.id}</small>
      <h1>Product: {data.name} </h1>
      <p>Description: {data.description} </p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p>Category: {data.category} </p>
    </>
  );
}
