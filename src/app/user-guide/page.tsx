import Image from 'next/image';
import UnderConstruction from '../components/ui/UnderConstruction';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'User Guide',
};

const UserGuide: React.FC = (): JSX.Element => {
  return (
    <section
      className={`flex flex-col items-center  justify-between 
  p-12`}
    >
      <UnderConstruction />
    </section>
  );
};
export default UserGuide;
