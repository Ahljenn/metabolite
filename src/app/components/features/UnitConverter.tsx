import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface DialogInfo {
  modalView: boolean;
  setModalView: any;
}

const UnitConverter: React.FC<DialogInfo> = ({
  modalView,
  setModalView,
}: DialogInfo): JSX.Element => {
  const handleModalClick = (): void => {
    setModalView(!modalView);
  };

  const [feet, setFeet] = useState<string>('0');
  const [inches, setInches] = useState<string>('0');
  const [pounds, setPounds] = useState<string>('0');

  const [centimeters, setCentimeters] = useState<string>('0');
  const [kilograms, setKilograms] = useState<string>('0');

  // Imperical System
  const onFeetChangeImperial = (value: any) => {
    const feetValue = parseInt(value, 10);
    if (!isNaN(feetValue)) {
      setFeet(String(feetValue));
    }
    if (feet && inches) {
      onHeightChangeImperial(feet, inches);
    }
  };

  const onInchesChangeImperial = (value: any) => {
    const inchesValue = parseInt(value, 10);
    if (!isNaN(inchesValue)) {
      setInches(String(inchesValue));
    }
    if (feet && inches) {
      onHeightChangeImperial(feet, inches);
    }
  };

  const onHeightChangeImperial = (feet: string, inches: string): void => {
    const cm = parseInt(feet, 10) * 30.48 + parseInt(inches, 10) * 2.54;
    setCentimeters(String(Math.round(cm)));
  };

  const onWeightChangeImperial = (pounds: number): void => {
    const kilo = pounds / 2.2046;
    setKilograms(String(Math.round(kilo)));
  };

  // American System

  const onHeightChange = (cm: number): void => {
    const inches = cm / 2.54;
    setFeet(String(Math.floor(inches / 12)));
    setInches(String(Math.round(inches % 12)));
  };

  const onWeightChange = (kilo: number): void => {
    setPounds(String(Math.round(kilo * 2.2046)));
  };

  return (
    <>
      <Transition appear show={modalView} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleModalClick}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-lg" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-white">
                    Unit Converter
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm opacity-75">
                      Metabolite utilizes kilogram, and centimeters to calculate your basal
                      metabolic rate.
                    </p>
                  </div>

                  <section className="text-sm mt-2">
                    <div>
                      <p className="mb-1">Height</p>
                      <span className="flex">
                        <input
                          className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline opacity-50"
                          type="number"
                          placeholder={feet !== '0' ? `${feet} ft.` : 'Feet'}
                          onChange={(e: any) => {
                            onFeetChangeImperial(e.target.value);
                          }}
                        />

                        <input
                          className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline opacity-50"
                          type="number"
                          placeholder={inches !== '0' ? `${inches} in.` : 'Inches'}
                          onChange={(e: any) => {
                            onInchesChangeImperial(e.target.value);
                          }}
                        />
                        <input
                          className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
                          type="number"
                          placeholder={centimeters !== '0' ? `${centimeters} cm.` : 'Centimeters'}
                          onChange={(e: any) => {
                            onHeightChange(e.target.value);
                          }}
                        />
                      </span>
                    </div>

                    <div>
                      <p className="mb-1 mt-2 ">Weight</p>
                      <span className="flex">
                        <input
                          className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline opacity-50"
                          type="number"
                          placeholder={pounds !== '0' ? `${pounds} lbs.` : 'Pounds'}
                          onChange={(e: any) => {
                            onWeightChangeImperial(e.target.value);
                          }}
                        />
                        <input
                          className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
                          type="number"
                          placeholder={kilograms !== '0' ? `${kilograms} kgs.` : 'Kilogram'}
                          onChange={(e: any) => {
                            onWeightChange(e.target.value);
                          }}
                        />
                      </span>
                    </div>
                  </section>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="mt-5 w-[8rem] py-2 text-sm rounded-xl shadow-xl border-metaSecondary hover:opacity-50 transition duration-300 border"
                      onClick={handleModalClick}
                    >
                      All done
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UnitConverter;
