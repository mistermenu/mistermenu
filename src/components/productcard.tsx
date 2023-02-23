import { TiPlus } from "react-icons/ti";
import { formatCurrency } from "../utilities/formatCurrency";

type CardProp = {
  image: string;
  name: string;
  price: number;
};

export function ProductCard({ image, name, price }: CardProp) {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-3xl shadow-lg">
      <img className="w-full" src={image} alt={name} />

      <div className="px-6 py-4">
        <p className="mb-2 text-xl font-bold">{name}</p>

        <div className="flex w-full items-center justify-between py-2">
          <p className="font-roboto mb-2 text-2xl font-bold text-gray-400 ">
            {formatCurrency(price)}
          </p>
          <button className="flex items-center gap-1 rounded-lg bg-red-mistermenu px-10 py-2 font-bold text-white hover:bg-red-700">
            <p>ADD</p>
            <TiPlus className="inline-block text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
