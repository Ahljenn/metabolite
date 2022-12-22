import Head from 'next/head';
import BmrCalculator from '../../components/features/BmrCalculator';

const BasalMetabolicRate: React.FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>BMR | Metabolite</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="flex flex-col items-center mt-5 ">
        <h2 className="font-bold text-md sm:text-2xl">What is Basal Metabolic Rate?</h2>
        <p className="text-center w-1/2 2xl:w-[50rem]">
          Ultimately, weight loss and weight gain is a matter of calories in vs. calories out. Your
          Basal Metabolic Rate (BMR) is the amount of calories your body will burn for basic (basal)
          life-sustaining function. Each person&apos;s BMR varies as it depends on factors such as
          age, weight, height, gender, and activity levels.
        </p>
        <p className="mt-10">
          For more information about <i>BMR</i>, read it{' '}
          <a
            href="https://www.garnethealth.org/news/basal-metabolic-rate-calculator#:~:text=BMR%20Definition%3A%20Your%20Basal%20Metabolic,stayed%20in%20bed%20all%20day."
            rel="noopener noreferrer"
            target="_blank"
            className=" text-primary"
          >
            here
          </a>
        </p>
      </section>

      <BmrCalculator />
    </>
  );
};

export default BasalMetabolicRate;
