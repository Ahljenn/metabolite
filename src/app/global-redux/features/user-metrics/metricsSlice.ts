'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface MetricState {
  value: number;
}

const initialState: MetricState = {
  value: 0,
};

export const metricsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = metricsSlice.actions;
export default metricsSlice.reducer;
