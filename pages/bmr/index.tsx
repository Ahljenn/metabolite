import React from 'react';
import Head from 'next/head';

const BasalMetabolicRate: React.FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Metabolite | BMR</title>
        <link rel="icon" href="/mbe-favicon.png" />
      </Head>

      <div className="flex flex-col items-center mt-5">
        <h1 className="font-bold text-lg sm:text-2xl">What is Basal Metabolic Rate?</h1>
        <p className="text-center w-1/2 sm:w-[50rem]">
          Ultimately, weight loss and weight gain is a matter of calories in vs. calories out. Your
          Basal Metabolic Rate (BMR) is the amount of calories your body will burn for basic (basal)
          life-sustaining function. Each person&apos;s BMR varies as it depends on factors such as
          age, weight, height, gender, and activity levels.
        </p>
        <p className="mt-2 text-center w-1/2 sm:w-[50rem] text-lg">
          Read more about it{' '}
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
    </>
  );
};

export default BasalMetabolicRate;
