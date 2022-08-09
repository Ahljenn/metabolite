import React from 'react';
import { guide_cards, PageData } from '../static_data/guide_cards';

const MainTop: React.FC = (): JSX.Element => {
  return (
    <div className="flex items-center flex-col shadow-md pb-[5rem]">
      <section className="text-center py-10 w-full bg-gradient-to-b from-secondary to-white">
        <h1 className="mx-5 text-[2rem] sm:text-[3.5rem] font-bold">
          The Only Nutrition Guide You Need
        </h1>
        <h1 className="mx-5">
          <b className="text-primary">Metabolite </b>presents to you unbiased nutrition. We aim to
          provide well-researched dietary knowledge available for everyone.
        </h1>

        <div className="flex flex-col mt-5 gap-5 sm:flex-row justify-center items-center">
          <div>
            <button className="w-[12rem] h-[2.5rem] bg-tertiary rounded-xl shadow-xl hover:bg-white transition duration-300">
              Read the Research
            </button>
          </div>
          <div>
            <button className="w-[12rem] h-[2.5rem] bg-secondary rounded-xl shadow-xl hover:bg-white transition duration-300">
              Read the Recipes
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-5 items-center mt-5">
          <a href="https://github.com/Ahljenn/Metabolite" rel="noopener noreferrer" target="_blank">
            <picture className="cursor-pointer opacity-[0.5] hover:opacity-[1]">
              <img className="w-[2rem]" src="./github.png" alt="github" />
            </picture>
          </a>
          <a
            href="https://github.com/Ahljenn/Metabolite/labels/enhancement"
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer opacity-[0.5] hover:opacity-[1]"
          >
            Contribute
          </a>
          <a
            href="https://github.com/Ahljenn/Metabolite/issues"
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer opacity-[0.5] hover:opacity-[1]"
          >
            Report a bug
          </a>
        </div>
      </section>

      <section className="text-center max-w-screen-2xl">
        <picture className="mt-5 flex justify-center">
          <img className="w-[20rem]" src="./beta-hydro.png" alt="beta" />
        </picture>

        <h1 className="mt-5 font-bold text-2xl">Ketogenic Guide</h1>
        <p className="mx-5">
          The <b>Keto Diet</b> is a diet in which you consume little to no carbs, a lot of fat, and
          a moderate amount of protein. Following that way of eating is generally how you will reach
          “ketosis,” a bodily process in which, to put it simply, you burn fat. However, the Keto
          Diet and the state of ketosis is not that simple. There are a lot of things you need to
          know about and be careful for. Not following the diet perfectly can cause you to stall or
          even gain weight.
        </p>

        <h1 className="mt-5 font-bold text-2xl">
          Why <i>so much</i> fat?
        </h1>
        <p className="mx-5">
          In the Keto Diet, you have to rely on fats for energy. You will go through a process
          called{' '}
          <a
            href="https://www.webmd.com/diabetes/type-1-diabetes-guide/what-is-ketosis#1"
            rel="noopener noreferrer"
            target="_blank"
            className="font-semibold underline text-primary"
          >
            ketosis
          </a>{' '}
          (or ketogenesis) when you have successfully made fat your main source of energy. In
          ketosis, your body doesn’t just burn the fat you eat, but the fat that’s already in your
          body. This is how you will lose weight.
        </p>
      </section>

      <section className="max-w-screen-2xl border-b-black">
        <div className="grid grid-cols-1 gap-4 m-10 sm:grid-cols-2 md:grid-cols-4">
          {guide_cards.map((entry: PageData) => {
            return (
              <div
                className="border p-5 rounded-xl hover:shadow-xl transition duration-300 cursor-pointer"
                key={entry.heading}
              >
                <h1 className="sm:text-xl font-bold">{entry.heading}</h1>
                <p>{entry.description}</p>
                <p className="text-primary">Read more →</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default MainTop;
