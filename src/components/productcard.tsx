import { TiPlus } from "react-icons/ti";
import { formatCurrency } from "../utilities/formatCurrency";

type CardProp = {
  image: string;
  name: string;
  price: number;
};

export function ProductCard({ image, name, price }: CardProp) {
  return (
    <div className=" overflow-hidden rounded-3xl shadow-lg">
      <img className="w-full" src={image} alt={name} />

      <div className="px-6 py-4">
        <p className="mb-2 text-xl font-bold  lg:text-lg 2xl:mb-4 2xl:text-2xl">
          {name}
        </p>

        <div className=" flex flex-wrap items-center justify-between">
          <p className="font-roboto mb-2 text-lg font-bold text-gray-400 lg:text-base 2xl:text-2xl">
            {formatCurrency(price)}
          </p>

          <button className="flex items-center gap-1 rounded-lg bg-red-mistermenu  px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:bg-orange-400 xl:px-20">
            <p className="text-sm xl:text-base">ADD</p>
            <TiPlus className=" xl:text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
