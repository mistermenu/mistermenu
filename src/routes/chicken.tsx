import { ProductCard } from "../components/product-card";
import { apiGetProducts } from "../api/products";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const products = await apiGetProducts();
  const filteredProducts = products.filter(
    (product) => product.category === "chicken"
  );
  return { products: filteredProducts };
}

export function ChickenRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div className="m-6 grid min-h-[700px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard
            id={product.id}
            idUrl={`${product.id}`}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
}
