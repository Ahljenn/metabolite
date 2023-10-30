import Image from 'next/image';
const StrengthCards = () => {
  return (
    <>
      {strengthCardData.map((card, idx) => {
        return (
          <a
            key={idx}
            href={card.route}
            className="mt-5 flex flex-col items-center rounded-lg md:flex-row md:max-w-4xl border border-neutral-800 bg-neutral-900 hover:border-metaSecondary transition-all mb-20 md:mb-10"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-52 md:w-52 md:rounded-none md:rounded-l-lg"
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

const strengthCardData: {
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

export default StrengthCards;
