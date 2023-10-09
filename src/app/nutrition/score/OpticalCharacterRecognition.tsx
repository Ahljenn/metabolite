'use client';
import { useState } from 'react';
import Tesseract from 'tesseract.js';

const OpticalCharacterRecognition = () => {
  const [image, setImage] = useState(null);
  return (
    <section>
      <div className="py-8 flex flex-col sm:items-left gap-5 justify-center"></div>
    </section>
  );
};

export default OpticalCharacterRecognition;
