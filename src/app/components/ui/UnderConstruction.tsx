import Link from 'next/link';

const UnderConstruction = () => {
  return (
    <>
      <h1 className="text-4xl lg:text-6xl font-bold text-center mt-5">Launching Soon</h1>
      <p className="mt-5 text-center opacity-75 mx-10 w-3/4">
        Exciting things are happening behind the scenes! This page is undergoing a transformation to
        bring you an even more incredible experience. Stay tuned for exciting updates.
      </p>
      <Link
        className="mt-5 border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
        href="/"
        rel="noopener noreferrer"
      >
        Return to Hub
      </Link>
    </>
  );
};
export default UnderConstruction;
