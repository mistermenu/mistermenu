// import { useLoaderData } from "react-router-dom";
import { apiGetProducts } from "../api/products";
// import { ProductCard } from "../components/productcard";
// import { Link } from "react-router-dom";

export async function loader() {
  const product = await apiGetProducts();
  return { product };
}

export function ProductDetails() {
  // const { product } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div className="my-10 flex justify-center">
      <div className="flex w-full justify-center gap-x-2 rounded-b-md shadow-lg md:gap-x-4 lg:w-1/2 lg:gap-x-10">
        <div className="flex h-48 w-44 items-center justify-center border bg-red-500 md:h-56 md:w-56 lg:h-72 lg:w-72">
          disini gambar
        </div>
        <div className="w-1/2 bg-white">
          <div>
            <h1 className="text-sm font-semibold md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-mb my-3 font-bold text-red-600 md:text-xl xl:text-3xl">
              Rp. 30.000,00
            </p>
            <article className="xs:text-xs my-2 text-sm md:text-base lg:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque corrupti laboriosam numquam vitae dolorem mollitia,
              fugit doloribus nulla excepturi sequi quas debitis odit cumque
              natus minus hic omnis nesciunt assumenda.
            </article>
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
          <button className="h-8 w-1/2 border-2 border-red-500  bg-gray-200 font-sans text-sm font-medium text-red-500 md:text-base lg:my-6 lg:h-12 lg:text-xl">
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
