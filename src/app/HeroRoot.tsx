'use client';
import Lottie from 'lottie-react';
import Health from '#/lottie/health-hero.json';
const lottieStyle = {
  height: 500,
};

const HeroRoot = () => {
  return (
    <div
      className="w-full bg-center bg-cover"
      style={{
        backgroundImage: `url('/hero-bg2.jpeg')`,
      }}
    >
      <div className="flex max-w-screen-xl px-4 py-8 mx-auto flex-col sm:flex-row">
        <div className="col-span-6 hidden sm:block">
          <Lottie animationData={Health} loop={true} style={lottieStyle} />
        </div>
        <div className="mr-auto place-self-center text-center sm:text-left">
          <h1 className="max-w-2xl mb-4 text-xl sm:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white m-5 sm:m-0">
            The Comprehensive Health and Wellness Platform
          </h1>
          <p className="max-w-2xl mb-6 sm:mb-8 md:text-lg sm:text-xl text-white m-5 sm:m-0">
            With personalized assessments and data-driven insights, we provide tailored
            recommendations to help you reach your specific health goals.
          </p>
          <div className="flex flex-col-reverse sm:flex-row gap-8 justify-center sm:justify-start items-center">
            <div>
              <a
                href="/nutrition"
                className="mt-5 border-green-300 bg-emerald-700 hover:border-green-200 hover:bg-emerald-600 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
              >
                Metabolite
              </a>
            </div>
            <div>
              <a
                href="/about"
                className="mt-5 border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRoot;
