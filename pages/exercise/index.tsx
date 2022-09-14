import Head from 'next/head';

const Excercise: React.FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Excercise | Metabolite</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className="flex flex-col items-center mt-5 ">
        <h2 className="font-bold text-md sm:text-2xl text-primary mt-5">Excercise</h2>
        <p className="mt-5 w-[50rem]">
          Do you have to exercise often for this diet? Absolutely not! You don’t have to go to the
          gym everyday or run around the block a thousand times. However, if you really want to
          increase the effectiveness of this diet, it is highly recommended that you at least be
          lightly active. You can run maybe a few times a week and lift weights a few times a week.
          Better yet, if you’re the athletic or fitness type, work out a lot! Again though, don’t
          worry about exercising too much. Just try not to be a couch potato.
        </p>
        <h3 className="mt-5 font-bold text-lg">Ultimately, calories in vs. calories out</h3>
        <p className="mt-5 w-[50rem]">
          The goal is to burn the more calories than you intake. If you are unable to excercise for
          any reason, simply in take less calories. Your body already burns calories by simply
          sustaining itself. See the section of <b>basal metabolic rate</b> for more information on
          this.
        </p>
      </section>
    </>
  );
};

export default Excercise;
