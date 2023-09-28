import Image from 'next/image';
import Link from 'next/link';

interface teamCardProps {
  name: string;
  desc: string;
  role: string;
  education: string;
}

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'About',
};

const teamCardData: teamCardProps[] = [
  {
    name: 'Ahljenn Mallari',
    desc: "Ahljenn is the founding software engineer with a profound passion for intersecting health and technology. He brings a strong foundation in full-stack development and a relentless drive to deliver innovative solutions that positively impact the world. Ahljenn's true calling lies in leveraging expertise to develop groundbreaking technologies that enhance people's lives in domains such as healthcare, education, and scientific advancements. Experience encompasses deploying robust web applications, harnessing the power of artificial intelligence, and working with operating systems. As the only developer of the team, Ahljenn's unwavering dedication and vision align seamlessly with our pursuit of integrating health and technology to transform lives.",
    role: 'Founding Software Engineer',
    education: 'BS in Computer Science',
  },
  {
    name: 'Dylan Sarmiento',
    desc: "Dylan is a dedicated researcher with a deep-rooted passion for nutrition and health. With a keen interest in understanding the intricate relationship between nutrition, metabolism, and overall well-being, he is driven to contribute to the field's advancement. Committed to supporting others on their path to success and optimal health, he endeavors to create a brighter and healthier future for all. Alongside his research pursuits, Dylan has honed his teaching skills through tutoring high school students in math, science, and English. While versatile in various subjects, his expertise shines in algebra and biology. Dylan is a valuable member of the two-man team, bringing both knowledge and a genuine passion for promoting nutrition and health.",
    role: 'Researcher',
    education: 'BS in Neurobiology, Physiology and Behavior',
  },
];

const About = () => {
  return (
    <section
      className={`flex flex-col items-center  justify-between 
  p-12`}
    >
      <h1 className="lg:text-4xl font-bold whitespace-nowrap text-white">Meet the Team</h1>
      <p className="mt-5 text-center opacity-75 max-w-xl">
        We&apos;re excited to introduce you to the dynamic duo that drives our mission to support
        your health and wellness journey. With a shared dedication to your well-being, these are the
        faces behind the scenes who are here to guide, motivate, and empower you:
      </p>

      <div className="mt-5 flex gap-10 flex-col lg:flex-row">
        {teamCardData.map((card: teamCardProps, index: number) => {
          return (
            <div
              key={index}
              className="rounded-lg flex flex-col items-center border border-transparent p-5 "
              rel="noopener noreferrer"
            >
              <h2 className={`lg:text-2xl font-semibold mt-3 whitespace-nowrap`}>{card.name}</h2>
              <p className="text-sm opacity-75 ">{card.education}</p>
              <p className="mt-5 italic whitespace-nowrap">{card.role}</p>
              <p className={`m-0 max-w-[20rem] text-sm opacity-50`}>{card.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="p-5">
        <h2 className="mt-10 lg:text-2xl font-bold">Our Vision</h2>
        <div className="mt-5 opacity-50 max-w-[30rem] lg:max-w-[45rem] ">
          <p>
            At <b className="font-bold opacity-100 text-emerald-300">Metabolite</b>, our mission is
            to empower individuals to achieve optimal health and well-being through the seamless
            integration of nutrition, fitness, and technology. With a team led by Ahljenn Mallari,
            our founding software engineer, and Dylan Sarmiento, our dedicated researcher, we
            combine the power of innovative technologies and scientific research to revolutionize
            the way people approach their health journeys.
          </p>
          <p className="mt-5">
            Ahljenn&apos;s expertise in full-stack development, artificial intelligence, and web
            applications drives us to deliver groundbreaking solutions that enhance lives in
            healthcare, education, and scientific advancements. Dylan&apos;s passion for nutrition
            and his commitment to understanding the intricate relationship between metabolism and
            overall well-being make him an invaluable asset in our pursuit of advancing knowledge
            and promoting better health practices.{' '}
          </p>
          <p className="mt-5">
            Our team may be small, but we&apos;re mighty in our commitment to your journey.
            Together, we strive to provide a holistic platform that seamlessly integrates
            personalized nutrition guidance, tailored fitness plans, and cutting-edge technology to
            transform lives. With Metabolite, individuals can unlock their true potential and embark
            on a journey towards a healthier, happier future.
          </p>
        </div>
        <h2 className="mt-10 lg:text-2xl font-bold">Contact us</h2>
        <div className="mt-5 opacity-50 max-w-[30rem] lg:max-w-[45rem] ">
          <p>
            We value your feedback and are here to assist you with any questions, concerns, or
            suggestions you may have.{' '}
            <a className="italic  text-emerald-300 underline" href="mailto:metabolite.io@gmail.com">
              Please feel free to reach out to us
            </a>
          </p>
          <p className="mt-5">To your health and happiness, </p>
          <p>Ahljenn.</p>
        </div>
      </div>
    </section>
  );
};
export default About;
