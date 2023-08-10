'use client';
import type { RootState } from '&/store';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, incrementByAmount } from '&/features/user-metrics/metricsSlice';

import { UserScreeningType } from '../../tools/diet-rank/rank.utils';
import { rank } from '../../tools/diet-rank/rank';

const TestAPI: React.FC = (): JSX.Element => {
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
    rank(sample);
  };

  // const countState = useSelector((state: RootState) => state.metrics.value);
  // const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-center mt-20 flex-col gap-5 items-center">
        <div>
          <button
            className="bg-green-500 hover:bg-lime-500 transition-all duration-300 px-5 py-2 rounded-lg text-black"
            onClick={onMongoApiRequest}
          >
            MONGO TEST
          </button>
        </div>
      </div>

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

      <div className="flex justify-center mt-20 flex-col gap-5 items-center">
        <h1>Redux</h1>
        {/* <button
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
  {countState}*/}
      </div>
    </>
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
