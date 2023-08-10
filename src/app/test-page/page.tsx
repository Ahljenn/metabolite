'use client';
import type { RootState } from '&/store';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, incrementByAmount } from '&/features/user-metrics/metricsSlice';

import { UserScreeningType } from '@/tools/diet-rank/rank.utils';
import { rank } from '@/tools/diet-rank/rank';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TestAPI: React.FC = (): JSX.Element => {
  const [diets, setDiets] = useState<string[]>([]);
  const [bmr, setBmr] = useState<number>();

  const onMongoApiRequest = async () => {
    const response = await fetch('/api/user_api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sample, null, 2),
    });
    const data = await response.json();
    // window.alert(data.message);
  };

  const onRankRequest = () => {
    let [bmrVal, cluster] = rank(sample);
    setDiets(cluster);
    setBmr(bmrVal);
    // console.table(cluster);
    // console.log(bmr);
  };

  // const countState = useSelector((state: RootState) => state.metrics.value);
  // const dispatch = useDispatch();

  return (
    <main className="flex max-w-screen-xl px-4 py-8 mx-auto flex-col">
      <div className="flex justify-center mt-20 flex-col gap-5 items-center">
        <div>
          <button
            className="bg-green-500 hover:bg-lime-500 transition-all duration-300 px-5 py-2 rounded-lg text-black"
            onClick={onRankRequest}
          >
            Rank Test
          </button>
        </div>
      </div>

      {diets.length > 0 ? (
        <>
          <div className="flex justify-center mt-10 flex-col sm:flex-row gap-2 items-center">
            <div className="flex flex-col items-center">
              <Image
                className="grayscale"
                src="/eating.png"
                alt="Person eating food"
                width={2000}
                height={2000}
                quality={100}
                priority
              />
              <p className="text-center">
                Your Basal Metabolic Rate is: <b className="font-semibold text-metaAccent">{bmr}</b>
              </p>
              <p>
                Fasting procedure: <b className="font-semibold text-metaAccent">{sample.fast}</b>
              </p>
              <p>
                Health goal: <b className="font-semibold text-metaAccent">{sample.healthGoal}</b>
              </p>
            </div>
            <div className="sm:border-l-[0.01px] sm:border-slate-300 sm:px-5">
              <p className="text-center font-semibold mb-5">Select your journey</p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus felis quis
                ultricies malesuada. Aliquam erat volutpat. Donec ac sapien sed erat tincidunt
                faucibus id a leo.{' '}
              </p>
              {diets.map((diet: string, index: number) => (
                <div className="mb-5 p-2" key={index}>
                  <p className="font-bold text-metaAccent text-xl">
                    {index + 1}. {diet}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus felis quis
                    ultricies malesuada. Aliquam erat volutpat. Donec ac sapien sed erat tincidunt
                    faucibus id a leo. Fusce eleifend gravida mauris, quis suscipit enim dignissim
                    mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
                    vulputate augue leo, nec ultrices nisi ullamcorper ac. Aenean posuere lacus in
                    venenatis tempus.
                  </p>
                  <div className="flex justify-between items-center">
                    <Link className="italic text-metaSecondary cursor-pointer" href="#">
                      Learn more <b className="bold">&gt;</b>
                    </Link>
                    <button className="transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaSecondary bg-neutral-900 hover:border-metaAccent">
                      Select
                    </button>
                  </div>
                </div>
              ))}
              <p className="text-sm opacity-50 tracking-tighter">
                Disclaimer: The nutrition recommendations provided by Metabolite are intended for
                general informational purposes only and are not a substitute for professional
                medical advice, diagnosis, or treatment. Always seek the advice of a qualified
                healthcare provider or registered dietitian before making any significant changes to
                your diet, exercise routine, or lifestyle.
              </p>
            </div>
          </div>
        </>
      ) : (
        <> </>
      )}

      {/* 
      <div className="flex justify-center mt-20 flex-col gap-5 items-center">
        <h1>Redux</h1>
        <button
          className="bg-green-500 hover:bg-lime-500 transition-all duration-300 px-5 py-2 rounded-lg text-black"
          onClick={() => dispatch(increment())}
        >
          Up
        </button>
        <button
          className="bg-red-500 hover:bg-orange-500 transition-all duration-300 px-5 py-2 rounded-lg text-black"
          onClick={() => dispatch(decrement())}
        >
          Down
        </button>
        <button
          className="bg-green-500 hover:bg-lime-500 transition-all duration-300 px-5 py-2 rounded-lg text-black"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Up by 10
        </button>
  {countState}
      </div> */}
    </main>
  );
};

const sample: UserScreeningType = {
  user: 'Sample User',
  method: 'Quickstart',
  gender: 'Female',
  height: 100,
  weight: 102,
  age: 21,
  activityLevel: 'Lightly active',
  workExertion: 'Not applicable',
  allergies: 'Gluten',
  dietPref: 'Not applicable',
  healthGoal: 'Losing Weight',
  fast: 'Not Fasting',
  budget: '$$ (Affordable)',
};

export default TestAPI;
