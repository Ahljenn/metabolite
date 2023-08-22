'use client';
import type { RootState } from '&/store';

const Results = (): JSX.Element => {
  // Replace with post request
  if (true) {
    return (
      <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl flex flex-col items-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mt-5">No results</h1>
        <p className="mt-5 text-center opacity-75 mx-10 w-3/4">
          Looks like you have no screening results! Let&apos;s navigate back to the nutrition page
          to get started.
        </p>
        <div className="mt-5 ">
          <a
            className="mt-5 border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
            href="/nutrition"
            rel="noopener noreferrer"
          >
            Return to Nutrition
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl">
      <h1 className="text-3xl lg:text-5xl font-bold text-center mt-5 bg-gradient-to-r from-metaAccent via-metaPrimary to-metaAccent bg-clip-text text-transparent">
        My Metabolite - Nutrition
      </h1>
      <h2>test: </h2>
      {/* {countState} */}
    </div>
  );
};

export default Results;
