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
    header: 'Squat Strength Level Standards',
    desc: 'Discover strength level standards for the squat exercise. Compare your performance to others at your body weight.',
    route: '/fitness/standards/squat',
    img: '/metabolite-m.png',
  },
  {
    header: 'Bench Press Strength Level Standards',
    desc: 'Explore strength level standards for the bench press. Evaluate your performance relative to lifters of similar body weight.',
    route: '/fitness/standards/bench',
    img: '/metabolite-m.png',
  },
  {
    header: 'Deadlift Strength Level Standards',
    desc: 'Uncover strength level standards for the deadlift. See where your performance ranks compared to others in your weight class.',
    route: '/fitness/standards/deadlift',
    img: '/metabolite-m.png',
  },
];

export default StrengthCards;
