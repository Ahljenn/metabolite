import type { NextPage } from 'next';

interface PageData {
  heading: string;
  description: string;
}

const homePageRoutes: PageData[] = [
  {
    heading: 'What can I eat?',
    description:
      'After walking around the grocery store and looking at different foods, you may be curious which ones are good for you.',
  },
  {
    heading: 'Nutrients',
    description:
      'Eat to be healthy, don’t focus on only losing the weight. Learn how macro and micro nutrients work together.',
  },
  {
    heading: 'Supplements',
    description:
      'Supplements can optimize your ketogenic burn. Learn which ones to take, and which ones to avoid.',
  },
  {
    heading: 'Exercise',
    description:
      'Do you have to exercise often for this diet? Learn more about exercise interacts with this diet.',
  },
];

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
        <picture className="mt-[12rem] flex justify-center">
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

      <section className="max-w-screen-2xl">
        <div className="grid grid-cols-2 gap-4 m-5 sm:grid-cols-4 ">
          {homePageRoutes.map((entry: PageData) => {
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

export default Home;
