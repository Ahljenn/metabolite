import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface DialogInfo {
  title: string;
  description: string;
  modalView: boolean;
  setModalView: any;
}

const Converter: React.FC<DialogInfo> = ({
  title,
  description,
  modalView,
  setModalView,
}: DialogInfo): JSX.Element => {
  const handleModalClick = (): void => {
    setModalView(!modalView);
  };

  const [feet, setFeet] = useState<string>('0');
  const [inches, setInches] = useState<string>('0');
  const [centimeters, setCentimeters] = useState<Number>(0);

  const onHeightChange = (cm: number): void => {
    const inches = cm / 2.54;
    setFeet(String(Math.floor(inches / 12)));
    setInches(String(Math.round(inches % 12)));
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>

                  <section className="text-sm mt-2">
                    <div>
                      <p className="mb-1 font-bold">Height</p>
                      <span className="flex">
                        <input
                          type="number"
                          placeholder="Centimeters"
                          onChange={(e: any) => {
                            onHeightChange(e.target.value);
                          }}
                        ></input>
                        <input
                          type="number"
                          placeholder={
                            feet !== '0' || inches !== '0'
                              ? `${feet} ft. ${inches} in.`
                              : 'Feet and inches'
                          }
                          disabled
                        ></input>
                      </span>
                    </div>

                    <div>
                      <p className="mb-1 mt-2 font-bold">Weight</p>
                      <span className="flex">
                        <input type="number" placeholder="Kilograms"></input>
                        <input type="number" placeholder="Pounds" disabled></input>
                      </span>
                    </div>
                  </section>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="mt-5 w-[10rem] py-2 text-sm bg-secondary text-black rounded-xl shadow-xl hover:bg-tertiary transition duration-300"
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

export default Converter;
