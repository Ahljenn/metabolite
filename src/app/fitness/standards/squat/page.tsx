import UnderConstruction from '@/app/components/ui/UnderConstruction';
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

const Squat = () => {
  const strengthStandards: number[] = [];

  for (let weight = 100; weight <= 350; weight += 10) {
    strengthStandards.push(weight);
  }

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
                <td className="px-6 py-4">{item}</td>
                <td className="px-6 py-4">{Math.floor(item * squatMultiplierData['Beginner'])}</td>
                <td className="px-6 py-4">{Math.floor(item * squatMultiplierData['Novice'])}</td>
                <td className="px-6 py-4">
                  {Math.floor(item * squatMultiplierData['Intermediate'])}
                </td>
                <td className="px-6 py-4">{Math.floor(item * squatMultiplierData['Advanced'])}</td>
                <td className="px-6 py-4">{Math.floor(item * squatMultiplierData['Elite'])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Squat;
