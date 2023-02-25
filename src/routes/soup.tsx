import { ProductCard } from "../components/product-card";
import { useLoaderData } from "react-router-dom";
import { apiGetProducts } from "../api/products";

export async function loader() {
  const products = await apiGetProducts();
  const filteredProducts = products.filter(
    (product) => product.category === "soup"
  );
  return { products: filteredProducts };
}

export function SoupRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div className="m-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard
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
