import { ProductCard } from "../components/productcard";
import { useLoaderData } from "react-router-dom";
import { apiGetProducts } from "../api/products";

export async function loader() {
  const products = await apiGetProducts();
  const filteredProducts = products.filter(
    (product) => product.category === "porridge"
  );
  return { products: filteredProducts };
}

export function PorridgeRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div className="m-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}
