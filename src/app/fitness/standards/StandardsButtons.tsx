'use client';
import { usePathname } from 'next/navigation';

const classNames = (...classes: any[]): string => {
  return classes.filter(Boolean).join(' ');
};

const standardsNavigation: { name: string; url: string }[] = [
  { name: 'Squat Standards', url: '/fitness/standards/squat' },
  { name: 'Bench Standards', url: '/fitness/standards/bench' },
  { name: 'Deadlift Standards', url: '/fitness/standards/deadlift' },
];

const StandardsButtons = () => {
  const currentRoute = usePathname();

  if (currentRoute !== '/fitness/standards')
    return (
      <div className="flex flex-col items-center sm:flex-row gap-10 sm:gap-5 justify-center w-full mt-10">
        {standardsNavigation.map((item, idx) => {
          return (
            <a
              key={idx}
              rel="noopener noreferrer"
              href={item.url}
              className={classNames(
                item.url === currentRoute
                  ? 'cursor-not-allowed border-metaAccent'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-gray-600 bg-neutral-900 hover:border-metaAccent/50'
              )}
            >
              {item.name}
            </a>
          );
        })}
      </div>
    );
};

export default StandardsButtons;
