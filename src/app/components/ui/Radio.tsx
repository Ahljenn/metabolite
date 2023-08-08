import { RadioGroup } from '@headlessui/react';

export type RadioBasic = {
  name: string;
  desc: string;
};

export interface RadioProps {
  items: RadioBasic[];
  setSelection: React.Dispatch<React.SetStateAction<RadioBasic>>;
  label?: string;
  existingSelection?: RadioBasic;
  isRow?: boolean;
}

const Radio = ({ items, setSelection, label, existingSelection, isRow }: RadioProps) => {
  return (
    <div className="w-full px-4 sm:px-2 py-5">
      <div className="mx-auto w-full max-w-md lg:max-w-xl">
        <RadioGroup onChange={(e: any) => setSelection(e)}>
          <RadioGroup.Label className="sr-only">{label}</RadioGroup.Label>
          <p className="mb-2 text-sm">{label}</p>
          <div
            className={isRow ? `grid grid-cols-1 gap-5` : `grid grid-cols-1 sm:grid-cols-2 gap-5 `}
          >
            {items.map((current: RadioBasic) => (
              <RadioGroup.Option
                key={current.name}
                value={current}
                className={({ active, checked }) => `
          ${
            existingSelection?.name === current.name || checked
              ? 'border-metaSecondary hover:border-metaSecondary text-white scale-105'
              : 'border-neutral-800 hover:border-neutral-700'
          }
          hover:scale-105 bg-neutral-900 hover:bg-neutral-800 relative border flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none transition duration-300`}
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-bold ${
                              existingSelection?.name === current.name || checked
                                ? 'text-metaAccent'
                                : 'text-white'
                            }`}
                          >
                            {current.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              existingSelection?.name === current.name || checked
                                ? 'text-white'
                                : 'opacity-50'
                            }`}
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
};

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
export default Radio;
