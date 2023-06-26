import Image from 'next/image';
import { TopGradient } from '../components/ui/TopGradient';
import Link from 'next/link';

interface teamCardProps {
  name: string;
  desc: string;
  image: string;
  linkedin: string;
  role: string;
  education: string;
}

const teamCardData: teamCardProps[] = [
  {
    name: 'Ahljenn Mallari',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/aj.png',
    linkedin: 'https://www.linkedin.com/in/ahljenn-mallari-859026164',
    role: 'Founding Software Engineer',
    education: 'BS in Computer Science',
  },
  {
    name: 'Dylan Sarmiento',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/dy.png',
    linkedin: 'https://www.linkedin.com/in/dylan-anthony-sarmiento-982a00225',
    role: 'Researcher',
    education: 'BS in Neurobiology, Physiology and Behavior',
  },
];

export default function About() {
  return (
    <>
      <TopGradient fromColor={'to-green-400'} toColor={'from-teal-400'} />
      <h1 className="text-3xl font-sans italic">Meet the Team</h1>
      <div className="flex gap-10 flex-col lg:flex-row">
        {teamCardData.map((card: teamCardProps, index: number) => {
          return (
            <Link
              key={index}
              href={card.linkedin}
              className="rounded-lg flex flex-col items-center border border-transparent px-5 py-4 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={card.image}
                alt="Team member"
                width="250"
                height="250"
                className="rounded-full"
              />
              <h2 className={`text-2xl font-semibold mt-3`}>{card.name}</h2>
              <p className="text-sm opacity-75">{card.education}</p>
              <p className="mt-5 italic">{card.role}</p>
              <p className={`m-0 max-w-[20rem] text-sm opacity-50`}>{card.desc}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
