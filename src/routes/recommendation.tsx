import { useLoaderData } from "react-router-dom";

import { apiGetProducts } from "../api/products";

import { Cards } from "../components/cards";

export async function loader() {
  const products = await apiGetProducts();
  return { products };
}

export function RecommendationRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div>
      <ul className="flex flex-wrap"></ul>
      <li>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </li>
    </div>
  );
}
