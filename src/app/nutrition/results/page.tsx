'use client';
import type { RootState } from '&/store';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, incrementByAmount } from '&/features/user-metrics/metricsSlice';

const Results: React.FC = (): JSX.Element => {
  // const countState = useSelector((state: RootState) => state.metrics.value);

  return (
    <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl">
      state:
      {/* {countState} */}
    </div>
  );
};

export default Results;
