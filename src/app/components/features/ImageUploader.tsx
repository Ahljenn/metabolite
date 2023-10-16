'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';

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
      <label
        htmlFor="image-upload"
        className="cursor-pointer mt-5 transition-all border rounded-lg py-5 px-10 whitespace-nowrap border-metaSecondary bg-neutral-900 hover:border-metaAccent"
      >
        {image && (
          <div className="mt-4">
            <Image width="250" height="250" className="w-full" src={image} alt="Selected Image" />
          </div>
        )}
        <ArrowUpTrayIcon className="mx-auto h-12 w-12 text-gray-400" aria-hidden="true" />
        <span className="mt-2 block text-sm font-semibold text-white text-center">
          Upload {image ? 'a different' : 'an'} image of{' '}
          <span className="font-bold">ingredients.</span>
        </span>
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onImageUpload}
      />

      {image && (
        <button
          type="button"
          className="group mt-5  transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-red-300 bg-rose-700/30 hover:border-red-200 hover:bg-rose-600/30"
          onClick={() => setImage(null)}
        >
          Remove Image
        </button>
      )}
    </section>
  );
};

export default ImageUploader;
