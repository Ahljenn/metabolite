'use client';

import { Radio } from './../../components/ui/Radio';
import { useEffect, useState } from 'react';
import { RadioBasic } from './../../components/ui/Radio';
import Lottie from 'lottie-react';
import LoadingAnimation from '#/loading.json';

// Types
interface MetricSetters {
  setHeight: React.Dispatch<React.SetStateAction<number | null>>;
  setWeight: React.Dispatch<React.SetStateAction<number | null>>;
  setAge: React.Dispatch<React.SetStateAction<number | null>>;
}

interface MetricValues {
  height: number | null;
  weight: number | null;
  age: number | null;
}

interface BodyMetricsProps {
  metricSetters: MetricSetters;
  metricValues: MetricValues;
}

interface DietaryConcernsProps {
  allergies: string;
  setAllergies: React.Dispatch<React.SetStateAction<string>>;
}

// Constants
const methodOptions: RadioBasic[] = [
  {
    name: 'Quickstart',
    desc: 'Get started on your health journey with a fast and efficient pre-screening assessment designed to provide immediate insights.',
  },
  {
    name: 'Complete',
    desc: 'Dive deeper into your health assessment with a comprehensive screening, uncovering valuable insights for a holistic understanding of your well-being.',
  },
];

const genders: RadioBasic[] = [
  {
    name: 'Female',
    desc: 'Select if you identify as female gender.',
  },
  {
    name: 'Male',
    desc: 'Select if you identify as male gender.',
  },
];

const activityOptions: RadioBasic[] = [
  {
    name: 'Sedentary',
    desc: 'Limited physical activity or mostly sedentary lifestyle.',
  },
  {
    name: 'Lightly active',
    desc: 'Light physical activity or regular exercise a few times per week.',
  },
  {
    name: 'Active',
    desc: 'Moderate physical activity or regular exercise most days of the week.',
  },
  {
    name: 'Very active',
    desc: 'High level of physical activity or intense exercise on a daily basis.',
  },
];

const workOptions: RadioBasic[] = [
  {
    name: 'Not applicable',
    desc: 'This question is not applicable for you to the current situation.',
  },
  {
    name: 'Work from home',
    desc: 'Working remotely or from home without a fixed office location.',
  },
  {
    name: 'Office job',
    desc: 'Office environment with sedentary tasks and minimal physical exertion.',
  },
  {
    name: 'Active labor',
    desc: 'Engaged in physically demanding work or job with significant physical activity.',
  },
  {
    name: 'Very active labor',
    desc: 'High-intensity physical labor or job requiring extensive physical exertion.',
  },
];

const dietOptions: RadioBasic[] = [
  {
    name: 'Not applicable',
    desc: 'Select this option if you do not have any dietary preference.',
  },
  {
    name: 'Ketogenic Diet',
    desc: 'A low-carb, high-fat diet that focuses on reducing carbohydrate intake and increasing fat consumption.',
  },
  {
    name: 'Low Carb Diet',
    desc: 'A diet that restricts the consumption of carbohydrates, typically focusing on reducing intake of refined sugars and starches.',
  },
  {
    name: 'Vegan Diet',
    desc: 'A plant-based diet that excludes all animal products, including meat, dairy, eggs, and honey.',
  },
  {
    name: 'Vegetarian Diet',
    desc: 'A diet that excludes meat and seafood but allows for the consumption of other animal-derived products, such as dairy and eggs.',
  },
  {
    name: 'Paleo Diet',
    desc: 'An eating pattern that emphasizes whole foods and avoids processed foods and grains to mimic the eating patterns of our ancestors from the Paleolithic era.',
  },
  {
    name: 'Whole30',
    desc: 'A 30-day dietary program that eliminates certain food groups, such as grains, dairy, legumes, and added sugars, to reset eating habits and improve overall health.',
  },
];

