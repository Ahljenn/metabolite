'use client';

import Radio from '../../components/features/Radio';
import { useEffect, useState } from 'react';
import { RadioBasic } from '../../components/features/Radio';
import Lottie from 'lottie-react';
import LoadingAnimation from '#/lottie/loading.json';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import {
  methodOptions,
  genders,
  activityOptions,
  workOptions,
  allergyOptions,
  dietOptions,
  budgetOptions,
  fastingOptions,
  goalOptions,
  MAX_QUESTION_QUICK,
  MAX_QUESTION_COMPLETE,
  DietaryConcernsProps,
  BodyMetricsProps,
} from './screening.utils';
import { UserScreeningType } from '@/tools/diet-rank/rank.utils';
import { rank } from '@/tools/diet-rank/rank';
import SelectDiet from '@/app/components/features/SelectDiet';
import FadeWrapper from '@/app/components/ui/FadeWrapper';
import ModalAdvanced from '@/app/components/ui/Modals/ModalAdvanced';
import UnitConverter from '@/app/components/features/UnitConverter';

const Screening: React.FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  // Form fields //
  // -- Prescreening:
  const [method, setMethod] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // -- Body Metrics:
  const [gender, setGender] = useState<RadioBasic>({ name: 'None', desc: 'None' });
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [age, setAge] = useState<number | null>(null);

  // -- Lifestyle Factors:
  const [activityLevel, setActivityLevel] = useState<RadioBasic>({ name: 'None', desc: 'None' });
  const [workExertion, setWorkExertion] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // -- Considerations
  const [allergies, setAllergies] = useState<RadioBasic>({ name: 'None', desc: 'None' });
  const [dietPref, setDietPref] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // -- Budgets
  const [budget, setBudget] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // -- Fasting
  const [fast, setFast] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // -- Health Goals
  const [healthGoal, setHealthGoal] = useState<RadioBasic>({ name: 'None', desc: 'None' });

  // Page States //
  const [stage, setStage] = useState<number>(1);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [isScreeningComplete, setIsScreeningComplete] = useState<boolean>(false);

  // Modal
  const [modalView, setModalView] = useState<boolean>(false);

  // Final Results
  const [diets, setDiets] = useState<string[]>([]);
  const [bmr, setBmr] = useState<number>();
  const [userData, setUserData] = useState<UserScreeningType>();

  const nextStage = () => {
    switch (method?.name) {
      case 'Quickstart':
        if (stage < MAX_QUESTION_QUICK && isComplete) {
          setStage((i) => i + 1);
          setIsComplete(false);
        } else {
          onFormComplete();
        }
        break;
      case 'Complete':
        if (stage < MAX_QUESTION_COMPLETE && isComplete) {
          setStage((i) => i + 1);
          setIsComplete(false);
        } else {
          onFormComplete();
        }
        break;
    }
  };

  const prevStage = () => {
    if (stage > 1) {
      setStage((i) => i - 1);
      setIsComplete(true);
    }
  };

  useEffect(() => {
    const validateSelector = () => {
      switch (stage) {
        case 1:
          if (method.name !== 'None') {
            setIsComplete(true);
          }
          break;
        case 2:
          if (gender.name !== 'None' && weight !== null && height !== null && age !== null) {
            setIsComplete(true);
          } else {
            setIsComplete(false);
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
          if (healthGoal.name !== 'None') {
            setIsComplete(true);
          }
          break;
        case 6:
          if (fast.name !== 'None') {
            setIsComplete(true);
          }
          break;
        case 7:
          if (budget.name !== 'None') {
            setIsComplete(true);
          }
          break;
      }
    };
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
    healthGoal,
    fast,
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

          <Radio
            items={methodOptions}
            setSelection={setMethod}
            existingSelection={method}
            isRow={true}
          />
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
              <b className="text-teal-300">Basal Metabolic Rate</b> (BMR). BMR represents the number
              of calories your body needs to function at rest, providing valuable insights into your
              individual energy expenditure.
            </p>
            <p className="mt-5 mx-5 sm:mx-0 text-center sm:text-left">
              By accurately determining your BMR, <b className="text-metaAccent">Metabolite</b> can
              better understand your body&apos;s specific needs and customize a nutrition plan that
              supports your health and well-being goals.
            </p>
          </div>
          <Radio
            items={genders}
            setSelection={setGender}
            label={'Gender'}
            existingSelection={gender}
            isRow={true}
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
              <b className="text-metaAccent">Metabolite</b> can provide tailored recommendations
              that align with your energy needs and help you achieve your health and wellness goals
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
          <p className="mt-5 font-semibold">Health Goals</p>
          <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl">
            <p className="mx-5 sm:mx-0 text-center sm:text-left">
              <b>Health Goals</b> encompass a wide range of objectives beyond just weight loss. It
              allows you to define your desired outcomes.
            </p>
            <p className="mt-5 mx-5 sm:mx-0 text-center sm:text-left">
              By specifying your health goals, we can provide personalized recommendations tailored
              to your unique aspirations, supporting you in your journey towards optimal health.
            </p>
          </div>
          <Radio items={goalOptions} setSelection={setHealthGoal} existingSelection={healthGoal} />
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
          <p className="mt-5 font-semibold">Budget</p>
          <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl">
            <p className="mx-5 sm:mx-0 text-center sm:text-left">
              What is your <i>estimated weekly budget</i> for your diet? This information will
              enable <b className="text-metaAccent">Metabolite</b> to provide personalized
              recommendations that align with both your financial and health goals, ensuring a
              well-balanced approach to your nutrition journey.
            </p>
          </div>
          <Radio items={budgetOptions} setSelection={setBudget} existingSelection={budget} />
        </>
      );
      break;

    default:
      content = <div>Default content</div>;
      break;
  }

  const onFormComplete = () => {
    setModalView(true);
  };

  // After user acknowledge
  const handleUserData = async () => {
    const tempUserData: UserScreeningType = {
      userEmail: session?.user?.email || 'No user email loaded',
      userName: session?.user?.name || 'No user name loaded',
      method: method.name,
      gender: gender.name,
      height,
      weight,
      age,
      activityLevel: activityLevel.name,
      workExertion: workExertion.name,
      allergies: allergies.name,
      dietPref: dietPref.name,
      healthGoal: healthGoal.name,
      fast: fast.name === 'None' ? 'Not Fasting' : fast.name,
      budget: budget.name === 'None' ? '$$ (Affordable)' : budget.name,
    };
    setUserData(tempUserData);

    const redirectTimeout = setTimeout(() => {
      let [bmrVal, cluster] = rank(tempUserData);
      setDiets(cluster);
      setBmr(bmrVal);
    }, 1500); // N miliseconds
    // Clean up the timeout when the component unmounts
    return () => clearTimeout(redirectTimeout);
  };

  if (diets.length > 0) {
    return (
      <FadeWrapper>
        <main
          className={`flex flex-col items-center  justify-between 
p-12`}
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-center mt-5 bg-gradient-to-r from-metaAccent via-metaPrimary to-metaAccent bg-clip-text text-transparent">
            Select Your Path
          </h1>
          <SelectDiet user={userData} diets={diets} bmr={bmr} />
        </main>
      </FadeWrapper>
    );
  }

  return (
    <main
      className={`flex flex-col items-center  justify-between 
  p-12`}
    >
      <h1 className="text-4xl lg:text-6xl font-bold text-center mt-5 bg-gradient-to-r from-metaPrimary via-metaSecondary to-metaAccent bg-clip-text text-transparent">
        Metabolite Nutrition
      </h1>

      <ModalAdvanced
        title="Proceed"
        description="
        Are you ready to continue with the customized wellness metrics? Please note that once set, you won't be able to alter your values unless you start over."
        modalView={modalView}
        setModalView={setModalView}
        acknowledgeText="Continue"
        onAcknowledge={() => {
          handleUserData();
          setIsScreeningComplete(true);
          setModalView(false);
        }}
        rejectText="Revise"
        onReject={() => {
          setModalView(false);
        }}
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
          <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl">
            <p className="mt-5 mx-5 text-center">
              You&apos;re all set! One moment as we let{' '}
              <b className="text-metaAccent">Metabolite</b> work its magic and unveil the top three{' '}
              <b className="text-teal-300">personalized</b> diets tailored just for you. Your health
              journey is about to take off!
            </p>
          </div>
          <section className="bg-metaAccent/20 rounded-full mt-10 mx-10 opacity-90">
            <div>
              <Lottie animationData={LoadingAnimation} loop={true} />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

const BodyMetrics = ({ metricSetters, metricValues }: BodyMetricsProps) => {
  const { setHeight, setWeight, setAge } = metricSetters;
  const { height, weight, age } = metricValues;
  const [converterView, setConverterView] = useState<boolean>(false);
  return (
    <div className="w-full px-4">
      <UnitConverter modalView={converterView} setModalView={setConverterView} />
      <div className="mx-auto w-full max-w-md lg:max-w-xl">
        <div className="mt-10 flex justify-center flex-col sm:flex-row items-center gap-5">
          Need to convert units?
          <button
            className="transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-neutral-900 bg-neutral-900 hover:border-metaAccent cursor-pointer"
            onClick={() => {
              setConverterView(true);
            }}
          >
            Unit Converter
          </button>
        </div>
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
                if (e.target.value === '') setHeight(null);
                let value = Number(e.target.valueAsNumber);
                if (value <= 1000) setHeight(value);
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
                if (e.target.value === '') setWeight(null);
                let value = Number(e.target.valueAsNumber);
                if (value <= 2000) setWeight(value);
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
                if (e.target.value === '') setAge(null);
                let value = Number(e.target.valueAsNumber);
                if (value <= 150) setAge(value);
              }}
              placeholder="Age"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DietaryConcerns = ({ allergies, setAllergies }: DietaryConcernsProps) => {
  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md lg:max-w-xl ">
        <p className="my-2 font-bold">Dietary Concerns</p>
        <p>
          Are there any concerns related to your diet that could assist{' '}
          <b className="text-metaAccent">Metabolite</b> in recommending a suitable dietary plan,
          such as <b className="text-teal-300">allergies</b> or{' '}
          <b className="text-teal-300">sensitivities</b> to certain foods?{' '}
        </p>
        <Radio items={allergyOptions} setSelection={setAllergies} existingSelection={allergies} />
        <p className="mt-4 mb-2 font-bold">Dietary Preferences</p>
        <p>
          At the moment, do you have any specific dietary preferences? If not, please select{' '}
          <b className="text-teal-300">Not Applicable</b>. Don&apos;t worry, Metabolite will still
          recommend the best diet for you!
        </p>
      </div>
    </div>
  );
};

const ScreeningPageSelector = ({
  prevStage,
  nextStage,
  stage,
  isComplete,
}: {
  prevStage: any;
  nextStage: any;
  stage: number;
  isComplete: boolean;
}) => {
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
        className={`group mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap bg-neutral-900  ${
          isComplete ? 'border-metaSecondary hover:border-metaAccent' : 'border-gray-500 opacity-50'
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
};

const ProgressBar = ({ stage, method }: { stage: number; method: RadioBasic }) => {
  return (
    <div className="mt-5 px-5 md:px-0 md:mx-auto w-full max-w-md lg:max-w-xl">
      <div className="mb-1 text-base font-medium text-teal-300">Progress</div>
      <div className="w-full rounded-full h-2.5 bg-gray-700">
        <div
          className="h-2.5 rounded-full bg-gradient-to-r from-metaPrimary via-metaSecondary to-metaAccent transition-all duration-700"
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
};

export default Screening;
