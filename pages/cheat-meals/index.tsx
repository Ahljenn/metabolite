import Head from 'next/head';

const CheatMeals: React.FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Cheat Meals | Metabolite</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="flex flex-col items-center mt-5 ">
        <h2 className="font-bold text-md sm:text-2xl text-primary mt-5">Cheat Meals</h2>
        <div className="w-[18rem] sm:w-[40rem] text-sm sm:text-xl">
          <p className="mt-5">
            It is highly not recommending having cheat meals during ketosis, even if it is only once
            a week. Your body takes a while to get into ketosis, and if you cheat once (eat too many
            carbs), your body will instantly shut down ketosis. Afterwards, you’ll have to build
            your way back up to ketosis again, which can take a few days. That’s a few days of
            progress lost because of one cheat meal.
          </p>
        </div>
      </section>
    </>
  );
};

export default CheatMeals;
