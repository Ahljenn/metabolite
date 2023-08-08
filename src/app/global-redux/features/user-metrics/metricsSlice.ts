'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the updated UserMetricsType interface with all fields as string
export interface UserMetricsType {
  method: string;
  gender: string;
  height: number | null;
  weight: number | null;
  age: number | null;
  activityLevel: string;
  workExertion: string;
  allergies: string;
  dietPref: string;
  budget: string;
  fast: string;
  healthGoal: string;
  stage: number;
  isComplete: boolean;
  isScreeningComplete: boolean;
}

// Update the initialState to use strings instead of objects
const initialState: UserMetricsType = {
  method: 'None',
  gender: 'None',
  height: null,
  weight: null,
  age: null,
  activityLevel: 'None',
  workExertion: 'None',
  allergies: 'None',
  dietPref: 'None',
  budget: 'None',
  fast: 'None',
  healthGoal: 'None',
  stage: 1,
  isComplete: false,
  isScreeningComplete: false,
};

export const metricsSlice = createSlice({
  name: 'userMetrics',
  initialState,
  reducers: {
    setMethod: (state, action: PayloadAction<string>) => {
      state.method = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setHeight: (state, action: PayloadAction<number | null>) => {
      state.height = action.payload;
    },
    setWeight: (state, action: PayloadAction<number | null>) => {
      state.weight = action.payload;
    },
    setAge: (state, action: PayloadAction<number | null>) => {
      state.age = action.payload;
    },
    setActivityLevel: (state, action: PayloadAction<string>) => {
      state.activityLevel = action.payload;
    },
    setWorkExertion: (state, action: PayloadAction<string>) => {
      state.workExertion = action.payload;
    },
    setAllergies: (state, action: PayloadAction<string>) => {
      state.allergies = action.payload;
    },
    setDietPref: (state, action: PayloadAction<string>) => {
      state.dietPref = action.payload;
    },
    setBudget: (state, action: PayloadAction<string>) => {
      state.budget = action.payload;
    },
    setFast: (state, action: PayloadAction<string>) => {
      state.fast = action.payload;
    },
    setHealthGoal: (state, action: PayloadAction<string>) => {
      state.healthGoal = action.payload;
    },
    setStage: (state, action: PayloadAction<number>) => {
      state.stage = action.payload;
    },
    setIsComplete: (state, action: PayloadAction<boolean>) => {
      state.isComplete = action.payload;
    },
    setIsScreeningComplete: (state, action: PayloadAction<boolean>) => {
      state.isScreeningComplete = action.payload;
    },
    setFormData: (state, action: PayloadAction<Partial<UserMetricsType>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  setMethod,
  setGender,
  setHeight,
  setWeight,
  setAge,
  setActivityLevel,
  setWorkExertion,
  setAllergies,
  setDietPref,
  setBudget,
  setFast,
  setHealthGoal,
  setStage,
  setIsComplete,
  setIsScreeningComplete,
  setFormData,
} = metricsSlice.actions;
export default metricsSlice.reducer;

// export interface MetricState {
//   value: number;
// }

// const initialState: MetricState = {
//   value: 0,
// };

// export const metricsSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });

// export const { increment, decrement, incrementByAmount } = metricsSlice.actions;
// export default metricsSlice.reducer;
