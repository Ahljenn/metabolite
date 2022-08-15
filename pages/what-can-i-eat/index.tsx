import React from 'react';
import { good_foods } from '../../components/static_data/food_items';

const WhatToEat: React.FC = (): JSX.Element => {
  return (
    <div className="flex items-center flex-col ">
      <section className="text-center max-w-screen-2xl">
        <h1 className="mx-5 text-[2rem] sm:text-[3.5rem] font-bold">What are things I can eat?</h1>
        <div className="flex justify-center">
          <p className="w-1/2">
            After walking around the grocery store and looking at food labels, you may be very
            disappointed to find out that many foods have carbohydrates - and a lot at that.
            However, there are many great foods you can buy that can make the diet easier:
          </p>
        </div>

        {good_foods.map((food: String, index: number) => {
          return <div key={index}>{food}</div>;
        })}
      </section>
    </div>
  );
};

export default WhatToEat;
