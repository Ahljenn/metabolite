export interface UserScreeningType {
  user: string;
  method: string;
  gender: string;
  height: number | null;
  weight: number | null;
  age: number | null;
  activityLevel: string;
  workExertion: string;
  allergies: string;
  dietPref: string;
  healthGoal: string;
  fast: string;
  budget: string;
}

export type EntryType = [string | null, number];

export const fastingOptions: string[] = [
  'Not Fasting',
  'Intermittent Fasting',
  'Extended Fasting',
  'Time-Restricted Feeding',
  '5-Day Fasting Mimicking Diet (FMD)',
  'Alternate-Day Fasting',
  'OMAD (One Meal a Day)',
];

export const goalOptions: string[] = [
  'Losing Weight',
  'Building Muscle',
  'Building Strength',
  'Enhancing Cardiovascular Health',
  'Managing Diabetes',
  'Body Recomposition',
  'Ethical or Environment Concerns',
  'Performance Enhancement',
  'Gut Health',
];

export const clusterMap: { [key: string]: string[] } = {
  KTO: ['Ketogenic Diet', 'Low Carb Diet', 'Atkins Diet'],
  HPO: ['High-protein Diet', 'Paleo Diet', 'Carnivore Diet'],
  VEG: ['Vegan Diet', 'Vegetarian Diet', 'Pescatarian Diet'],
  FLX: ['Flexitarian Diet', 'Mediterranean Diet', 'Pescatarian Diet'],
  ZON: ['Zone Diet', 'Weight Watchers', 'DASH Diet'],
};

export const activityMultiplier: { [key: string]: number } = {
  Sedentary: 0.0,
  'Lightly active': 1.0,
  Active: 2.0,
  'Very active': 3.0,
};

export const workMultiplier: { [key: string]: number } = {
  'Not applicable': 0.0,
  'Work from home': 0.3,
  'Office job': 1.0,
  'Active labor': 2.0,
  'Very active labor': 3.0,
};

export const calculateBmr = (metrics: UserScreeningType): number => {
  if (metrics.weight !== null && metrics.height !== null && metrics.age !== null) {
    if (metrics.gender === 'Male') {
      return Math.round(
        88.362 + 13.397 * metrics.weight + 4.799 * metrics.height - 5.677 * metrics.age
      );
    } else {
      return Math.round(
        447.593 + 9.247 * metrics.weight + 3.098 * metrics.height - 4.33 * metrics.age
      );
    }
  } else {
    return 0;
  }
};
