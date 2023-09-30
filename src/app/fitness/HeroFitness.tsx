'use client';
import Lottie from 'lottie-react';
import Health from '#/lottie/blue-arm.json';
const lottieStyle = {
  height: 500,
};

// green -> blue
// emerald -> cyan

const HeroFitness = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-100 via-cyan-800 to-gray-900">
      <div className="flex max-w-screen-xl px-4 py-8 mx-auto flex-col sm:flex-row">
        <div className="mr-auto place-self-center text-center sm:text-left sm:w-1/2">
          <h1 className="max-w-2xl mb-4 text-xl sm:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white m-5 sm:m-0">
            Unlock Your Potential
          </h1>
          <p className="max-w-2xl mb-6 sm:mb-8 md:text-lg sm:text-xl text-white m-5 sm:m-0">
            Welcome to Metabolite: <b>Fitness</b>. Customize your strength training with
            personalized workout plans and elevate your fitness journey to new heights.
          </p>
          <div className="flex flex-col-reverse sm:flex-row gap-8 justify-center sm:justify-start items-center">
            {/* <div>
              <a
                href="/about"
                className="mt-5 border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
              >
                About
              </a>
            </div> */}
            <div>
              <a
                href="/fitness/screening"
                className="mt-5 border-blue-300 bg-cyan-700 hover:border-blue-200 hover:bg-cyan-600 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
              >
                Get started - It&apos;s free
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-6 hidden sm:block sm:w-1/2">
          <Lottie animationData={Health} loop={true} style={lottieStyle} />
        </div>
      </div>
    </div>
  );
};

export default HeroFitness;
