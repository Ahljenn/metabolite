import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface DialogInfo {
  title?: string;
  description?: string;
  modalView: boolean;
  setModalView: any;
}

const Modal: React.FC<DialogInfo> = ({
  title,
  description,
  modalView,
  setModalView,
}: DialogInfo): JSX.Element => {
  const handleModalClick = (): void => {
    setModalView(!modalView);
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
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6">
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm opacity-50">{description}</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="mt-5 w-[8rem] py-2 text-sm rounded-xl shadow-xl opacity-50 hover:opacity-100 transition duration-300 border"
                      onClick={handleModalClick}
                    >
                      Done
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

export default Modal;
