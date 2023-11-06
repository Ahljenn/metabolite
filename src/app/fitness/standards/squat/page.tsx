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
          <p>
            The squat standards below are calculated based on bodyweight and experience level. The
            multipliers used for each category are derived from established strength training
            ranking systems.
          </p>
          <p className="mt-5">
            The squat standards below are calculated based on bodyweight and experience level. The
            multipliers used for each category indicate how much of your body weight is considered a
            good standard for that level. For example, if you&apos;re a Beginner, lifting 75% of
            your body weight in a squat is considered a good starting point. As you progress to
            higher levels, the multiplier increases, reflecting the higher standards for strength at
            those levels.
          </p>
          <ul className="text-white mt-5">
            <li className="mb-2">
              <strong className="font-bold text-metaAccent">Beginner:</strong> This level represents
              a solid starting point for strength training. A multiplier of{' '}
              <strong className="text-metaAccent">0.75</strong> means lifting 75% of your body
              weight is considered a good standard for beginners.
            </li>
            <li className="mb-2">
              <strong className="font-bold text-metaAccent">Novice:</strong> As you progress, a
              multiplier of <strong className="text-metaAccent">1.25</strong> indicates that lifting
              125% of your body weight is a commendable goal for novice lifters.
            </li>
            <li className="mb-2">
              <strong className="font-bold text-metaAccent">Intermediate:</strong> At this stage, a
              multiplier of <strong className="text-metaAccent">1.50</strong> signifies that lifting
              150% of your body weight is a noteworthy achievement.
            </li>
            <li className="mb-2">
              <strong className="font-bold text-metaAccent">Advanced:</strong> Achieving a
              multiplier of <strong className="text-metaAccent">2.25</strong> means you&apos;ve
              reached an advanced level of strength, lifting 225% of your body weight.
            </li>
            <li>
              <strong className="font-bold text-metaAccent">Elite:</strong> The highest level, with
              a multiplier of <strong className="text-metaAccent">2.75</strong>, signifies an elite
              level of strength, lifting an impressive 275% of your body weight.
            </li>
          </ul>
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
