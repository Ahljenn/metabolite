import Head from 'next/head';

const Supplements: React.FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Supplements | Metabolite</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className="flex flex-col items-center mt-5 ">
        <h2 className="font-bold text-md sm:text-2xl text-primary mt-5">Supplements</h2>
        <p>There are many supplements you can take, but the most important ones are:</p>
        <ul className="mt-5 list-disc text-left w-[50rem] flex flex-col gap-5">
          <li>
            MCT Oil - This oil is composed of fat that burns fast. This helps the fat-burning
            process faster, skipping glucose in the energy order. The oil also gives you more energy
            quickly as fat burns slow, making you feel tired sometimes.{' '}
          </li>
          <li>
            Keto BHB - BHB is a type of ketone hormone that is created during ketosis. If you take
            BHB, you’re essentially giving your body extra ketones to burn fat. Taking this does not
            automatically put you in ketosis, but it does help start it or amplify it.
          </li>
          <li>
            Fish Oil (Omega-3) - Omega-3s are important because they stimulate the burning of fat in
            your body, helping you to further amplify your ketosis.
          </li>
          <li>
            Multivitamins - Again, it is more important to be healthy than to lose weight. If you
            ignore your vitamins and nutrients, you will not succeed in Keto for the long-run. You
            may stall a lot and get stuck.
          </li>
        </ul>
      </section>
    </>
  );
};

export default Supplements;
