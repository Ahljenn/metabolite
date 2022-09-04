import Head from 'next/head';
import Image from 'next/image';

const Nutrients: React.FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Nutrients | Metabolite</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className="flex flex-col items-center mt-5 ">
        <Image src="/essential-nutrients.png" width={400} height={200} alt="nutrients" />
        <h2 className="font-bold text-md sm:text-2xl text-primary mt-5">Macro Nutrients</h2>
        <div className="w-[18rem] sm:w-[40rem] text-sm sm:text-xl">
          <ul className="list-disc my-5">
            <li>
              Always aim to eat 30g or less carbohydrates. You may eat up to 50g if you are
              physically active, but you risk falling off-track, so try to go below 30g.
            </li>
            <li>
              Eat only as many grams of protein as your kilograms of body weight. For example: I am
              180lb, which is converted to 81.6 kilograms. Therefore, I should eat around 81g of
              protein every day (or around that range: 70-90g of protein shouldn’t hurt too much).
              If you are a heavy weightlifter, you can get away with eating more protein, up to 20%
              more protein.
            </li>
            <li>
              As a general rule of thumb, you should eat *double* the amount of fat that you eat
              protein. For example, if I eat 50g of protein, I should also eat 100g of fat. We must
              make sure fat is “dominant” so that your body will continue to burn it.
            </li>
            <li>
              Fat is your friend. Always eat a lot of fat, simple as that. Your grams of fat should
              far exceed your carbohydrate and protein consumption. Don’t worry, you won’t get
              fatter as long as you follow the diet correctly.
            </li>
          </ul>

          <b>What counts as my carb count?</b>
          <p className="my-5">
            Carbohydrates include sugar and fiber. Try to avoid sugar as much as possible. Fiber is
            different: you can subtract fiber from your carb count. For example, if I eat 20g of
            carbs worth of broccoli, but that 20g of carbs has 15g of fiber, I only truly ate 5g of
            net carbs. There are things called “sugar alcohols” you might find in Atkins Brand foods
            and similar foods. These sugar alcohols are carbohydrates, but they can be subtracted
            from your carb count.
          </p>

          <b>Why do I have to limit protein?</b>
          <p className="my-5">
            Simple answer: your body turns protein into glucose (sugar) when it has too much of it.
            Complex answer: your body goes through a process called gluconeogenesis, which is when
            your body converts the excess protein you consume into glucose. It is very easy to eat a
            lot of protein without knowing it, and you will probably have the most trouble with
            gluconeogenesis during the diet. Again, as a rule of thumb, eat half as much protein as
            fat.
          </p>

          <b>Why so much fat?</b>
          <p className="my-5">
            In the Keto Diet, you have to rely on fats for energy. You will go through a process
            called ketosis (or ketogenesis) when you have successfully made fat your main source of
            energy. In ketosis, your body doesn’t just burn the fat you eat, but the fat that’s
            already in your body. This is how you will lose weight.
          </p>

          <h2 className="font-bold text-md sm:text-2xl text-center text-primary">
            Micro Nutrients
          </h2>

          <ul className="list-disc my-5">
            <li>
              It is easy to not eat other essential vitamins and minerals because the Keto Diet does
              not allow many vitamin-rich foods, such as fruits. Eat to be healthy, don’t focus on
              only losing the weight.
            </li>
            <li>
              Eat a lot of sodium and potassium. This will help greatly with muscle-building, bowel
              movements, and especially the burning of fat. Because you are eating a lot of salts,
              you will need to drink a lot more water so that you don’t get dehydrated.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Nutrients;
