import StandardsTable from './../StandardsTable';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Bench Standards',
};

const benchMultiplierData: Record<string, number> = {
  Beginner: 0.5,
  Novice: 0.75,
  Intermediate: 1.25,
  Advanced: 1.75,
  Elite: 2.0,
};

const strengthStandards: number[] = [
  100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280,
  290, 300, 310, 320, 330, 340, 350,
];

const Bench = () => {
  return (
    <section className={`flex flex-col items-center justify-between p-12`}>
      <div className="py-8 flex flex-col sm:items-left gap-5 justify-center">
        <div>
          <h2 className="text-3xl font-bold">Bench Press Standards</h2>
        </div>
        <div className="lead-xl font-light opacity-75 max-w-4xl text-lg">
          <p>
            These bench press standards are computed based on individual body weight and experience
            levels, using recognized strength training ranking systems.
          </p>
          <p className="mt-5">
            They serve as benchmarks to gauge proficiency. The multipliers signify the proportion of
            body weight considered commendable for each level.
          </p>
        </div>
      </div>
      <StandardsTable strengthStandards={strengthStandards} multiplier={benchMultiplierData} />
    </section>
  );
};

export default Bench;
