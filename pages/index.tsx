import type { NextPage } from 'next';
const Home: NextPage = (): JSX.Element => {
  return (
    <div className="flex items-center mt-5 flex-col">
      <section className="text-center max-w-screen-2xl">
        <h1 className="text-[3.5rem] font-bold">The Nutrition Guide for Your Best Self</h1>
        <h1>
          <b className="text-primary">Metabolite </b>present to you unbiased nutrition. We aim to
          provide well-researched guides catered to anyone.
        </h1>

        <div className="mt-5 flex gap-5 justify-center">
          <button className="px-8 py-1 bg-tertiary rounded-xl shadow-xl hover:bg-gray-300 transition duration-300">
            Read the Research
          </button>
          <button className="px-8 py-2 bg-secondary rounded-xl shadow-xl hover:bg-gray-300 transition duration-300">
            Read the Recipes
          </button>
        </div>
      </section>

      <section className="text-center max-w-screen-2xl">
        <picture className="mt-20 flex justify-center">
          <img className="w-[20rem]" src="./beta-hydro.png" alt="beta" />
        </picture>

        <h1 className="mt-5 font-bold text-[1.5rem]">Ketogenic Guide</h1>
        <p className="mx-5">
          The <b>Keto Diet</b> is a diet in which you consume little to no carbs, a lot of fat, and
          a moderate amount of protein. Following that way of eating is generally how you will reach
          “ketosis,” a bodily process in which, to put it simply, you burn fat. However, the Keto
          Diet and the state of ketosis is not that simple. There are a lot of things you need to
          know about and be careful for. Not following the diet perfectly can cause you to stall or
          even gain weight.
        </p>

        <h1 className="mt-5 font-bold text-[1.5rem]">Why so much fat?</h1>
        <p className="mx-5">
          In the Keto Diet, you have to rely on fats for energy. You will go through a process
          called ketosis (or ketogenesis) when you have successfully made fat your main source of
          energy. In ketosis, your body doesn’t just burn the fat you eat, but the fat that’s
          already in your body. This is how you will lose weight.
        </p>
      </section>
    </div>
  );
};

export default Home;
