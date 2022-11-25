import Head from 'next/head';

const Fasting: React.FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Fasting | Metabolite</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="flex flex-col items-center mt-5 ">
        <h2 className="font-bold text-md sm:text-2xl text-primary mt-5">Nutritional Fasting</h2>
        <div className="w-[18rem] sm:w-[40rem] text-sm sm:text-xl">
          <p className="mt-5">
            <i>Intermittent fasting</i> is a powerful dieting tool you can use to maximize your keto
            diet. Intermittent fasting is when you have a “window” of eating followed by an even
            longer window of not eating. An example of a type of intermittent fast is the{' '}
            <b>16:8</b> fast, the most common one people choose. In essence, you have 8 hours to
            eat, with the next 16 hours strictly fasting. For example, an individual only eat from
            8am to 4pm, and fast any other time.
          </p>

          <h3 className="mt-5 font-bold text-lg">Variations</h3>
          <p className="mt-5">
            There are other variations, such as the 18:6, 20:4, and even 23:1 fast (also called OMAD
            = One Meal A Day). You can fast every day of the week, but it is recommended that you
            fast around 3-5 times a week, depending on how you feel.
          </p>
          <p className="mt-5">
            Remember to fit all of your calories within your eating window. If your daily calorie
            intake is 1,800 calories, eat that 1,800 during your eating window, do not go too low or
            too high.
          </p>
        </div>
      </section>
    </>
  );
};

export default Fasting;
