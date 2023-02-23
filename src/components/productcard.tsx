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

        <div className=" flex w-full flex-wrap items-center justify-between 2xl:flex-row">
          <p className="font-roboto mb-2 text-lg font-bold text-gray-400 lg:text-lg 2xl:text-2xl ">
            {formatCurrency(price)}
          </p>
          <button className="flex items-center gap-1 rounded-lg  bg-red-mistermenu px-10 py-2 font-bold text-white hover:bg-red-700 ">
            <p>ADD</p>
            <TiPlus className=" 2xl:text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
