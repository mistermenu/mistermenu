import { apiGetProductById } from "../api/products";
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { FaRegTrashAlt } from "react-icons/fa";

export async function loader({ params }: LoaderFunctionArgs) {
  const product = await apiGetProductById(String(params.productId));
  return { product };
}

export function ProductDetails() {
  const { product } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(product.id);

  return (
    <div className="my-10 flex justify-center">
      <div className="mx-1 flex w-full justify-center gap-x-2 rounded-b-md shadow-lg md:gap-x-4 lg:w-1/2 lg:gap-x-10">
        <div className="mb-3 flex h-48 w-44 items-center justify-center md:h-56 md:w-56 lg:h-72 lg:w-72">
          <img src={product.image} alt={product.name} />{" "}
        </div>
        <div className="mt-2 w-1/2 bg-white">
          <div>
            <h1 className="text-sm font-semibold md:text-lg lg:text-xl">
              {product.name}
            </h1>
            <p className="text-mb my-1 font-bold text-red-600 md:my-2 md:text-xl lg:my-3 xl:text-3xl">
              {formatCurrency(product.price)}
            </p>
            <article className="xs:text-xs my-1 text-sm md:my-3 md:text-base lg:text-lg">
              {product.description}
            </article>
          </div>
          <div className="mt-3 mb-3 flex justify-start gap-6 text-sm md:text-base lg:mt-6 lg:gap-10 lg:text-xl">
            <p>Jumlah: </p>
            <div className="flex">
              <button
                onClick={() => decreaseCartQuantity(product.id)}
                className="border-1 w-3 border text-center text-sm md:w-6 md:text-base lg:w-8 lg:text-xl"
              >
                -
              </button>
              <p className="border-1 w-8 border text-center md:w-10 lg:w-14">
                {quantity}
              </p>
              <button
                onClick={() => increaseCartQuantity(product.id)}
                className="border-1 d:w-6 w-3 border text-center text-xs md:w-6 md:text-base lg:w-8 lg:text-lg"
              >
                +
              </button>
            </div>
            <button onClick={() => removeFromCart(product.id)}>
              <FaRegTrashAlt />
            </button>
          </div>
          <Link to="/cart">
            <button
              onClick={() => increaseCartQuantity(product.id)}
              className="mb-2 h-8 w-1/2 border-2 border-red-500 bg-gray-200 font-sans text-sm font-medium text-red-500 md:text-base lg:my-6 lg:h-12 lg:text-xl"
            >
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
