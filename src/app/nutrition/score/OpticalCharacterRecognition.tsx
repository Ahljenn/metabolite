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

export type UploadState = 'Not Uploaded' | 'Uploading' | 'Complete';

const OpticalCharacterRecognition = () => {
  const [extractedText, setExtractedText] = useState<string>('');
  const [extractedFeatures, setExtractedFeatures] = useState<AdditiveProps>({});
  const [uploadState, setUploadState] = useState<UploadState>('Not Uploaded');

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
      setUploadState('Complete');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  switch (uploadState) {
    case 'Not Uploaded':
      return (
        <ImageUploader
          callback={extractText}
          setExtractedText={setExtractedText}
          setExtractedFeatures={setExtractedFeatures}
          setUploadState={setUploadState}
        />
      );

    case 'Uploading':
      return <p>Analyzing image...</p>;

    case 'Complete':
      return (
        <div className="flex flex-col mx-10 items-center">
          <button
            type="button"
            className="group mt-5  transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-red-300 bg-rose-700/30 hover:border-red-200 hover:bg-rose-600/30"
            onClick={() => {
              setExtractedText('');
              setExtractedFeatures({});
              setUploadState('Not Uploaded');
            }}
          >
            Reset
          </button>
          <div className="max-w-2xl">
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
      );
  }
};

export default OpticalCharacterRecognition;
