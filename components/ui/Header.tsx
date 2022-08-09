import React from 'react';
import Router from 'next/router';

const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-metablack py-2">
        <div className="flex flex-col sm:flex-row justify-between mx-5 items-center">
          <div className="flex items-center gap-5">
            <picture>
              <img className="w-[2.5rem]" src="./logo.png" alt="logo" />
            </picture>
            <h1 className="text-white text-xl">Metabolite</h1>
          </div>
          <button
            className="text-white bg-black py-2 px-5 rounded-xl hover:bg-white hover:text-black transition duration-300"
            onClick={(): void => {
              Router.push('/');
            }}
          >
            Home
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
