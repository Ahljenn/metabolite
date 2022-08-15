import React from 'react';
import { good_foods, FoodItem } from '../../components/static_data/food_items';

const WhatToEat: React.FC = (): JSX.Element => {
  return (
    <div className="flex items-center flex-col ">
      <section className="text-center max-w-screen-2xl">
        <h1 className="mx-5 text-[1.3rem] sm:text-[2rem] md:text-[3rem] font-bold">
          What are things I can eat?
        </h1>
        <div className="flex justify-center">
          <p className="w-1/2">
            After walking around the grocery store and looking at food labels, you may be very
            disappointed to find out that many foods have carbohydrates - and a lot at that.
            However, there are many great foods you can buy that can make the diet easier:
          </p>
        </div>

        <div className="flex justify-center mt-5">
          <table className="table-auto">
            <caption>Foods you can eat</caption>
            <thead className="text-sm sm:text-md bg-metawhite">
              <tr>
                <th className="py-3 sm:px-6" scope="col">
                  Food
                </th>
                <th className="py-3 px-6" scope="col">
                  Source
                </th>
                <th className="py-3 sm:px-6" scope="col">
                  Vitamins & Minerals
                </th>
                <th className="py-3 sm:px-6" scope="col">
                  Info
                </th>
              </tr>
            </thead>
            <tbody>
              {good_foods.map((food: FoodItem, index: number) => {
                return (
                  <tr className="border-b" key={index}>
                    <th className="py-4 sm:px-6 text-gray-600 font-medium text-md" scope="row">
                      {food.name}
                    </th>
                    {food.source === 'Fat' ? (
                      <td className="text-yellow-500 py-4 sm:px-6">{food.source}</td>
                    ) : (
                      <td className="text-gray-500 py-4 sm:px-6">{food.source}</td>
                    )}
                    <td className="text-gray-500 py-4 sm:px-6">{food.vit_min}</td>
                    <td className="text-gray-500 py-4 sm:px-6">{food.info}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default WhatToEat;
