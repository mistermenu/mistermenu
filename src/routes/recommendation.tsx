import { ProductCard } from "../components/productcard";
import { apiGetProducts } from "../api/products";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

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
    <div className="m-6 grid grid-cols-4 gap-6">
      {recommendedProducts.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.name}`}>
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
