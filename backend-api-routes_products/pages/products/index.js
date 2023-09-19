import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductList() {
  const { data, error, isLoading } = useSWR("../api/products/", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log("data: ", data);

  return (
    <ul>
      {data.map((product) => {
        const { id, name, description, price, currency, category } = product;
        return (
          <li key={id}>
            ID: {id}, Name: {name}, Description: {description}, Price: {price}{" "}
            {currency}, Category: {category}
          </li>
        );
      })}
    </ul>
  );
}
