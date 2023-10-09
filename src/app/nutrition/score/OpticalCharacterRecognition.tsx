'use client';
import { useState } from 'react';
import Tesseract from 'tesseract.js';
import ImageUploader from '../../components/features/ImageUploader';

const OpticalCharacterRecognition = () => {
  const [extractedText, setExtractedText] = useState<string>('');

  const extractText = async (file: File) => {
    const res = await Tesseract.recognize(file, 'eng', { logger: (info) => console.log(info) });
    setExtractedText(res.data.text);
  };

  return (
    <section>
      <div className="py-8 flex flex-col sm:items-left gap-5 justify-center">
        <div className="flex flex-col mx-10 items-center">
          <ImageUploader callback={extractText} />
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
