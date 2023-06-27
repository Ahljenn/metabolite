'use client';
import { Transition } from '@headlessui/react';

interface WrapperProps {
  children: any;
}

function FadeInWrapper({ children }: WrapperProps) {
  return (
    <Transition
      show={true}
      appear={true}
      enter="transition-opacity duration-250"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-250"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
}

export default FadeInWrapper;
