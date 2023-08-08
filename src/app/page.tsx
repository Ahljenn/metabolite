'use client';
import Link from 'next/link';
import Header from './components/ui/AppWrapper';
import Image from 'next/image';
import Lottie from 'lottie-react';
import Health from '#/lottie/health-hero.json';

const lottieStyle = {
  height: 500,
};

const rootCardData: { header: string; desc: string; route: string }[] = [
  {
    header: 'Fitness',
    desc: 'Curate workouts that align perfectly with your goals, abilities, and preferences.',
    route: '/fitness',
  },
  {
    header: 'Nutrition',
    desc: 'Discover the power of nutrition and its impact on your overall well-being.',
    route: '/nutrition',
  },
  {
    header: 'User Guide',
    desc: 'Empower yourself with the knowledge and tools to make the most out of your experience.',
    route: '/user-guide',
  },
  // {
  //   header: 'About',
  //   desc: 'Learn more about our commitment to empower you on your wellness journey.',
  //   route: '/about',
  // },
];

export default function Home() {
  return (
    <>
      <div
        className="w-full bg-center bg-cover"
        style={{
          backgroundImage: `url('/hero-bg2.jpeg')`,
        }}
      >
        <div className="flex max-w-screen-xl px-4 py-8 mx-auto flex-col sm:flex-row">
          <div className="col-span-6 hidden sm:block">
            <Lottie animationData={Health} loop={true} style={lottieStyle} />
          </div>
          <div className="mr-auto place-self-center text-center sm:text-left">
            <h1 className="max-w-2xl mb-4 text-xl sm:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white m-5 sm:m-0">
              The Comprehensive Health and Wellness Platform
            </h1>
            <p className="max-w-2xl mb-6 sm:mb-8 md:text-lg sm:text-xl text-white m-5 sm:m-0">
              With personalized assessments and data-driven insights, we provide tailored
              recommendations to help you reach your specific health goals.
            </p>
            <div className="flex flex-col-reverse sm:flex-row gap-8 justify-center sm:justify-start items-center">
              <div>
                <Link
                  href="/nutrition"
                  className="mt-5 border-green-300 bg-emerald-700 hover:border-green-200 hover:bg-emerald-600 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
                >
                  Metabolite
                </Link>
              </div>
              <div>
                <Link
                  href="/about"
                  className="mt-5 border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className={`flex flex-col items-center  justify-between 
    p-12`}
      >
        <div className="flex flex-col lg:flex-row items-center">
          <div className="mb-10 lg:mt-0 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
            {rootCardData.map(
              (card: { header: string; desc: string; route: string }, index: number) => {
                return (
                  <Link
                    key={index}
                    href={card.route}
                    className="group rounded-lg border border-transparent px-5 py-4 hover:border-neutral-700 hover:bg-neutral-800/50 mx-2 my-5 sm:my-0"
                    rel="noopener noreferrer"
                  >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                      {card.header}
                      <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{card.desc}</p>
                  </Link>
                );
              }
            )}
          </div>
          <div>
            <p className="text-sm mb-2 text-gray-400 text-center">Powered by</p>
            <Image
              className="relative "
              src="/metabolite-full.png"
              alt="Metabolite logo"
              width={200}
              height={200}
              quality={100}
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