const budgetOptions: RadioBasic[] = [
  {
    name: '$ (Economical)',
    desc: 'I have a very tight budget and can spend a minimal amount on my weekly diet.',
  },
  {
    name: '$$ (Affordable)',
    desc: 'I have a limited budget and can allocate a modest amount for my weekly diet.',
  },
  {
    name: '$$$ (Moderate)',
    desc: 'I have a moderate budget and can spend a reasonable amount on my weekly diet.',
  },
  {
    name: '$$$$ (Generous)',
    desc: 'I have a generous budget and can invest a substantial amount in high-quality dietary options.',
  },
  {
    name: '$$$$$ (Flexible)',
    desc: 'I have a flexible budget and can afford premium and diverse dietary options.',
  },
];

const fastingOptions: RadioBasic[] = [
  {
    name: 'Not Fasting',
    desc: 'Select this option if you wish to not follow any specific fasting regimen.',
  },
  {
    name: 'Intermittent Fasting',
    desc: 'Alternate between periods of eating and fasting with various schedules like 16/8 or 5:2.',
  },
  {
    name: 'Extended Fasting',
    desc: 'Engage in longer periods of fasting lasting 24 to 48 hours or more.',
  },
  {
    name: 'Time-Restricted Feeding',
    desc: 'Limit the eating window to a specific time frame each day, such as 8-hour eating and 16-hour fasting.',
  },
  {
    name: '5-Day Fasting Mimicking Diet (FMD)',
    desc: 'Follow a low-calorie diet designed to mimic fasting effects for five days.',
  },
  {
    name: 'Alternate-Day Fasting',
    desc: 'Alternate between fasting days and regular eating days, restricting calorie intake on fasting days.',
  },
  {
    name: 'OMAD (One Meal a Day)',
    desc: 'Consume all daily calories in a single meal, fasting for the rest of the day.',
  },
];

const MAX_QUESTION_QUICK: number = 5;
const MAX_QUESTION_COMPLETE: number = 7;

