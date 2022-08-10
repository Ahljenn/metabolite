import type { NextPage } from 'next';
import Head from 'next/head';
import MainBot from '../components/ui/MainBot';
import MainTop from '../components/ui/MainTop';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Metabolite</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <MainTop />
      <MainBot />
    </>
  );
};

export default Home;
