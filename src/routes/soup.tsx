import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

type Products = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  category: string;
};

export function SoupRoute() {
  //state
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  //component did mount
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://mistermenu-api.up.railway.app/products"
      );
      const soupProducts = response.data.filter(
        (product: Products) => product.category === "soup"
      );
      setProducts(soupProducts);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <FaSpinner className="animate-spin text-4xl" />
      </div>
    );
  }

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
