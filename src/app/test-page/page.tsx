'use client';
import type { RootState } from '&/store';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, incrementByAmount } from '&/features/user-metrics/metricsSlice';

function TestAPI() {
  async function onMongoApiRequest() {
    const response = await fetch('/api/user_api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData, null, 2),
    });
    const data = await response.json();
    // window.alert(data.message);
  }

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
}

const testData = {
  user: 'Test Metabolite',
  method: 'Quickstart',
  gender: 'Male',
  height: 162,
  weight: 80,
  age: 21,
  activityLevel: 'Lightly active',
  workExertion: 'Office job',
  allergies: 'Nuts',
  dietPref: 'Not applicable',
  budget: '$$$ (Moderate)',
};

export default TestAPI;
