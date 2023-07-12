'use client';

import { Radio } from './../../components/ui/Radio';
import { useState } from 'react';
import { RadioBasic } from './../../components/ui/Radio';
import Lottie from 'lottie-react';
import LoadingAnimation from '#/loading.json';

const methodOptions: RadioBasic[] = [
  {
    name: 'Quickstart',
    desc: 'Get started on your health journey with a fast and efficient pre-screening assessment designed to provide immediate insights.',
  },
  {
    name: 'Complete',
    desc: 'Dive deeper into your health assessment with a comprehensive screening, uncovering valuable insights for a holistic understanding of your well-being.',
  },
];

const genders: RadioBasic[] = [
  {
    name: 'Female',
    desc: 'Select if you identify as female gender.',
  },
  {
    name: 'Male',
    desc: 'Select if you identify as male gender.',
  },
];

const activityOptions: RadioBasic[] = [
  {
    name: 'Sedentary',
    desc: 'Limited physical activity or mostly sedentary lifestyle.',
  },
  {
    name: 'Lightly active',
    desc: 'Light physical activity or regular exercise a few times per week.',
  },
  {
    name: 'Active',
    desc: 'Moderate physical activity or regular exercise most days of the week.',
  },
  {
    name: 'Very active',
    desc: 'High level of physical activity or intense exercise on a daily basis.',
  },
];

const workOptions: RadioBasic[] = [
  {
    name: 'Not applicable',
    desc: 'This question is not applicable for you to the current situation.',
  },
  {
    name: 'Work from home',
    desc: 'Working remotely or from home without a fixed office location.',
  },
  {
    name: 'Office job',
    desc: 'Office environment with sedentary tasks and minimal physical exertion.',
  },
  {
    name: 'Active labor',
    desc: 'Engaged in physically demanding work or job with significant physical activity.',
  },
  {
    name: 'Very active labor',
    desc: 'High-intensity physical labor or job requiring extensive physical exertion.',
  },
];

const dietOptions: RadioBasic[] = [
  {
    name: 'Not applicable',
    desc: 'Select this option if you do not have any dietary preference.',
  },
  {
    name: 'Ketogenic Diet',
    desc: 'A low-carb, high-fat diet that focuses on reducing carbohydrate intake and increasing fat consumption.',
  },
  {
    name: 'Low Carb Diet',
    desc: 'A diet that restricts the consumption of carbohydrates, typically focusing on reducing intake of refined sugars and starches.',
  },
  {
    name: 'Vegan Diet',
    desc: 'A plant-based diet that excludes all animal products, including meat, dairy, eggs, and honey.',
  },
  {
    name: 'Vegetarian Diet',
    desc: 'A diet that excludes meat and seafood but allows for the consumption of other animal-derived products, such as dairy and eggs.',
  },
  {
    name: 'Paleo Diet',
    desc: 'An eating pattern that emphasizes whole foods and avoids processed foods and grains to mimic the eating patterns of our ancestors from the Paleolithic era.',
  },
  {
    name: 'Whole30',
    desc: 'A 30-day dietary program that eliminates certain food groups, such as grains, dairy, legumes, and added sugars, to reset eating habits and improve overall health.',
  },
];

const budgetOptions: RadioBasic[] = [
  {
    name: '$ (Economical)',
    desc: 'I have a very tight budget and can spend a minimal amount on my weekly diet.',
  },
  {
    name: '$$ (Affordable)',
    desc: 'I have a limited budget and can allocate a modest amount for my weekly diet.',
  },
  {
    name: '$$$ (Moderate)',
    desc: 'I have a moderate budget and can spend a reasonable amount on my weekly diet.',
  },
  {
    name: '$$$$ (Generous)',
    desc: 'I have a generous budget and can invest a substantial amount in high-quality dietary options.',
  },
  {
    name: '$$$$$ (Flexible)',
    desc: 'I have a flexible budget and can afford premium and diverse dietary options.',
  },
];

