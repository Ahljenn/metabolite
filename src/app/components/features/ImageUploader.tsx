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
    <>
      {!image ? (
        <div className="col-span-full mx-5 sm:mx-10 max-w-screen-xl">
          <p className="mb-5">
            To get your personalized Metabolite Score, all you need to do is upload an image of the
            ingredients. Our OCR system will process it in seconds, providing you with precise
            information about the food&apos;s nutritional content.
          </p>
          <label htmlFor="cover-photo" className="block leading-6 text-white text-lg font-semibold">
            Image of nutrition information
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="mt-4 flex text-sm leading-6 text-gray-400">
                <label
                  htmlFor="image-upload"
                  className="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={onImageUpload}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-400">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <Image width="250" height="250" className="w-full" src={image} alt="Selected Image" />
          <button
            type="button"
            className="group mt-5  transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-red-300 bg-rose-700/30 hover:border-red-200 hover:bg-rose-600/30"
            onClick={() => setImage(null)}
          >
            Remove Image
          </button>
        </div>
      )}
    </>
  );
};

export default ImageUploader;
