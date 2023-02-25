export function CartItems() {
  return (
    <section>
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
    </section>
  );
}
