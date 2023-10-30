import UnderConstruction from '@/app/components/ui/UnderConstruction';
import { Metadata } from 'next';
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
        <div className="lead-xl font-light opacity-75 max-w-4xl text-lg flex flex-col gap-5">
          <p>
            Strength level standards provide a benchmark to evaluate your performance in key
            weightlifting exercises relative to your body weight. These standards are a valuable
            tool to assess your progress and set realistic goals on your fitness journey.
          </p>
          <h3 className="text-xl font-bold opacity-100">
            How are Strength Level Standards Calculated?
          </h3>
          <p>
            Our strength standards are formulated using a comprehensive collection of weightlifting
            data gathered from reputable online sources. This expansive dataset includes millions of
            recorded lifts performed by individuals with diverse levels of experience and
            backgrounds. Through meticulous analysis of this rich dataset, we&apos;ve established
            robust performance benchmarks tailored to various levels of proficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrengthStandards;
