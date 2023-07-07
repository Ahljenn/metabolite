'use client';

import { Radio } from './../../components/ui/Radio';
import { useState } from 'react';
import { RadioBasic } from './../../components/ui/Radio';

const methods: RadioBasic[] = [
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

const activityLevels: RadioBasic[] = [
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

const workExertions: RadioBasic[] = [
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

export default function Screening() {
  // Form fields //
  // -- Prescreening:
  const [method, setMethod] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // -- Body metrics:
  const [gender, setGender] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // -- Lifestyle factors:
  const [activityLevel, setActivityLevel] = useState<RadioBasic>({ name: 'None', desc: 'None' });
  const [workExertion, setWorkExertion] = useState<RadioBasic>({ name: 'None', desc: 'None' });
  // Page states //
  const [stage, setStage] = useState<number>(1);
  const [isComplete, setIsComplete] = useState<boolean>(true);

  function nextStage() {
    if (stage < 5) {
      setStage((i) => i + 1);
      // setIsComplete(false);
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
          <p className="mt-5">
            Prior to embarking on your journey, select one of the options below
          </p>
          <Radio items={methods} setSelection={setMethod} />
        </>
      );
      break;
    case 2:
      content = (
        <>
          <p className="mt-5 font-semibold">Body Metrics</p>
          <Radio items={genders} setSelection={setGender} label={'Gender'}></Radio>
          <BodyMetrics />
        </>
      );
      break;
    case 3:
      content = (
        <>
          <p className="mt-5 font-semibold">Lifestyle Factors</p>
          <Radio items={activityLevels} setSelection={setActivityLevel} label={'Activity Levels'} />
          <Radio items={workExertions} setSelection={setWorkExertion} label={'Work exertion'} />
        </>
      );
      break;
    case 4:
      content = (
        <>
          <p className="mt-5 font-semibold">Considerations</p>
          <p>Dietary Concerns</p>
          <p>Dietary Preferences</p>
        </>
      );
      break;
    case 5:
      content = (
        <>
          <p className="mt-5 font-semibold">Budget</p>
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
      <ProgressBar stage={stage} method={method} />
      <ScreeningPageSelector
        nextStage={nextStage}
        prevStage={prevStage}
        stage={stage}
        isComplete={isComplete}
      />
      {content}
    </>
  );
}

function BodyMetrics() {
  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md lg:max-w-xl">
        <div>
          <label htmlFor="age">
            <div className="flex flex-row justify-between mb-2">
              <p className="">Age</p>
              <p className="text-gray-400 text-sm">Years</p>
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

        <div>
          <label htmlFor="height">
            <div className="flex flex-row justify-between mb-2 mt-5">
              <p className="">Height</p>
              <p className="text-gray-400 text-sm">Centimeters</p>
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

        <div>
          <label htmlFor="weight">
            <div className="flex flex-row justify-between mb-2 mt-5">
              <p className="">Weight</p>
              <p className="text-gray-400 text-sm">Kilograms</p>
            </div>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="height"
            type="number"
            min={1}
            max={600}
            // value={null}
            placeholder="weight"
          />
        </div>
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
