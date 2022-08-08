import type { NextPage } from 'next';
import MainBot from '../components/ui/MainBot';
import MainTop from '../components/ui/MainTop';

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <MainTop />
      <MainBot />
    </>
  );
};

export default Home;
