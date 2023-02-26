import { FaTrashAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { apiGetProducts } from "../api/products";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: string;
  quantity: number;
};

export async function loader() {
  const products = await apiGetProducts();
  return { products };
}

export function CartItem({ id }: CartItemProps) {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  const item = products.find((i: any) => i.id === id);
  if (item == null) return null;

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <span className="font-newscycle">{getItemQuantity(id)} pcs x </span>
          <span className="font-newscycle font-light text-black ">
            {item.name}{" "}
          </span>
        </div>

        <div className="flex flex-row items-center gap-6">
          <button
            className="text-xl font-bold"
            onClick={() => removeFromCart(item.id)}
          >
            <FaTrashAlt />
          </button>
          <div className="flex flex-row items-center gap-12 ">
            <div className="flex flex-row">
              <button
                onClick={() => decreaseCartQuantity(id)}
                className="border-1 w-8 rounded-l-md border bg-red-mistermenu text-center text-2xl text-white  "
              >
                -
              </button>
              <p className="border-1 w-10  border text-center font-sans text-2xl font-light text-black">
                {getItemQuantity(id)}
              </p>
              <button
                onClick={() => increaseCartQuantity(id)}
                className=" border-1 w-8 rounded-r-md border bg-red-mistermenu text-center text-2xl text-white  "
              >
                +
              </button>
            </div>
            <div className="text-xl font-bold text-gray-400">
              {formatCurrency(item.price * getItemQuantity(id))}
            </div>
          </div>
        </div>
      </div>
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
   <div className="my-2 mx-auto flex max-w-6xl rounded-md p-5 pt-5 shadow-inner shadow-slate-300 drop-shadow-md">
    <div className="w-full ">
      <div>
        <h1 className="font-bold text-gray-500">PAYMENT SUMMARY</h1>
       </div>
       <div className="flex w-full justify-between">
        <h1 className="font-bold text-gray-900">TOTAL PAYMENT</h1>
         <p>IDR 93.000,-</p>
      </div>
     </div>
   </div>
   <div className="mx-auto mt-6 flex max-w-6xl rounded-md  bg-red-700 p-4">
    <div className="flex w-full items-center justify-center">
       <h1 className="font-bold text-white">CONFIRM ORDER </h1>
    </div>
   </div>
 </section> */
}
