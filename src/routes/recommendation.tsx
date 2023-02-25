import { ProductCard } from "../components/productcard";
import { apiGetProducts } from "../api/products";
<<<<<<< HEAD
import { ProductCard } from "../components/productcard";
=======
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
>>>>>>> recommendation-semifinal

export async function loader() {
  const products = await apiGetProducts();
  const recommendedProducts = products.filter(
    (product) => product.isRecommended === true
  );
  return { products: recommendedProducts };
}

export function RecomendationRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const recommendedProducts = products.filter(
    (product) => product.isRecommended
  );

  return (
<<<<<<< HEAD
    <div className="m-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard
            idUrl={`products/${product.id}`}
            image={product.image}
            name={product.name}
            price={product.price}
          />
=======
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
>>>>>>> recommendation-semifinal
        </div>
      ))}
    </div>
  );
}
