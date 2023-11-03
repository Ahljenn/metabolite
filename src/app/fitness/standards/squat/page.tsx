import UnderConstruction from '@/app/components/ui/UnderConstruction';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Squat Standards',
};

const categories = [
  { category: 'Beginner', minScore: 0.0, maxScore: 100.0 },
  { category: 'Novice', minScore: 100.1, maxScore: 200.0 },
  { category: 'Intermediate', minScore: 200.1, maxScore: 300.0 },
  { category: 'Advanced', minScore: 300.1, maxScore: 400.0 },
  { category: 'Elite', minScore: 400.1, maxScore: Infinity },
];

// Define the multipliers for each category
const multipliers = [
  { category: 'Beginner', minMultiplier: 0.8, maxMultiplier: 1.0 },
  { category: 'Novice', minMultiplier: 1.1, maxMultiplier: 1.2 },
  { category: 'Intermediate', minMultiplier: 1.3, maxMultiplier: 1.4 },
  { category: 'Advanced', minMultiplier: 1.5, maxMultiplier: 1.6 },
  { category: 'Elite', minMultiplier: 1.7, maxMultiplier: Infinity },
];

const Squat = () => {
  const strengthStandards = [
    { level: 'Beginner', bodyweight: 70, totalLifted: 100 },
    { level: 'Novice', bodyweight: 80, totalLifted: 150 },
    { level: 'Intermediate', bodyweight: 90, totalLifted: 200 },
    { level: 'Advanced', bodyweight: 100, totalLifted: 250 },
    { level: 'Elite', bodyweight: 110, totalLifted: 300 },
  ];

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
          The squat standards below are calculated based on bodyweight and experience level. The
          multipliers used for each category are derived from established strength training ranking
          systems.
        </div>
      </div>
      <div className="mt-5">
        <table className="w-full text-sm text-left text-white">
          <thead className="bg-neutral-800 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Body Weight
              </th>
              <th scope="col" className="px-6 py-3">
                Beginner
              </th>
              <th scope="col" className="px-6 py-3">
                Novice
              </th>
              <th scope="col" className="px-6 py-3">
                Intermediate
              </th>
              <th scope="col" className="px-6 py-3">
                Advanced
              </th>
              <th scope="col" className="px-6 py-3">
                Elite
              </th>
            </tr>
          </thead>
          <tbody>
            {strengthStandards.map((item, idx) => (
              <tr className="border-b bg-neutral-900 border-neutral-800" key={idx}>
                <td className="px-6 py-4">item</td>
                <td className="px-6 py-4">item</td>
                <td className="px-6 py-4">item</td>
                <td className="px-6 py-4">item</td>
                <td className="px-6 py-4">item</td>
                <td className="px-6 py-4">item</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Squat;