export default function Screening() {
  // Form fields //
  // -- Prescreening:
  const [method, setMethod] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // -- Body metrics:
  const [gender, setGender] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // -- Lifestyle factors:
  const [activityLevel, setActivityLevel] = useState<RadioBasic>({ name: 'None', desc: 'None' });
  const [workExertion, setWorkExertion] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // -- Considerations
  const [dietPref, setDietPref] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // -- Budgets
  const [budget, setBudget] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // Page states //
  const [stage, setStage] = useState<number>(1);
  const [isComplete, setIsComplete] = useState<boolean>(true);
  const [isScreeningComplete, setIsScreeningComplete] = useState<boolean>(false);

  function nextStage() {
    if (stage < 5) {
      setStage((i) => i + 1);
      // setIsComplete(false);
    } else {
      setIsScreeningComplete(true);
    }
  }

  function prevStage() {
    if (stage > 1) {
      setStage((i) => i - 1);
      setIsComplete(true);
    }
  }

  let content;
  switch (stage) {
    case 1:
      content = (
        <>
          <p className="mt-5 mx-5 text-center ">
            Prior to embarking on your journey, select one of the options below
          </p>

          <Radio items={methodOptions} setSelection={setMethod} />
        </>
      );
      break;
    case 2:
      content = (
        <>
          <p className="mt-5 font-semibold">Body Metrics</p>
          <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl">
            <p className="mt-5 mx-5 text-center sm:text-left">
              Gender, height, weight, and age play a crucial role in calculating your{' '}
              <b className="text-green-300">Basal Metabolic Rate</b> (BMR). BMR represents the
              number of calories your body needs to function at rest, providing valuable insights
              into your individual energy expenditure.
            </p>
            <p className="mt-5 mx-5 text-center sm:text-left">
              By accurately determining your BMR, <b className="text-metagreen">Metabolite</b> can
              better understand your body&apos;s specific needs and customize a nutrition plan that
              supports your health and well-being goals.
            </p>
          </div>
          <Radio items={genders} setSelection={setGender} label={'Gender'}></Radio>
          <BodyMetrics />
        </>
      );
      break;
    case 3:
      content = (
        <>
          <p className="mt-5 font-semibold">Lifestyle Factors</p>
          <Radio
            items={activityOptions}
            setSelection={setActivityLevel}
            label={'Activity Levels'}
          />
          <Radio items={workOptions} setSelection={setWorkExertion} label={'Work exertion'} />
        </>
      );
      break;
    case 4:
      content = (
        <>
          <p className="mt-5 font-semibold">Considerations</p>
          <DietaryConcerns />
          <Radio items={dietOptions} setSelection={setDietPref} />
        </>
      );
      break;
    case 5:
      content = (
        <>
          <p className="mt-5 font-semibold">Budget</p>
          <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl">
            <p className="mt-5 mx-5 text-center sm:text-left">
              What is your <i>estimated weekly budget</i> for your diet? This information will
              enable <b className="text-metagreen">Metabolite</b> to provide personalized
              recommendations that align with both your financial and health goals, ensuring a
              well-balanced approach to your nutrition journey.
            </p>
          </div>
          <Radio items={budgetOptions} setSelection={setBudget} />
        </>
      );
      break;

    default:
      content = <div>Default content</div>;
      break;
  }

  return (
    <>
      <h1 className="text-4xl lg:text-6xl font-bold text-center mt-5">Metabolite Nutrition</h1>
      {!isScreeningComplete ? (
        <>
          <ProgressBar stage={stage} method={method} />
          <ScreeningPageSelector
            nextStage={nextStage}
            prevStage={prevStage}
            stage={stage}
            isComplete={isComplete}
          />
          {content}
        </>
      ) : (
        <>
          {' '}
          <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl">
            <p className="mt-5 mx-5 text-center">
              You&apos;re all set! One moment as we let <b className="text-metagreen">Metabolite</b>{' '}
              work its magic and unveil the top three <b className="text-green-300">personalized</b>{' '}
              diets tailored just for you. Your health journey is about to take off!
            </p>
          </div>
          <div className="bg-gray-800 rounded-full mt-20 mx-20">
            <Lottie animationData={LoadingAnimation} loop={true} />
          </div>
        </>
      )}
    </>
  );
}

