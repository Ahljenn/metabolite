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
    desc: "Ahljenn is the founding software engineer with a profound passion for intersecting health and technology. He brings a strong foundation in full-stack development and a relentless drive to deliver innovative solutions that positively impact the world. Ahljenn's true calling lies in leveraging expertise to develop groundbreaking technologies that enhance people's lives in domains such as healthcare, education, and scientific advancements. Experience encompasses deploying robust web applications, harnessing the power of artificial intelligence, and working with operating systems. As the only developer of the team, Ahljenn's unwavering dedication and vision align seamlessly with our pursuit of integrating health and technology to transform lives.",
    image: '/aj.png',
    linkedin: 'https://www.linkedin.com/in/ahljenn-mallari-859026164',
    role: 'Founding Software Engineer',
    education: 'BS in Computer Science',
  },
  {
    name: 'Dylan Sarmiento',
    desc: "Dylan is a dedicated researcher with a deep-rooted passion for nutrition and health. With a keen interest in understanding the intricate relationship between nutrition, metabolism, and overall well-being, he is driven to contribute to the field's advancement. Committed to supporting others on their path to success and optimal health, he endeavors to create a brighter and healthier future for all. Alongside his research pursuits, Dylan has honed his teaching skills through tutoring high school students in math, science, and English. While versatile in various subjects, his expertise shines in algebra and biology. Dylan is a valuable member of the two-man team, bringing both knowledge and a genuine passion for promoting nutrition and health.",
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
      <div className="mt-5 flex gap-10 flex-col lg:flex-row">
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
