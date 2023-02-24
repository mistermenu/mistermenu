import { apiGetProductById } from "../api/products";
// import { ProductCard } from "../components/productcard";
// import { Link } from "react-router-dom";

import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
  const product = await apiGetProductById(String(params.productId));
  return { product };
}

export function ProductDetails() {
  const { product } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div className="my-10 flex justify-center">
      <div className="flex w-1/2 justify-evenly gap-x-10 rounded-b-md shadow-lg">
        <div className="flex h-72 w-72 items-center justify-center border bg-red-500">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="w-1/2 bg-white">
          <div>
            <h1 className="text-xl font-semibold">{product.name}</h1>
            <p className="my-3 text-3xl font-bold text-red-600">
              {product.name}
            </p>
            <article className="my-2">{product.description}</article>
          </div>
          <div className="mt-3 mb-3 flex justify-start gap-6 text-sm md:text-base lg:mt-6 lg:gap-10 lg:text-xl">
            <p>Jumlah: </p>
            <div className="flex">
              <button className="border-1 w-3 border text-center text-sm md:w-6 md:text-base lg:w-8 lg:text-xl">
                -
              </button>
              <p className="border-1 w-8 border text-center md:w-10 lg:w-14">
                1
              </p>
              <button className="border-1 d:w-6 w-3 border text-center text-xs md:w-6 md:text-base lg:w-8 lg:text-lg">
                +
              </button>
            </div>
          </div>
          <button className="mb-2 h-8 w-1/2 border-2 border-red-500  bg-gray-200 font-sans text-sm font-medium text-red-500 md:text-base lg:my-6 lg:h-12 lg:text-xl">
            Add To Cart
          </button>
        </div>
        {/* <div>
          <Link to="/">Back to Home</Link>
        </div> */}
      </div>
    </div>
  );
}
