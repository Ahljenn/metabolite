import StandardsTable from './../StandardsTable';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Deadlift Standards',
};

const deadliftMultiplierData: Record<string, number> = {
  Beginner: 1.0,
  Novice: 1.5,
  Intermediate: 2.0,
  Advanced: 2.5,
  Elite: 3.0,
};

const strengthStandards: number[] = [
  100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280,
  290, 300, 310, 320, 330, 340, 350,
];

const Deadlift = () => {
  return (
    <section
      className={`flex flex-col items-center  justify-between 
p-12`}
    >
      <div className=" py-8 flex flex-col sm:items-left gap-5 justify-center">
        <div>
          <h2 className="text-3xl font-bold">Deadlift Standards</h2>
        </div>
        <div className="lead-xl font-light opacity-75 max-w-4xl text-lg">
          <p>
            These deadlift standards are determined by body weight and experience level, utilizing
            recognized strength training ranking systems.
          </p>
          <p className="mt-5">
            They serve as benchmarks for performance assessment. The multipliers signify the
            proportion of body weight considered a commendable standard for each level.
          </p>
        </div>
      </div>
      <StandardsTable strengthStandards={strengthStandards} multiplier={deadliftMultiplierData} />
    </section>
  );
};

export default Deadlift;
