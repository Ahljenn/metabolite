'use client';

import type { RootState } from '&/store';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, incrementByAmount } from '&/features/user-metrics/metricsSlice';
import SelectDiet from '@/app/components/features/SelectDiet';
import { UserScreeningType, dietDescriptions } from '@/tools/diet-rank/rank.utils';
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
  };

  return (
    <main>
      {diets.length > 0 ? (
        <SelectDiet user={sample} diets={diets} bmr={bmr} />
      ) : (
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
  userEmail: 'Sample User',
  userName: 'Sample User',
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
