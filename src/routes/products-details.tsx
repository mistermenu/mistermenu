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
      <div className="flex w-1/2 justify-evenly gap-x-10">
        <div className="flex h-72 w-72 items-center justify-center border bg-red-500">
          disini gambar
        </div>
        <div className="w-1/2 bg-white">
          <div>
            <h1 className="text-xl font-semibold">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="my-3 text-3xl font-bold text-red-600">
              Rp. 30.000,00
            </p>
            <article className="my-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque corrupti laboriosam numquam vitae dolorem mollitia,
              fugit doloribus nulla excepturi sequi quas debitis odit cumque
              natus minus hic omnis nesciunt assumenda.
            </article>
          </div>
          <div className="mt-6 mb-3 flex justify-start gap-10">
            <p>Jumlah: </p>
            <div className="flex">
              <button className="border-1 w-10 border text-center text-xl">
                -
              </button>
              <p className="border-1 w-14 border text-center">1</p>
              <button className="border-1 w-10 border text-center">+</button>
            </div>
          </div>
          <button className="my-6 h-11 w-1/2 border-2 border-red-500 bg-gray-200 font-sans font-medium text-red-500">
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