export default function Screening() {
  // Form fields //
  // -- Prescreening:
  const [method, setMethod] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // -- Body metrics:
  const [gender, setGender] = useState<RadioBasic>({ name: 'None', desc: 'None' });
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [age, setAge] = useState<number | null>(null);

  // -- Lifestyle factors:
  const [activityLevel, setActivityLevel] = useState<RadioBasic>({ name: 'None', desc: 'None' });
  const [workExertion, setWorkExertion] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // -- Considerations
  const [allergies, setAllergies] = useState<string>('');
  const [dietPref, setDietPref] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // -- Budgets
  const [budget, setBudget] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // -- Fasting
  const [fast, setFast] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // Page states //
  const [stage, setStage] = useState<number>(1);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [isScreeningComplete, setIsScreeningComplete] = useState<boolean>(false);

  function nextStage() {
    switch (method?.name) {
      case 'Quickstart':
        if (stage < MAX_QUESTION_QUICK && isComplete) {
          setStage((i) => i + 1);
          setIsComplete(false);
        } else {
          setIsScreeningComplete(true);
        }
        break;
      case 'Complete':
        if (stage < MAX_QUESTION_COMPLETE && isComplete) {
          setStage((i) => i + 1);
          setIsComplete(false);
        } else {
          setIsScreeningComplete(true);
        }
        break;
    }
  }

  function prevStage() {
    if (stage > 1) {
      setStage((i) => i - 1);
      setIsComplete(true);
    }
  }

  useEffect(() => {
    function validateSelector() {
      switch (stage) {
        case 1:
          if (method.name !== 'None') {
            setIsComplete(true);
          }
          break;
        case 2:
          if (
            gender.name !== 'None' &&
            Number(weight) > 0 &&
            Number(height) > 0 &&
            Number(age) > 0
          ) {
            setIsComplete(true);
          }
          break;
        case 3:
          if (activityLevel.name !== 'None' && workExertion.name !== 'None') {
            setIsComplete(true);
          }
          break;
        case 4:
          if (dietPref.name !== 'None') {
            setIsComplete(true);
          }
          break;
        case 5:
          if (budget.name !== 'None') {
            setIsComplete(true);
          }
          break;
        case 6:
          if (fast.name !== 'None') {
            setIsComplete(true);
          }
          break;
      }
    }
    validateSelector();
  }, [
    method,
    gender,
    height,
    weight,
    age,
    activityLevel,
    workExertion,
    allergies,
    dietPref,
    budget,
    stage,
  ]);

  let content;
  switch (stage) {
    case 1:
      content = (
        <>
          <p className="mt-5 mx-5 text-center ">
            Prior to embarking on your journey, select one of the options below
          </p>

          <Radio items={methodOptions} setSelection={setMethod} existingSelection={method} />
        </>
      );
      break;
    case 2:
      content = (
        <>
          <p className="mt-5 font-semibold">Body Metrics</p>
          <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl">
            <p className="mx-5 sm:mx-0 text-center sm:text-left">
              Gender, height, weight, and age play a crucial role in calculating your{' '}
              <b className="text-green-300">Basal Metabolic Rate</b> (BMR). BMR represents the
              number of calories your body needs to function at rest, providing valuable insights
              into your individual energy expenditure.
            </p>
            <p className="mt-5 mx-5 sm:mx-0 text-center sm:text-left">
              By accurately determining your BMR, <b className="text-metagreen">Metabolite</b> can
              better understand your body&apos;s specific needs and customize a nutrition plan that
              supports your health and well-being goals.
            </p>
          </div>
          <Radio
            items={genders}
            setSelection={setGender}
            label={'Gender'}
            existingSelection={gender}
          />
          <BodyMetrics
            metricSetters={{ setHeight, setWeight, setAge }}
            metricValues={{ height, weight, age }}
          />
        </>
      );
      break;
    case 3:
      content = (
        <>
          <p className="mt-5 font-semibold">Lifestyle Factors</p>
          <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl">
            <p className="mx-5 sm:mx-0 text-center sm:text-left">
              By considering your activity levels and work exertion,{' '}
              <b className="text-metagreen">Metabolite</b> can provide tailored recommendations that
              align with your energy needs and help you achieve your health and wellness goals
              effectively
            </p>
          </div>
          <Radio
            items={activityOptions}
            setSelection={setActivityLevel}
            label={'Activity Levels'}
            existingSelection={activityLevel}
          />
          <Radio
            items={workOptions}
            setSelection={setWorkExertion}
            label={'Work exertion'}
            existingSelection={workExertion}
          />
        </>
      );
      break;
    case 4:
      content = (
        <>
          <p className="mt-5 font-semibold">Considerations</p>
          <DietaryConcerns allergies={allergies} setAllergies={setAllergies} />
          <Radio items={dietOptions} setSelection={setDietPref} existingSelection={dietPref} />
        </>
      );
      break;
    case 5:
      content = (
        <>
          <p className="mt-5 font-semibold">Budget</p>
          <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl">
            <p className="mx-5 sm:mx-0 text-center sm:text-left">
              What is your <i>estimated weekly budget</i> for your diet? This information will
              enable <b className="text-metagreen">Metabolite</b> to provide personalized
              recommendations that align with both your financial and health goals, ensuring a
              well-balanced approach to your nutrition journey.
            </p>
          </div>
          <Radio items={budgetOptions} setSelection={setBudget} existingSelection={budget} />
        </>
      );
      break;
    case 6:
      content = (
        <>
          <p className="mt-5 font-semibold">Fasting</p>
          <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl">
            <p className="mx-5 sm:mx-0 text-center sm:text-left">
              If you have a preference for fasting, we&apos;re here to cater to your unique dietary
              needs. Fasting has gained popularity as an approach to promote various health
              benefits, and we understand the importance of incorporating it into your nutrition
              plan. By understanding your fasting preferences, we can provide tailored
              recommendations that align with your goals, ensuring a well-rounded and effective
              approach to your health journey.
            </p>
          </div>
          <Radio items={fastingOptions} setSelection={setFast} existingSelection={fast} />
        </>
      );
      break;
    case 7:
      content = (
        <>
          <p className="mt-5 font-semibold">Health Goals</p>
          <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl">
            <p className="mx-5 sm:mx-0 text-center sm:text-left">
              <b>Health Goals</b> encompass a wide range of objectives beyond just weight loss. It
              allows you to define your desired outcomes, such as improving overall well-being,
              enhancing cardiovascular health, reducing blood pressure, managing diabetes, building
              muscle mass, cutting body fat, or achieving a specific body composition.
            </p>
            <p className="mt-5 mx-5 sm:mx-0 text-center sm:text-left">
              By specifying your health goals, we can provide personalized recommendations tailored
              to your unique aspirations, supporting you in your journey towards optimal health. .
            </p>
          </div>
          {/* <Radio items={budgetOptions} setSelection={setBudget} /> */}
        </>
      );
      break;

    default:
      content = <div>Default content</div>;
      break;
  }

  return (
    <>
      <h1 className="text-4xl lg:text-6xl font-bold text-center mt-5">Metabolite Nutrition</h1>
      <div
        className={`z-[-100] relative flex place-items-center before:absolute before:h-[800px] before:w-[480px] 
      rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] 
      after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br 
      before:from-transparent before:to-green-800 before:opacity-10 after:from-emerald-800 after:via-lime-800 
      after:opacity-40 before:lg:h-[260px] translate-x-[-25rem] translate-y-[12rem] ${
        isScreeningComplete ? 'animate-pulse' : ''
      }`}
      />
      <div
        className={`z-[-100] relative flex place-items-center before:absolute before:h-[800px] before:w-[480px] 
      before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[280px] after:w-[340px] 
      after:bg-gradient-conic  after:blur-2xl after:content-[''] before:bg-gradient-to-br 
      before:from-transparent before:to-green-700 before:opacity-10 after:from-emerald-900 after:via-green-600 
      after:opacity-40 before:lg:h-[460px] translate-y-[27rem] ${
        isScreeningComplete ? 'animate-pulse' : ''
      }`}
      />
      <div
        className={`z-[-100] relative flex place-items-center before:absolute before:h-[800px] before:w-[480px] 
      before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[220px] after:w-[250px] 
      after:bg-gradient-conic  after:blur-2xl after:content-[''] before:bg-gradient-to-br 
      before:from-transparent before:to-green-300 before:opacity-10 after:from-emerald-200 after:via-lime-600 
      after:opacity-50 before:lg:h-[660px] translate-y-[30rem] translate-x-[-18rem] ${
        isScreeningComplete ? 'animate-pulse' : ''
      }`}
      />

      {!isScreeningComplete ? (
        <>
          <ProgressBar stage={stage} method={method} />
          <ScreeningPageSelector
            nextStage={nextStage}
            prevStage={prevStage}
            stage={stage}
            isComplete={isComplete}
          />
          {content}
        </>
      ) : (
        <>
          {' '}
          {console.log(
            method,
            gender,
            height,
            weight,
            age,
            activityLevel,
            workExertion,
            allergies,
            dietPref,
            budget
          )}
          <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl">
            <p className="mt-5 mx-5 text-center">
              You&apos;re all set! One moment as we let <b className="text-metagreen">Metabolite</b>{' '}
              work its magic and unveil the top three <b className="text-green-300">personalized</b>{' '}
              diets tailored just for you. Your health journey is about to take off!
            </p>
          </div>
          <div className="rounded-full mt-10 mx-20">
            <Lottie animationData={LoadingAnimation} loop={true} />
          </div>
        </>
      )}
    </>
  );
}

