import { useState } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import Modal from './Modal';

const Header: React.FC = (): JSX.Element => {
  const [modalView, setModalView] = useState<boolean>(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-metablack py-2">
        <div className="flex flex-col sm:flex-row justify-between mx-5 items-center cursor-pointer">
          <div
            className="hidden sm:flex items-center content-center sm:gap-2"
            onClick={(): void => {
              Router.push('/');
            }}
          >
            <Image src="/logo.png" width={40} height={40} alt="logo" />
            <h1 className="text-secondary text-xl sm:visible">Metabolite</h1>
          </div>

          <div>
            <button
              className="text-gray-400 px-2 hover:text-white transition duration-300 text-sm sm:text-base"
              onClick={(): void => {
                Router.push('/');
              }}
            >
              Home
            </button>
            <button
              className="text-gray-400 px-2 hover:text-white transition duration-300 text-sm sm:text-base"
              onClick={() => setModalView(true)}
            >
              Disclaimer
            </button>
            <button
              className="text-gray-400 px-2 hover:text-white transition duration-300 text-sm sm:text-base"
              onClick={(): void => {
                Router.push('/sources');
              }}
            >
              Sources
            </button>
          </div>
        </div>
      </header>

      <Modal
        title="Disclaimer"
        description="Metabolite aims to assist others in guiding them in their diets. We are not health
          professionals. All data was drawn from various research articles - and we do not claim
          100% certainty in our data. Our aim is to provide the articles gathered easily accessible
          and comprehensible by condensing nutrition info. Users are free to read our cited works
          themselves to form their own interpretations."
        modalView={modalView}
        setModalView={setModalView}
      />
    </>
  );
};

export default Header;
