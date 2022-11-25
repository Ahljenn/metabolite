import Head from 'next/head';
import { symptoms } from '../../components/static_data/flu_symptoms';

const KetoFlu: React.FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Keto Flu | Metabolite</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="flex flex-col items-center mt-5 ">
        <h2 className="font-bold text-md sm:text-2xl text-primary mt-5">The Keto Flu</h2>
        <div className="w-[18rem] sm:w-[40rem] text-sm sm:text-xl">
          <p className="mt-5">
            In your first couple of weeks, you will likely experience something called keto flu.
            Keto flu symptoms may include:
          </p>
          <ol className="mt-5 list">
            {symptoms.map((sym: string) => {
              return (
                <li key={sym} className="list-disc">
                  {sym}
                </li>
              );
            })}
          </ol>
          <h3 className="mt-5 font-bold text-lg">Ultimately, calories in vs. calories out</h3>
          <p className="mt-5">
            Do not fret, however, as this is only temporary. This happens because your body is not
            yet used to using fat as energy. Once you have been fully adapted to fat-energy, these
            symptoms should go away. However, the symptoms may come back if you have been kicked out
            of ketosis.
          </p>
        </div>
      </section>
    </>
  );
};

export default KetoFlu;