function BodyMetrics({ metricSetters, metricValues }: BodyMetricsProps) {
  const { setHeight, setWeight, setAge } = metricSetters;
  const { height, weight, age } = metricValues;
  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md lg:max-w-xl">
        <div className="flex justify-between mt-5 gap-5 flex-col items-center md:flex-row">
          <div className="w-1/2">
            <label htmlFor="height">
              <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
                <p className="">Height</p>
                <p className="text-gray-400">cm.</p>
              </div>
            </label>
            <input
              className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
              id="height"
              type="number"
              min={1}
              max={400}
              value={height != null ? height.toString() : ''}
              onChange={(e) => {
                setHeight(Number(e.target.valueAsNumber));
              }}
              placeholder="Height"
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="weight">
              <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
                <p className="">Weight</p>
                <p className="text-gray-400">kg.</p>
              </div>
            </label>
            <input
              className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
              id="weight"
              type="number"
              min={1}
              max={600}
              value={weight != null ? weight.toString() : ''}
              onChange={(e) => {
                setWeight(Number(e.target.valueAsNumber));
              }}
              placeholder="Weight"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-2 w-1/2 md:pr-2">
            <label htmlFor="age">
              <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
                <p className="">Age</p>
                <p className="text-gray-400">Years</p>
              </div>
            </label>
            <input
              className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="number"
              min={1}
              max={150}
              value={age != null ? age.toString() : ''}
              onChange={(e) => {
                setAge(Number(e.target.valueAsNumber));
              }}
              placeholder="Age"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DietaryConcerns({ allergies, setAllergies }: DietaryConcernsProps) {
  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md lg:max-w-xl ">
        <p className="my-2 font-bold">Dietary Concerns</p>
        <p>
          Are there any concerns related to your diet that could assist{' '}
          <b className="text-metagreen">Metabolite</b> in recommending a suitable dietary plan, such
          as <b className="text-green-300">allergies</b> or{' '}
          <b className="text-green-300">sensitivities</b> to certain foods?{' '}
        </p>
        <p>Leave blank if this does not apply to you.</p>
        <div className="mt-5">
          <label htmlFor="allergies">
            <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
              <p className="">Allergies</p>
              <p className="text-gray-400">Optional</p>
            </div>
          </label>
          <textarea
            className="shadow appearance-none border  w-full py-2 px-3 text-sm text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
            id="allergies"
            rows={5}
            onChange={(e) => {
              setAllergies(e.target.value);
            }}
            value={allergies || undefined}
            placeholder="Peanut allergy, Soy allergy, shellfish allergy, etc."
          />
        </div>
        <p className="mt-4 mb-2 font-bold">Dietary Preferences</p>
        <p>
          At the moment, do you have any specific dietary preferences? If not, please select{' '}
          <b className="text-green-300">Not Applicable</b>. Don&apos;t worry, Metabolite will still
          recommend the best diet for you!
        </p>
      </div>
    </div>
  );
}

