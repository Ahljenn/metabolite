'use client';
import { useState } from 'react';
import Tesseract from 'tesseract.js';
import ImageUploader from '../../components/features/ImageUploader';

interface FoodAdditive {
  name: string;
  score: string;
}

interface AdditiveProps {
  foundFoodAdditives: FoodAdditive[];
  foundArtificialSweeteners: FoodAdditive[];
  foundArtificialFoodColorings: FoodAdditive[];
}

const OpticalCharacterRecognition = () => {
  const [extractedText, setExtractedText] = useState<string>('');
  const [extractedFeatures, setExtractedFeatures] = useState<AdditiveProps | null>();

  const extractText = async (file: File) => {
    const res = await Tesseract.recognize(file, 'eng', { logger: (info) => console.log(info) });
    setExtractedText(res.data.text);

    // Call the API
    try {
      const response = await fetch('/api/ml-service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ extractedText: res.data.text }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('test', data.extractedFeatures);
      setExtractedFeatures(data.extractedFeatures);
      // Handle the response data, which will include the health scores
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section>
      <ImageUploader callback={extractText} setExtractedText={setExtractedText} />
      <div className="py-8 flex flex-col sm:items-left gap-5 justify-center">
        <div className="flex flex-col mx-10 items-center">
          <div className="mt-10 max-w-2xl">
            {extractedText && (
              <>
                <b>Food content</b>: {extractedText}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpticalCharacterRecognition;
