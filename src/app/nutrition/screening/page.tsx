'use client';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';

interface MethodProps {
  method: string | null;
  setMethod: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Screening() {
  const [method, setMethod] = useState<string | null>(null);
  console.log(method);
  return (
    <>
      <h1 className="text-4xl lg:text-6xl font-bold text-center mt-5">Metabolite Nutrition</h1>
      <p className="mt-5">Prior to embarking on your journey...</p>
      <PreScreening method={method} setMethod={setMethod} />
    </>
  );
}

// const methods = [
//   {
//     name: 'Quick',
//     ram: '12GB',
//     cpus: '6 CPUs',
//     disk: '160 GB SSD disk',
//   },
//   {
//     name: 'Complete',
//     ram: '16GB',
//     cpus: '8 CPUs',
//     disk: '512 GB SSD disk',
//   },
//   {
//     name: 'Enterprise',
//     ram: '32GB',
//     cpus: '12 CPUs',
//     disk: '1024 GB SSD disk',
//   },
// ];

const methods = [
  {
    name: 'Quickstart',
    desc: 'Get started on your health journey with a fast and efficient pre-screening assessment designed to provide immediate insights.',
  },
  {
    name: 'Complete',
    desc: 'Dive deeper into your health assessment with a comprehensive screening, uncovering valuable insights for a holistic understanding of your well-being.',
  },
];

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

function CheckIcon(props) {
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