function ScreeningPageSelector({
  prevStage,
  nextStage,
  stage,
  isComplete,
}: {
  prevStage: any;
  nextStage: any;
  stage: number;
  isComplete: boolean;
}) {
  return (
    <div className="flex flex-col md:gap-5 md:flex-row">
      <button
        className={`group mt-5  transition-all border rounded-lg py-2 px-4 whitespace-nowrap ${
          stage > 1
            ? 'border-red-300 bg-rose-700/30 hover:border-red-200 hover:bg-rose-600/30'
            : 'cursor-not-allowed bg-rose-700/10 hover:border-red-200 hover:bg-rose-800/30 opacity-50'
        }`}
        onClick={prevStage}
        disabled={stage === 1}
      >
        <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
          &lt;-
        </span>{' '}
        Previous
      </button>
      <button
        className={`group mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap ${
          isComplete
            ? 'border-green-300 bg-emerald-700/30 hover:border-green-200 hover:bg-emerald-600/30'
            : 'border-green-100 bg-emerald-700/10 hover:border-green-200 hover:bg-emerald-800/30 opacity-50'
        }`}
        onClick={nextStage}
        disabled={isComplete === false}
      >
        Continue{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </button>
    </div>
  );
}

function ProgressBar({ stage, method }: { stage: number; method: RadioBasic }) {
  return (
    <div className="mt-5 px-5 md:px-0 md:mx-auto w-full max-w-md lg:max-w-xl">
      <div className="mb-1 text-base font-medium text-green-300">Progress</div>
      <div className="w-full rounded-full h-2.5 bg-gray-700">
        <div
          className="h-2.5 rounded-full bg-emerald-700 transition-all duration-700"
          style={{
            width: `${
              method?.name === 'Complete' ? stage * MAX_QUESTION_COMPLETE * 2.05 : stage * 20
            }%`,
          }}
        ></div>
      </div>
      <p className="mt-2 opacity-50 text-center">
        {stage} of {method?.name === 'Complete' ? MAX_QUESTION_COMPLETE : MAX_QUESTION_QUICK}
      </p>
    </div>
  );
}
