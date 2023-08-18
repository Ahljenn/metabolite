'use client';
import type { RootState } from '&/store';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, incrementByAmount } from '&/features/user-metrics/metricsSlice';

const Results = ({ params }: { params: { results: string } }): JSX.Element => {
  // const countState = useSelector((state: RootState) => state.metrics.value);

  const { results } = params;

  return (
    <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl">
      <h2>test: {results}</h2>
      {/* {countState} */}
    </div>
  );
};

export default Results;
