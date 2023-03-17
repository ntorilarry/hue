import React from "react";
import HeroImg from "../assets/image/heroImg.png";

function Hero() {
  return (
    <div>
      <section>
        <div>
          <div className="container flex flex-col items-center px-4 py-16 mx-auto text-center md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-4xl font-bold leading-none lg:leading-[84px] sm:text-[64px] xl:max-w-3xl text-gray-900 dark:text-white">
              Connecting people through music...
            </h1>
            <p className="mt-6 mb-8 font-normal leading-none lg:leading-[29px] text-base sm:text-lg sm:mb-12 lg:max-w-xl text-gray-900 dark:text-white">
              Connection through music through a semi permiable membrane
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-5 m-2 text-lg font-semibold rounded-full bg-gray-800 hover:bg-transparent border-2 border-[#1A1A1A] hover:text-[#1A1A1A] text-gray-50 dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:border-2 dark:hover:border-white dark:hover:text-white"
              >
                Join the waitlist
              </button>
            </div>
          </div>
          <img src={HeroImg} alt="" className="mx-auto rounded-lg" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
