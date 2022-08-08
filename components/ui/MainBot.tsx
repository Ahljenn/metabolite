import React from 'react';

const MainBot: React.FC = (): JSX.Element => {
  return (
    <>
      <section>
        <div className="flex justify-center">
          <div className="flex py-10 px-[15rem] gap-5 justify-center items-center border w-[20rem] rounded-xl absolute mt-[-3rem] bg-white shadow-xl">
            <h1 className="font-bold text-lg whitespace-nowrap">Basal Metabolic Rate</h1>
            <div>
              <button className="px-8 py-2 text-lg bg-secondary text-white rounded-xl shadow-xl hover:bg-metablack transition duration-300">
                Calculate
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBot;
