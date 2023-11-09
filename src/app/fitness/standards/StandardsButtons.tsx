'use client';
const StandardsButtons = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row gap-10 sm:gap-5 justify-center w-full mt-10">
      <div>
        <a
          rel="noopener noreferrer"
          href="/fitness/standards/squat"
          className="mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-gray-600 bg-neutral-900 hover:border-metaAccent/50"
        >
          Squat Standards
        </a>
      </div>
      <div>
        <a
          rel="noopener noreferrer"
          href="/fitness/standards/bench"
          className="mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-gray-600 bg-neutral-900 hover:border-metaAccent/50"
        >
          Bench Standards
        </a>
      </div>
      <div>
        <a
          rel="noopener noreferrer"
          href="/fitness/standards/deadlift"
          className="mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-gray-600 bg-neutral-900 hover:border-metaAccent/50"
        >
          Deadlift Standards
        </a>
      </div>
    </div>
  );
};

export default StandardsButtons;
