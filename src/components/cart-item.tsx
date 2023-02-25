import { useLoaderData } from "react-router-dom";
import { apiGetProducts } from "../api/products";
import { useShoppingCart } from "../context/ShoppingCartContext";

type CartItemProps = {
  id: string;
  quantity: number;
};

export async function loader() {
  const products = await apiGetProducts();
  return { products };
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  const { increaseCartQuantity, decreaseCartQuantity, cartQuantity } =
    useShoppingCart();

  const item = products.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div>
      {item.name}
      {""}
      {quantity > 1 && <span>x{quantity}</span>}
      {""}
      {/* <div className="flex">
        <button
          onClick={() => decreaseCartQuantity(id)}
          className="border-1 w-3 border text-center text-sm md:w-6 md:text-base lg:w-8 lg:text-xl"
        >
          -
        </button>
        <p className="border-1 w-8 border text-center md:w-10 lg:w-14">
          {cartQuantity}
        </p>
        <button
          onClick={() => increaseCartQuantity(id)}
          className="border-1 d:w-6 w-3 border text-center text-xs md:w-6 md:text-base lg:w-8 lg:text-lg"
        >
          +
        </button>
      </div> */}
    </div>
  );
}

{
  /* <section>
  <div className="my-4 mx-auto flex max-w-6xl rounded-md border border-gray-300 p-5 pt-8">
    <div className="w-full ">
      <div>
        <h1>Cart Summary:</h1>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex">
          <p>
            @<span>1</span>
          </p>
          <p className="mx-6">Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <p>Rp. 30.000,-</p>
        </div>
      </div>
    </div>
  </div>
//   <div className="my-2 mx-auto flex max-w-6xl rounded-md p-5 pt-5 shadow-inner shadow-slate-300 drop-shadow-md">
//     <div className="w-full ">
//       <div>
//         <h1 className="font-bold text-gray-500">PAYMENT SUMMARY</h1>
//       </div>
//       <div className="flex w-full justify-between">
//         <h1 className="font-bold text-gray-900">TOTAL PAYMENT</h1>
//         <p>IDR 93.000,-</p>
//       </div>
//     </div>
//   </div>
//   <div className="mx-auto mt-6 flex max-w-6xl rounded-md  bg-red-700 p-4">
//     <div className="flex w-full items-center justify-center">
//       <h1 className="font-bold text-white">CONFIRM ORDER </h1>
//     </div>
//   </div>
// </section> */
}
