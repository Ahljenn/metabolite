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
      <div className="py-8 flex flex-col sm:items-left gap-5 justify-center mx-5 sm:mx-10 max-w-screen-xl">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
          Metabolite Score
        </h1>
        <p className="font-bold">Optical Character Recognition</p>
        <p className="">
          Metabolite utilizes OCR technology that employs advanced machine learning algorithms to
          read and interpret nutritional information from images of food labels. This means you can
          simply snap a picture of the label, and our system will effortlessly extract the relevant
          data.
        </p>
        <p className="">
          To get your personalized Metabolite Score, all you need to do is upload an image of the
          ingredients. Our OCR system will process it in seconds, providing you with precise
          information about the food&apos;s nutritional content.
        </p>
      </div>
      <OpticalCharacterRecognition />
    </main>
  );
};

export default Score;
