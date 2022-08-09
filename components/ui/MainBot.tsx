import React from 'react';
import Router from 'next/router';

const MainBot: React.FC = (): JSX.Element => {
  return (
    <>
      <section>
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row py-10 sm:px-[15rem] gap-5 justify-center items-center border w-[15rem] sm:w-[20rem] rounded-xl absolute mt-[-4rem] bg-white shadow-xl">
            <h1 className="font-bold text-lg whitespace-nowrap">Basal Metabolic Rate</h1>
            <div>
              <button
                className="px-10 py-2 text-lg bg-secondary text-white rounded-xl shadow-xl hover:bg-metablack transition duration-300"
                onClick={(): void => {
                  Router.push('/bmr');
                }}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>

        {/* <div className="shadow-md h-10" /> */}
      </section>
    </>
  );
};

export default MainBot;
