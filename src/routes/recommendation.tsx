import { ProductCard } from "../components/product-card";
import { apiGetProducts } from "../api/products";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const products = await apiGetProducts();
  return { products };
}

export function RecomendationRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const recommendedProducts = products.filter(
    (product) => product.isRecommended
  );

  return (
    <div className="m-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recommendedProducts.map((product) => (
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
