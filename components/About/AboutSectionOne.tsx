import Image from "next/image";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  return (
    <>
    <div className="sm:flex items-center max-w-screen my-48">
    <div className="sm:w-1/2 p-10 mx-56">
        <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
    </div>
    <div className="sm:w-1/2 p-5 -ml-56 mr-56">
        <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">Cine este SantaHO</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">Despre <span className="text-indigo-600">Firma Noastra</span>
            </h2>
            <p className= "text-gray-700">
            SantaHO, locul unde compasiunea întâlnește comerțul într-o afacere dedicată creării unui viitor mai bun pentru copiii care nu beneficiază de sprijinul părintesc. La SantaHO, credem cu tărie că fiecare copil merită șansa de a experimenta magia copilăriei, indiferent de împrejurările lor.
            </p>
        </div>
    </div>
    </div>

    <section className="">
    <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="lg:text-center">
                <h2
                    className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                    Why choose us?
                </h2>
                <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    We know tech, we know finance. We are fintech experts.
                </p>
                <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                    We know how to handle taxation for all the
                    countried we operate in. We care for our customers and help them manage cashflows.
                </p>
            </div>

            <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Powerful API</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Easy to integrate
                                SDK
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />

                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Low Transaction Cost
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />

                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Powerful Dashboard
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                </dl>
            </div>

        </div>
    </div>
</section>
    </>
    
  );
};

export default AboutSectionOne;