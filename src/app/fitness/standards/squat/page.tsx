import StandardsTable from './../StandardsTable';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Squat Standards',
};

const squatMultiplierData: Record<string, number> = {
  Beginner: 0.75,
  Novice: 1.25,
  Intermediate: 1.5,
  Advanced: 2.25,
  Elite: 2.75,
};

const strengthStandards: number[] = [
  100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280,
  290, 300, 310, 320, 330, 340, 350,
];

const Squat = () => {
  return (
    <section
      className={`flex flex-col items-center  justify-between 
p-12`}
    >
      <div className=" py-8 flex flex-col sm:items-left gap-5 justify-center">
        <div>
          <h2 className="text-3xl font-bold">Squat Standards</h2>
        </div>
        <div className="lead-xl font-light opacity-75 max-w-4xl text-lg">
          <p>
            These squat standards are determined by body weight and experience level, utilizing
            established strength training ranking systems.
          </p>
          <p className="mt-5">
            They serve as benchmarks to assess performance. The multipliers indicate the proportion
            of body weight regarded as a commendable standard for each level.
          </p>
        </div>
      </div>
      <StandardsTable strengthStandards={strengthStandards} multiplier={squatMultiplierData} />
    </section>
  );
};

export default Squat;
