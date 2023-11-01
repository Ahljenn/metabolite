import { Metadata } from 'next';
import StrengthCards from './StrengthCards';

export const metadata: Metadata = {
  title: 'Strength Standards',
};

const StrengthStandards = () => {
  return (
    <section
      className={`flex flex-col items-center  justify-between 
p-12`}
    >
      <div className=" py-8 flex flex-col sm:items-left gap-5 justify-center">
        <div>
          <h2 className="text-3xl font-bold">Strength Level Standards</h2>
        </div>
        <div className="lead-xl font-light  max-w-4xl text-lg flex flex-col gap-5">
          <p className="opacity-75">
            Strength level standards provide a benchmark to evaluate your performance in key
            weightlifting exercises relative to your body weight. These standards are a valuable
            tool to assess your progress and set realistic goals on your fitness journey.
          </p>
          <h3 className="text-xl font-bold">How are Strength Level Standards Calculated?</h3>
          <p className="opacity-75">
            Our strength standards are formulated using a comprehensive collection of weightlifting
            data gathered from reputable online sources. This expansive dataset includes millions of
            recorded lifts performed by individuals with diverse levels of experience and
            backgrounds. Through meticulous analysis of this rich dataset, we&apos;ve established
            robust performance benchmarks tailored to various levels of proficiency.
          </p>
        </div>
        <StrengthCards />
      </div>
    </section>
  );
};

export default StrengthStandards;
