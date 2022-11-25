import Head from 'next/head';

const Expectations: React.FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>What to Expect | Metabolite</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="flex flex-col items-center mt-5 ">
        <h2 className="font-bold text-md sm:text-2xl text-primary mt-5">What to Expect</h2>
        <div className="w-[18rem] sm:w-[40rem] text-sm sm:text-xl">
          <p className="mt-5">
            In your first week, you will lose a lot of weight. Usually around 5-10 lbs (crazy,
            right?). Don’t get too excited. That is only water weight. After your first week or two,
            you may or may not gain some of that water weight back. If you stop the diet after 2
            weeks only, don’t be surprised when all the weight you lost came back. Your body will
            retain more water as carbohydrates hold water. You only start burning fat in your 2nd or
            3rd week and so on. Luckily, fat doesn’t come back unlike water.
          </p>
          <p className="mt-5">
            However, if you have been following the diet correctly, by the 2nd or 3rd week, you
            should be experiencing consistent weight loss. You may lose 3-6 lbs per week! Keep in
            mind though that the less fat you have, the slower your weight loss will be. Don’t be
            discouraged if you went from losing 4 lbs a week to only 2 lbs. That just means you have
            less fat to lose! That’s a sign that you have lost a lot of fat already.
          </p>

          <h3 className="mt-5 font-bold text-lg">
            What changes do <i>you</i> have to make?
          </h3>
          <p className="mt-5">
            Not a lot. However, you must be ready to start and never stop until you reach your goal.
            I know it is very tempting to eat out with friends or to eat food at a party, but you
            will only slow down your progress - or reverse it! If certain circumstances force you to
            stop, end the diet as needed and feel free to come back to it whenever you can. But,
            don’t forget that the Keto Journey has no stops!
          </p>
          <h3 className="mt-5 font-bold text-lg">
            Will you gain the weight back once you stop keto?
          </h3>
          <p className="mt-5">
            No, at least not all of it. You are expected to gain back around 5lbs once you end your
            diet. This isn’t bad, however, because that 5lbs will be water weight. Carbohydrates
            hold water into your body, so naturally, eating carbs again will make your body hold
            more water. When you reintroduce carbs after you are done, reintroduce them slowly or
            else you will reverse your progress. You have to eat more carbs little by little each
            day until you reach a point where your weight is stable and you can eat “normally”
            again.
          </p>
        </div>
      </section>
    </>
  );
};

export default Expectations;
