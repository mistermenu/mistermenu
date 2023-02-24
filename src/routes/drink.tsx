import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { apiGetProducts } from "../api/products";
import { ProductCard } from "../components/productcard";

export async function loader() {
  const products = await apiGetProducts();
  const filteredProducts = products.filter(
    (product) => product.category === "beverage"
  );
  return { products: filteredProducts };
}

export function DrinkRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div className="m-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.name}`}>
            <ProductCard
              idUrl={`products/${product.id}`}
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
