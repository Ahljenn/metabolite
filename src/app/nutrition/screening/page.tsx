'use client';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';

interface MethodProps {
  method: Method;
  setMethod: React.Dispatch<React.SetStateAction<Method>>;
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

type Method = {
  name: string;
  desc: string;
};

const methods: Method[] = [
  {
    name: 'Quickstart',
    desc: 'Get started on your health journey with a fast and efficient pre-screening assessment designed to provide immediate insights.',
  },
  {
    name: 'Complete',
    desc: 'Dive deeper into your health assessment with a comprehensive screening, uncovering valuable insights for a holistic understanding of your well-being.',
  },
];

export default function Screening() {
  const [method, setMethod] = useState<Method>({ name: 'None', desc: 'None' });
  const [stage, setStage] = useState<number>(1);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  function nextStage() {
    if (stage < 5) {
      setStage((i) => i + 1);
      setIsComplete(false);
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
          <p className="mt-5">Prior to embarking on your journey...</p>
          <PreScreening method={method} setMethod={setMethod} setIsComplete={setIsComplete} />
        </>
      );
      break;
    case 2:
      content = (
        <>
          <p className="mt-5">Body Metrics</p>
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
      {content}
      <ScreeningPageSelector
        nextStage={nextStage}
        prevStage={prevStage}
        stage={stage}
        isComplete={isComplete}
      />
    </>
  );
}

function PreScreening({ method, setMethod, setIsComplete }: MethodProps) {
  return (
    <div className="w-full px-4 py-5">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup
          value={method}
          onChange={(e) => {
            setMethod(e);
            setIsComplete(true);
          }}
        >
          <RadioGroup.Label className="sr-only">Method Type</RadioGroup.Label>
          <div className="space-y-4">
            {methods.map((current) => (
              <RadioGroup.Option
                key={current.name}
                value={current}
                className={({ active, checked }) =>
                  `${active ? 'ring-2  ring-green-400' : ''}
                ${checked ? 'bg-emerald-700 bg-opacity-75 text-white' : 'bg-white'}
                  relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}
                          >
                            {current.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'}`}
                          >
                            <span>{current.desc}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
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

function ProgressBar({ stage, method }: { stage: number; method: Method }) {
  return (
    <div className="w-1/2">
      <div className="mb-1 text-base font-medium text-green-300">Progress</div>
      <div className="w-full rounded-full h-2.5 bg-gray-700">
        <div
          className="h-2.5 rounded-full bg-emerald-700 transition-all duration-700"
          style={{ width: `${method?.name === 'Complete' ? stage * 10 : stage * 5}%` }}
        ></div>
      </div>
      <p className="mt-2 opacity-50 text-center">
        {stage} of {method?.name === 'Complete' ? 10 : 5}
      </p>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
