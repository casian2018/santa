import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="mt-24 mb-24 py-48">
        <div className="mx-auto grid max-w-screen-xl px-4 pt-20 pb-8 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Produse hand-made
            </h1>

            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              SantaHo - vânzări pentru orfelinate. Prin achiziții, susținem copiii fără sprijin parental. Contribuie la un viitor mai bun!
            </p>

            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                href=""
                target="_blank"
                className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-center text-sm font-medium text-gray-900 hover:bg-red-500 focus:ring-4 focus:ring-gray-100  sm:w-auto"
              >
                Vezi Instagram
              </a>

              <a
                href="/pricing"
                className="mb-2 mr-2 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-red-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200  sm:w-auto"
              >
                Vezi Produsele ->
              </a>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:flex">
            <img
              src="./images/hero/santa.png"
              alt="hero image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
