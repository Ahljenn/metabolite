const StandardsButtons = () => {
  return (
    <div className="flex gap-5">
      <a
        rel="noopener noreferrer"
        href="/fitness/standards/squat"
        className="mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaSecondary bg-neutral-900 hover:border-metaAccent"
      >
        Squat
      </a>
      <a
        rel="noopener noreferrer"
        href="/fitness/standards/bench"
        className="mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaSecondary bg-neutral-900 hover:border-metaAccent"
      >
        Bench
      </a>
      <a
        rel="noopener noreferrer"
        href="/fitness/standards/deadlift"
        className="mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaSecondary bg-neutral-900 hover:border-metaAccent"
      >
        Deadlift
      </a>
    </div>
  );
};

export default StandardsButtons;
