import { useLoaderData } from "react-router-dom";
import { apiGetProducts } from "../api/products";
import { ProductCard } from "../components/productcard";
import { Link } from "react-router-dom";

type ProductDetailsLoaderData = {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
  };
};

export async function loader() {
  const product = await apiGetProducts();
  return { product };
}

export function ProductDetails() {
  const { product } = useLoaderData() as Awaited<ProductDetailsLoaderData>;

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div key={product.id}>
        <ProductCard
          image={product.image}
          name={product.name}
          price={product.price}
        />
        <p>{product.description}</p>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
