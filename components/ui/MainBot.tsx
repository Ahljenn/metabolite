import React from 'react';

const MainBot: React.FC = (): JSX.Element => {
  return (
    <>
      <section>
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row py-10 sm:px-[15rem] gap-5 justify-center items-center border w-[15rem] sm:w-[20rem] rounded-xl absolute mt-[-4rem] bg-white shadow-xl">
            <h1 className="font-bold text-lg whitespace-nowrap">Basal Metabolic Rate</h1>
            <div>
              <button className="px-10 py-2 text-lg bg-secondary text-white rounded-xl shadow-xl hover:bg-metablack transition duration-300">
                Calculate
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-[10rem] sm:mt-[8rem]">
          <h1 className="font-bold text-2xl">What is Basal Metabolic Rate?</h1>
          <p>
            Ultimately, weight loss and weight gain is a matter of calories in vs. calories out.
            Your Basal Metabolic Rate (BMR) is the amount of calories your body will burn for basic
            (basal) life-sustaining function. Read more about it{' '}
            <a
              href="https://www.garnethealth.org/news/basal-metabolic-rate-calculator#:~:text=BMR%20Definition%3A%20Your%20Basal%20Metabolic,stayed%20in%20bed%20all%20day."
              rel="noopener noreferrer"
              target="_blank"
              className="font-semibold underline text-primary"
            >
              here
            </a>
          </p>
        </div>

        {/* <div className="shadow-md h-10" /> */}
      </section>
    </>
  );
};

export default MainBot;
