import { Testimonial } from "@/types/testimonial";

const Testimonials = () => {
  return (
    <>
      <div className="-mt-64 py-24">
        <div className="container mx-auto mt-4 flex w-full flex-col items-center justify-center p-6 text-center xl:px-0">
          <div className="text-sm font-bold uppercase tracking-wider text-indigo-600">
            Recenzilor Oamenilor
          </div>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:leading-tight">
            Ce păreri au oamenii ce au cumpărat de la noi ?
          </h2>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl">
            Pentru a putea o părere mai clară despre noi ne-am rugat clienți să
            ne lase o recenzie fie pozitivă sau negativă , pentru a le putea
            arată și altora ce putem.
          </p>
        </div>
        <div className="container mx-auto mb-10 p-6 xl:px-0">
          <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            <div className="lg:col-span-2 xl:col-auto">
              <div className="dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 px-6 py-6 dark:bg-gray-800 md:px-14 md:py-14">
                <p className="text-lg leading-normal">
                  Pentru a putea
                  <mark className="mx-2 rounded-md bg-indigo-100 text-indigo-800 ring-4 ring-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 dark:ring-indigo-900 ">
                    dărui
                  </mark>
                  și altora un crăciun mai bun am cumpărat cam scheptici de la
                  ei, dar s-a adeverit faptul că au produse foarte calitative și
                  care arată foarte bine.
                </p>
                <div className="mt-8 flex items-center space-x-3">
                  <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
                    <img
                      alt="Avatar"
                      src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-medium">Alexandra Stan</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 px-6 py-4 dark:bg-gray-800 md:px-14 md:py-14">
                <p className="text-lg leading-normal">
                  Am fost plăcut surprins să constat că obiectele
                  <mark className="mx-2 rounded-md bg-indigo-100 text-indigo-800 ring-4 ring-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 dark:ring-indigo-900">
                    achiziționate
                  </mark>
                  pentru cei mai puțin entuziasmați sunt de o calitate
                  remarcabilă, aducând un plus de frumusețe sărbătorilor.
                </p>
                <div className="mt-8 flex items-center space-x-3">
                  <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
                    <img
                      alt="Avatar"
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-medium">Andrei Popescu</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 px-6 py-6 dark:bg-gray-800 md:px-14 md:py-14">
                <p className="text-lg leading-normal">
                  Am fost încântat să descopăr că obiectele pe care le-am
                  achiziționat pentru cei mai rezervați sunt nu doar de cea mai
                  bună
                  <mark className="mx-2 rounded-md bg-indigo-100 text-indigo-800 ring-4 ring-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 dark:ring-indigo-900">
                    calitate,
                  </mark>
                  ci aduc și o notă specială de eleganță.
                </p>
                <div className="mt-8 flex items-center space-x-3">
                  <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
                    <img
                      alt="Avatar"
                      src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-medium">Marius Costin</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
