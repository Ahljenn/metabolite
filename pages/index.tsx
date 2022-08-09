import type { NextPage } from 'next';
import Head from 'next/head';
import MainBot from '../components/ui/MainBot';
import MainTop from '../components/ui/MainTop';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Metabolite | Welcome</title>
        <link rel="icon" href="/mbe-favicon.png" />
      </Head>
      <MainTop />
      <MainBot />
    </>
  );
};

export default Home;
