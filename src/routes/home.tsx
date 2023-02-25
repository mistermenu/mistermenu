import { useLoaderData } from "react-router-dom";
import { apiGetProducts } from "../api/products";
import { ProductCard } from "../components/product-card";

export async function loader() {
  const products = await apiGetProducts();
  return { products };
}

export function HomeRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div className="m-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard
            id={product.id}
            idUrl={`products/${product.id}`}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
}
