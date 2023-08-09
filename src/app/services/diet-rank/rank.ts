import { UserScreeningType, calculateBmr } from './rank.utils';

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

// User's cluster "score"
let clusterScore: { [key: string]: number } = {
  KTO: 0.0,
  HPO: 0.0,
  VEG: 0.0,
  FLX: 0.0,
  ZON: 0.0,
};

const rank = (metrics: UserScreeningType, normalize: boolean = false) => {
  const bmr = calculateBmr(metrics);
};
