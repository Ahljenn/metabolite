import { RadioGroup } from '@headlessui/react';

export type RadioBasic = {
  name: string;
  desc: string;
};

export interface RadioProps {
  items: RadioBasic[];
  label?: string;
  setSelection: React.Dispatch<React.SetStateAction<RadioBasic>>;
}

export function Radio({ items, setSelection, label }: RadioProps) {
  return (
    <div className="w-full px-4 py-5">
      <div className="mx-auto w-full max-w-md lg:max-w-xl">
        <RadioGroup
          onChange={(e: any) => {
            setSelection(e);
          }}
        >
          <RadioGroup.Label className="sr-only">{label}</RadioGroup.Label>
          <p className="mb-2">{label}</p>
          <div className="space-y-5">
            {items.map((current: RadioBasic) => (
              <RadioGroup.Option
                key={current.name}
                value={current}
                className={({ active, checked }) => `${active ? 'ring-2  ring-green-400' : ''}
                ${checked ? 'bg-emerald-700 bg-opacity-75 text-white' : 'bg-white'}
                  relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`}
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
