import React from 'react';
import Router from 'next/router';
import Image from 'next/image';

const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-metablack py-2">
        <div className="flex flex-col sm:flex-row justify-between mx-5 items-center">
          <div className="hidden sm:flex items-center sm:gap-2">
            <Image src="/logo.png" width={40} height={40} alt="logo" />
            {/* <picture>
              <img className="w-[2rem]" src="./logo.png" alt="logo" />
            </picture> */}
            <h1 className="text-secondary text-xl sm:visible">Metabolite</h1>
          </div>
          <div>
            <button
              className="text-gray-400 px-2 hover:text-white transition duration-300"
              onClick={(): void => {
                Router.push('/');
              }}
            >
              Home
            </button>
            <button className="text-gray-400 px-2 hover:text-white transition duration-300">
              Disclaimer
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
