import { ProductCard } from "../components/productcard";
import { apiGetProducts } from "../api/products";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Chance from "chance";
import PropTypes from "prop-types";

export async function loader() {
  const products = await apiGetProducts();
  return { products };
}

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

export function ProductList({ products }) {
  const chance = new Chance();
  const randomProducts = chance.pickset(
    { products },
    chance.integer({ min: 1, max: { products }.length })
  );

  return (
    <div className="m-6 grid grid-cols-4 gap-6">
      {products.map((product) => (
        <div className="rounded-xl shadow-lg" key={product.id}>
          <picture>
            <img className="rounded-t-xl" src={product.image} />
          </picture>
          <h1 className="mt-4 mb-2 px-4 text-xl font-bold">{product.name}</h1>
          <div className="my-4 flex justify-between pr-6">
            <p className="px-4 text-xl font-bold text-gray-500">
              $ {product.price}
            </p>
            <button className="rounded-lg bg-red-800 px-8 text-white">
              ADD <span className="text-lg font-extrabold">+</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
