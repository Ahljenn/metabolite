import Head from 'next/head';
import { citations } from '../../components/static_data/citations';

const Sources: React.FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Sources | Metabolite</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="flex flex-col items-center mt-5 mb-[10rem]">
        <h2 className="font-bold text-md sm:text-2xl text-primary mt-5">Sources</h2>
        <div className="w-[18rem] sm:w-[40rem] text-sm sm:text-xl">
          {citations.map((citation: string, idx) => {
            return (
              <p className="mt-5" key={idx}>
                {citation}
              </p>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Sources;
