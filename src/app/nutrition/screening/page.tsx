'use client';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';

interface MethodProps {
  method: Method;
  setMethod: React.Dispatch<React.SetStateAction<Method>>;
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
  let content;

  console.log(method);

  switch (stage) {
    case 1:
      content = (
        <>
          <p className="mt-5">Prior to embarking on your journey...</p>
          <PreScreening method={method} setMethod={setMethod} />
          {method.name !== 'None' ? (
            <button
              className="group mt-5 border-green-300 bg-emerald-700/30 hover:border-green-200 hover:bg-emerald-600/30 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
              onClick={nextStage}
            >
              Continue{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          ) : (
            <></>
          )}
        </>
      );
      break;
    case 2:
      content = <div>Disclaimer</div>;
      break;
    default:
      content = <div>Default content</div>;
      break;
  }

  function nextStage() {
    setStage((i) => i + 1);
  }

  function prevStage() {
    setStage((i) => i - 1);
  }

  return (
    <>
      <h1 className="text-4xl lg:text-6xl font-bold text-center mt-5">Metabolite Nutrition</h1>
      <p className="mt-5 opacity-50">
        {stage} of {method?.name === 'Complete' ? 20 : 10}
      </p>
      {content}
    </>
  );
}

function PreScreening({ method, setMethod }: MethodProps) {
  return (
    <div className="w-full px-4 py-5">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={method} onChange={setMethod}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
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

function CheckIcon(props: string) {
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
