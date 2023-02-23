import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import { ProductCard } from "../components/productcard";

type Products = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  category: string;
};

export function PorridgeRoute() {
  //state
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  //component did mount
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://mistermenu-api.up.railway.app/products"
      );
      const porridgeProducts = response.data.filter(
        (product: Products) => product.category === "porridge"
      );
      setProducts(porridgeProducts);
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
