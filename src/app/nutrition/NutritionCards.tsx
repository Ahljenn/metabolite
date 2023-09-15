import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const NutritionCards = () => {
  return (
    <>
      <div className="py-8 flex flex-col sm:flex-row sm:items-end gap-5 justify-center">
        <div>
          <h2 className="text-3xl font-bold">Why Metabolite?</h2>
        </div>
        <div className="lead-xl font-light opacity-75 max-w-2xl text-lg">
          Precision tools for an empowered nutrition journey.
        </div>
      </div>

      {nutritionCardData.map((card, idx) => {
        return (
          <a
            key={idx}
            href={card.route}
            className="flex flex-col items-center rounded-lg md:flex-row md:max-w-3xl border border-neutral-800 bg-neutral-900 hover:border-metaSecondary transition-all mb-5"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-52 md:rounded-none md:rounded-l-lg"
              src={card.img}
              alt="calculate"
              width={500}
              height={500}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.header}
              </h5>
              <p className="mb-3 font-normal opacity-75">{card.desc}</p>
            </div>
          </a>
        );
      })}
    </>
  );
};
const nutritionCardData: {
  header: string;
  desc: string;
  route: string;
  img: string;
}[] = [
  {
    header: 'BMI, BMR & Body Fat Calculator',
    desc: 'Assess your body composition, energy expenditure, and overall health status with our combined calculator.',
    route: '/nutrition/calculators',
    img: '/calculate.jpg',
  },
  {
    header: 'Vitamins & Nutrients',
    desc: 'Access a comprehensive guide for essential nutrients and vitamins along with their impact on your overall well-being.',
    route: '/nutrition/nutrients',
    img: '/vitamins.jpg',
  },
];

export default NutritionCards;
