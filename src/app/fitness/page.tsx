import Image from 'next/image';
import { TopGradient } from '../components/ui/TopGradient';
import UnderConstruction from '../components/ui/UnderConstruction';

export default function Fitness() {
  return (
    <>
      <TopGradient fromColor={'to-emerald-200'} toColor={'from-green-600'} />
      <UnderConstruction />
    </>
  );
}