function BodyMetrics() {
  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md lg:max-w-xl">
        <div className="flex justify-between mt-5 gap-5 flex-col items-center md:flex-row">
          <div className="w-1/2">
            <label htmlFor="height">
              <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
                <p className="">Height</p>
                <p className="text-gray-400">cm.</p>
              </div>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="height"
              type="number"
              min={1}
              max={400}
              // value={null}
              placeholder="Height"
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="weight">
              <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
                <p className="">Weight</p>
                <p className="text-gray-400">kg.</p>
              </div>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="height"
              type="number"
              min={1}
              max={600}
              // value={null}
              placeholder="Weight"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-2 w-1/2 md:pr-2">
            <label htmlFor="age">
              <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
                <p className="">Age</p>
                <p className="text-gray-400">Years</p>
              </div>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="number"
              min={1}
              max={150}
              // value={null}
              placeholder="Age"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DietaryConcerns() {
  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md lg:max-w-xl ">
        <p className="my-2 font-bold">Dietary Concerns</p>
        <p>
          Are there any concerns related to your diet that could assist{' '}
          <b className="text-metagreen">Metabolite</b> in recommending a suitable dietary plan, such
          as <b className="text-green-300">allergies</b> or{' '}
          <b className="text-green-300">sensitivities</b> to certain foods?{' '}
        </p>
        <p>Leave blank if this does not apply to you.</p>
        <div className="mt-5">
          <label htmlFor="allergies">
            <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
              <p className="">Allergies</p>
              <p className="text-gray-400">Optional</p>
            </div>
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="allergies"
            rows={4}
            // value={null}
            placeholder="Peanut allergy, Soy allergy, shellfish allergy, etc."
          />
        </div>
        <p className="mt-4 mb-2 font-bold">Dietary Preferences</p>
        <p>
          At the moment, do you have any specific dietary preferences? If not, please select{' '}
          <b className="text-green-300">Not Applicable</b>. Don&apos;t worry, Metabolite will still
          recommend the best diet for you!
        </p>
      </div>
    </div>
  );
}

function ScreeningPageSelector({
  prevStage,
  nextStage,
  stage,
  isComplete,
}: {
  prevStage: any;
  nextStage: any;
  stage: number;
  isComplete: boolean;
}) {
  return (
    <div className="flex flex-col md:gap-5 md:flex-row">
      <button
        className={`group mt-5  transition-all border rounded-lg py-2 px-4 whitespace-nowrap ${
          stage > 1
            ? 'border-red-300 bg-rose-700/30 hover:border-red-200 hover:bg-rose-600/30'
            : 'cursor-not-allowed bg-rose-700/10 hover:border-red-200 hover:bg-rose-800/30 opacity-50'
        }`}
        onClick={prevStage}
        disabled={stage === 1}
      >
        <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
          &lt;-
        </span>{' '}
        Previous
      </button>
      <button
        className={`group mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap ${
          isComplete
            ? 'border-green-300 bg-emerald-700/30 hover:border-green-200 hover:bg-emerald-600/30'
            : 'border-green-100 bg-emerald-700/10 hover:border-green-200 hover:bg-emerald-800/30 opacity-50'
        }`}
        onClick={nextStage}
        disabled={isComplete === false}
      >
        Continue{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </button>
    </div>
  );
}

function ProgressBar({ stage, method }: { stage: number; method: RadioBasic }) {
  return (
    <div className="mt-5 px-5 md:px-0 md:mx-auto w-full max-w-md lg:max-w-xl">
      <div className="mb-1 text-base font-medium text-green-300">Progress</div>
      <div className="w-full rounded-full h-2.5 bg-gray-700">
        <div
          className="h-2.5 rounded-full bg-emerald-700 transition-all duration-700"
          style={{ width: `${method?.name === 'Complete' ? stage * 5 : stage * 20}%` }}
        ></div>
      </div>
      <p className="mt-2 opacity-50 text-center">
        {stage} of {method?.name === 'Complete' ? 10 : 5}
      </p>
    </div>
  );
}
