'use client';
import { useState } from 'react';
import Tesseract from 'tesseract.js';
import ImageUploader from '../../components/features/ImageUploader';
import Disclaimer from '@/app/components/ui/Disclaimer';

interface FoodAdditive {
  name: string;
  score: string;
}

export interface AdditiveProps {
  foundFoodAdditives?: FoodAdditive[];
  foundArtificialSweeteners?: FoodAdditive[];
  foundArtificialFoodColorings?: FoodAdditive[];
}

const OpticalCharacterRecognition = () => {
  const [extractedText, setExtractedText] = useState<string>('');
  const [extractedFeatures, setExtractedFeatures] = useState<AdditiveProps>({});

  const extractText = async (file: File) => {
    const res = await Tesseract.recognize(file, 'eng', { logger: (info) => console.log(info) });
    setExtractedText(res.data.text);

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
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section>
      <ImageUploader
        callback={extractText}
        setExtractedText={setExtractedText}
        setExtractedFeatures={setExtractedFeatures}
      />
      <div className="py-8 flex flex-col sm:items-left gap-5 justify-center">
        <div className="flex flex-col mx-10 items-center">
          <div className="mt-10 max-w-2xl">
            {extractedText && (
              <>
                <h3 className="font-bold text-lg mb-5">Extracted Food Content</h3>
                <p>{extractedText}</p>
              </>
            )}
          </div>

          <div className="flex flex-col gap-5 mt-10 max-w-2xl w-full">
            {extractedText && (
              <>
                <h3 className="font-bold text-lg text-red-600">Potential Harmful Food Content</h3>
                <div>
                  {extractedFeatures.foundFoodAdditives?.length ? (
                    <ul>
                      <li>
                        <b>Found Food Additives</b>:
                        <ul>
                          {extractedFeatures.foundFoodAdditives.map((additive, index) => (
                            <li key={index}>{`${additive.name} - ${additive.score}`}</li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  ) : (
                    <p className="none-message">
                      <i>No harmful food additives detected.</i>
                    </p>
                  )}
                </div>

                <div>
                  {extractedFeatures.foundArtificialSweeteners?.length ? (
                    <ul>
                      <li>
                        <b>Found Artificial Sweeteners</b>:
                        <ul>
                          {extractedFeatures.foundArtificialSweeteners.map((sweetener, index) => (
                            <li key={index}>{`${sweetener.name} - ${sweetener.score}`}</li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  ) : (
                    <p className="none-message">
                      <i>No harmful artificial sweeteners detected.</i>
                    </p>
                  )}
                </div>

                <div>
                  {extractedFeatures.foundArtificialFoodColorings?.length ? (
                    <ul>
                      <li>
                        <b>Found Artificial Food Colorings</b>:
                        <ul>
                          {extractedFeatures.foundArtificialFoodColorings.map((coloring, index) => (
                            <li key={index}>{`${coloring.name} - ${coloring.score}`}</li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  ) : (
                    <p className="none-message">
                      <i>No harmful artificial food colorings detected.</i>
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpticalCharacterRecognition;
