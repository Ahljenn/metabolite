import { MacrosProps, macroCards } from './n.dashboard.utils';
import { activityFactor, dietRatios } from '@/tools/diet-rank/rank.utils';

const Macros: React.FC<MacrosProps> = ({ userData, setModalView, setModalInfo }) => {
  const onLogClick = () => {
    setModalInfo({
      titleTxt: 'Logging Nutrition Information',
      descTxt: 'Please provide the details for the new nutrition source:',
      rejectTxt: 'Cancel',
      acceptTxt: 'Log',
    });
    setModalView(true);
  };

  const onRatioClick = () => {
    setModalInfo({
      titleTxt: 'Modify Ratios',
      descTxt: 'Please provide the details for the new macro-nutrient ratios:',
      rejectTxt: 'Cancel',
      acceptTxt: 'Save',
    });
    setModalView(true);
  };

  // TDEE
  const totalExpenditure: number = Math.round(
    (userData.bmr ?? 1) * activityFactor[userData.activityLevel]
  );

  return (
    <section className="flex flex-col justify-center">
      <div
        className="flex flex-col lg:flex-row gap-5 items-center justify-between rounded-lg border px-10 py-6 border-neutral-700 bg-neutral-800/50 mx-2 transition-all duration-500"
        rel="noopener noreferrer"
      >
        <div>
          <p className={`mb-3 text-2xl font-semibold`}>Calories</p>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Total Calories</p>
          <p>0 of {totalExpenditure} cal</p>
        </div>

        <div>
          <button
            className="text-sm transition-all border rounded-lg py-3 px-10 whitespace-nowrap border-metaAccent/40 bg-neutral-800/70 hover:border-metaAccent"
            onClick={onLogClick}
          >
            More Info
          </button>
        </div>
      </div>
      <div className="mt-5 flex justify-center lg:justify-start">
        <button
          className="text-sm transition-all border rounded-lg mx-2 py-3 px-10 whitespace-nowrap border-metaAccent/40 bg-neutral-800/70 hover:border-metaAccent"
          onClick={onRatioClick}
        >
          Modify Ratios
        </button>
      </div>
      <div className="flex flex-col items-center lg:flex-row justify-center">
        {macroCards.map(
          (
            card: {
              header: string;
              desc: string;
            },
            index: number
          ) => {
            const dietName: string = userData.dietChoice ?? 'Low Carb Diet'; // Replace with the appropriate diet name
            const dietRatio = dietRatios[dietName];
            const macro = card.header;
            const calPerGram = macro === 'Fat' ? 9 : 4;

            return (
              <div
                key={index}
                className="rounded-lg border px-10 py-6 border-neutral-700 bg-neutral-800/50 mx-2 my-5 text-center sm:text-left"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-lg md:text-2xl font-semibold`}>{macro}</h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{card.desc}</p>
                <p>
                  {dietRatio
                    ? `0 of ${Math.round(
                        (dietRatio[macro as keyof typeof dietRatio] * totalExpenditure) / calPerGram
                      )}g`
                    : 'Diet ratio not found'}
                </p>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Macros;
