import { useLoaderData } from "react-router-dom";
import { apiGetProducts } from "../api/products";
import { FaBeer } from "react-icons/fa";

export async function loader() {
  const products = await apiGetProducts();
  return { products };
}

export function HomeRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div>
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
}
