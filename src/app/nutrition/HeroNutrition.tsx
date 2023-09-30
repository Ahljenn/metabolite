'use client';
import Lottie from 'lottie-react';
import Health from '#/lottie/diet-plan.json';
import NutritionButtons from './NutritionButtons';
const lottieStyle = {
  height: 500,
};

// green -> blue
// emerald -> cyan

const HeroNutrition = () => {
  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-700 via-black to-green-800">
      <div className="flex max-w-screen-xl px-4 py-8 mx-auto flex-col sm:flex-row">
        <div className="mr-auto place-self-center text-center sm:text-left sm:w-1/2">
          <h1 className="max-w-2xl mb-4 text-xl sm:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white m-5 sm:m-0">
            Nourish Your Body
          </h1>
          <p className="max-w-2xl mb-6 sm:mb-8 md:text-lg sm:text-xl text-white m-5 sm:m-0">
            Welcome to Metabolite: <b>Nutrition</b>. Nutrition is not just about counting calories;
            it&apos;s about understanding the profound impact of nutrition on your overall
            wellbeing.
          </p>
          <div className="flex flex-col-reverse sm:flex-row gap-8 justify-center sm:justify-start items-center">
            <div>
              <NutritionButtons />
            </div>
          </div>
        </div>
        <div className="col-span-6 hidden sm:block sm:w-1/2">
          <Lottie animationData={Health} loop={false} style={lottieStyle} />
        </div>
      </div>
    </div>
  );
};

export default HeroNutrition;
