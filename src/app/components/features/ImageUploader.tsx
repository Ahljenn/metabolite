'use client';
import Image from 'next/image';
import { useState } from 'react';

interface CallbackProps {
  callback: (file: File) => void;
}

const ImageUploader = ({ callback }: CallbackProps) => {
  const [image, setImage] = useState<string | null>(null);

  const onImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      callback(file);
    }
  };

  return (
    <section className="flex flex-col items-center max-w-xl">
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-white" htmlFor="file_input">
          Upload Food Information
        </label>
        <input
          className="block w-full text-sm  border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
          id="file_input"
          type="file"
          accept="image/*"
          onChange={onImageUpload}
        />
      </div>
      <div className="w-full mt-10">
        {image && (
          <Image width="500" height="500" className="w-full" src={image} alt="Selected Image" />
        )}
      </div>
    </section>
  );
};

export default ImageUploader;
