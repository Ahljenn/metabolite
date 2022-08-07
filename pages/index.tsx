import type { NextPage } from 'next';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <section className="mt-5 text-center max-w-screen-2xl">
        <h1 className="text-[3.5rem] font-bold">The Nutrition Guide for Your Best Self</h1>
        <h1>
          <b>Metabolite </b>present to you unbiased nutrition. We aim to provide well-researched
          guides catered to anyone.
        </h1>

        <div className="mt-5 flex gap-5 justify-center">
          <button className="px-8 py-1 bg-tertiary rounded-xl shadow-xl">Read the Research</button>
          <button className="px-8 py-2 bg-secondary rounded-xl shadow-xl">Read the Recipes</button>
        </div>
      </section>
    </>
  );
};

export default Home;
