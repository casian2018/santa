import Image from "next/image";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
    
  return (
    <>
      <div className="max-w-screen h-screen items-center sm:flex">
        <div className="sm:w-1/2">
          <div className="image ml-48 object-center p-10 text-center">
            <img src="./images/about/ceva.svg" className="scale-50" />
          </div>
        </div>
        <div className="-ml-48 p-5 sm:w-1/2">
          <div className="text">
            <span className="border-b-2 border-indigo-600 uppercase text-gray-500">
              Ce este SantaHO
            </span>
            <h2 className="my-4 text-3xl font-bold  sm:text-4xl ">
              Despre <span className="text-indigo-600">Firma Noastra</span>
            </h2>
            <p className="text-gray-700">
              SantaHO, locul unde compasiunea întâlnește comerțul într-o afacere
              dedicată creării unui viitor mai bun pentru copiii care nu
              beneficiază de sprijinul părintesc. La SantaHO, credem cu tărie că
              fiecare copil merită șansa de a experimenta magia copilăriei,
              indiferent de împrejurările lor.
            </p>
          </div>
        </div>
      </div>

      <section className="">
        <div className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="font-heading title-font mb-4 rounded-lg bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-black md:mx-auto md:w-72">
                Cine se afla in spatele firmei ?
              </h2>
              <p className="font-heading mt-2 text-3xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Echipa Noastra
              </p>
              <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                Echipa Santaho este un trio pasionat și plin de inimă, dedicat
                aducerii bucuriei în inimile copiilor fără posibilități în
                timpul sezonului festiv.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                <div className="relative">
                  <dt>
                    <div className="bg-primary-500 absolute flex h-12 w-12 items-center justify-center rounded-md text-white">
                      <img src="./images/about/casian.png" className="rounded-full" />
                    </div>
                    <p className="font-heading ml-16 text-lg font-bold leading-6 text-gray-700">
                      Oprea Casian
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="bg-primary-500 absolute flex h-12 w-12 items-center justify-center rounded-md text-white">
                      <img src="./images/about/teo.png" className="rounded-full" />
                    </div>
                    <p className="font-heading ml-16 text-lg font-bold leading-6 text-gray-700">
                      Corneschi Teodor
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
              </dl>
              <div className="my-4">
                  <dt>
                    <div className="bg-primary-500 absolute flex h-12 w-12 items-center justify-center rounded-md text-white">
                      <img src="./images/about/lidia.png" className="rounded-full" />
                    </div>
                    <p className="font-heading ml-16 text-lg font-bold leading-6 text-gray-700">
                      Oancea Lidia
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                  Am 15 ani. Sunt eleva la liceul Ion I.C Brătianu pe profil de comerț și doresc ca prin aceste vanzari să acumulez destulă experiență pentru un viitor apropiat. Mie personal ador copilasi, de cand eram eu un copil de 8 ani am avut o mare bucurie sa ajut copii mai mici, de aceea cand a aparut aceasta ocazia de ai ajuta pe cei nevoiași, prin vanzarile pe care le facem, nu am putut sa nu mă implic într-un astfel de proiect.
                  </dd>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionOne;
