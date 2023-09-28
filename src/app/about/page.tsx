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
      <div className="p-5">
        <h2 className="mt-10 lg:text-2xl font-bold">Our Vision</h2>
        <div className="mt-5 opacity-75 max-w-[30rem] lg:max-w-[45rem] ">
          <p>
            At <b className="font-bold opacity-100 text-emerald-300">Metabolite</b>, the mission is
            to empower individuals to achieve optimal health and well-being through the seamless
            integration of nutrition, fitness, and technology. With expertise in full-stack
            development, artificial intelligence, and web applications, we combine innovative
            technologies and scientific research to revolutionize the approach to health. The
            proficiency in full-stack development, artificial intelligence, and web applications
            drives the delivery of groundbreaking solutions that enhance lives in healthcare,
            education, and scientific advancements. The dedication to understanding the intricate
            relationship between metabolism and overall well-being is a cornerstone in the pursuit
            of advancing knowledge and promoting better health practices. With Metabolite,
            individuals can unlock their true potential and embark on a journey towards a healthier,
            happier future.
          </p>
        </div>
        <h2 className="mt-10 lg:text-2xl font-bold">Contact us</h2>
        <div className="mt-5 max-w-[30rem] lg:max-w-[45rem] ">
          <p className="opacity-75">
            Feedback is valued Metabolite is here to assist you with any questions, concerns, or
            suggestions you may have.{' '}
            <a className="italic  text-emerald-300 underline" href="mailto:metabolite.io@gmail.com">
              Please feel free to reach out to us
            </a>
          </p>
          <p className="mt-5 opacity-75">To your health and happiness, </p>
          <p className="mt-2 text-white font-semibold">Ahljenn.</p>
        </div>
      </div>
    </section>
  );
};
export default About;
