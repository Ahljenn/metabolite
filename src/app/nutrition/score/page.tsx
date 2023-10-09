import UnderConstruction from '@/app/components/ui/UnderConstruction';
import { Metadata } from 'next';
import OpticalCharacterRecognition from './OpticalCharacterRecognition';
export const metadata: Metadata = {
  title: 'Metabolite Score',
};

const Score = () => {
  return (
    <main
      className={`flex flex-col items-center  justify-between 
p-12`}
    >
      <h1>Metabolite Score</h1>
      <p>How It Works</p>
      <p>Optical Character Recognition</p>
      <OpticalCharacterRecognition />
    </main>
  );
};

export default Score;
