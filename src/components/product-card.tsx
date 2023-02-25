import { Link } from "react-router-dom";
import { TiPlus } from "react-icons/ti";

import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type CardProps = {
  id: string;
  image: string;
  name: string;
  price: number;
  idUrl: string;
};

export function ProductCard({ id, image, name, price, idUrl }: CardProps) {
  const { increaseCartQuantity } = useShoppingCart();

  return (
    <div className=" overflow-hidden rounded-lg shadow-lg">
      <Link to={idUrl}>
        <img className="w-full" src={image} alt={name} />
      </Link>

      <div className="px-6 py-4">
        <p className="text-center text-base font-bold lg:text-xl">{name}</p>

        <div className=" flex flex-col items-center justify-between sm:flex-wrap">
          <p className="font-roboto mb-2 text-lg font-bold text-gray-500 lg:text-lg">
            {formatCurrency(price)}
          </p>
        </div>

        <div className="flex justify-center">
          <button
            className="flex items-center gap-1 rounded-md bg-red-mistermenu px-6 py-2 font-bold text-white transition duration-300 ease-in-out hover:bg-red-900 xl:px-20"
            onClick={() => increaseCartQuantity(id)}
          >
            <span>ADD</span>
            <TiPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
