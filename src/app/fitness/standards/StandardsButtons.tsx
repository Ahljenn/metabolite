const StandardsButtons = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row gap-10 sm:gap-5 justify-center w-full mt-10">
      <div>
        <a
          rel="noopener noreferrer"
          href="/fitness/standards/squat"
          className="mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaSecondary bg-neutral-900 hover:border-metaAccent"
        >
          Squat Standards
        </a>
      </div>
      <div>
        <a
          rel="noopener noreferrer"
          href="/fitness/standards/bench"
          className="mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaSecondary bg-neutral-900 hover:border-metaAccent"
        >
          Bench Standards
        </a>
      </div>
      <div>
        <a
          rel="noopener noreferrer"
          href="/fitness/standards/deadlift"
          className="mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaSecondary bg-neutral-900 hover:border-metaAccent"
        >
          Deadlift Standards
        </a>
      </div>
    </div>
  );
};

export default StandardsButtons;
