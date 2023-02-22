import { useLoaderData } from "react-router-dom";
import { apiGetProducts } from "../api/products";

export async function loader() {
  const products = await apiGetProducts();
  const filteredProducts = products.filter(
    (product) => product.category === "chicken"
  );

  return { products: filteredProducts };
}

export function HomeRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div className="m-6 grid grid-cols-4 gap-6">
      {products.map((product) => (
        <div className="rounded-xl shadow-lg" key={product.id}>
          <picture>
            <img className="rounded-t-xl" src={product.image} />
          </picture>
          <h1 className="mt-4 mb-2 px-4 text-xl font-bold">{product.name}</h1>
          <p className="px-4 text-sm text-gray-600">{product.description}</p>
          <p className="px-4 text-xl font-bold text-gray-500">
            $ {product.price}
          </p>
        </div>
      ))}
    </div>
  );
}
