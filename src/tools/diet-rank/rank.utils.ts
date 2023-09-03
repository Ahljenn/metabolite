export interface UserScreeningType {
  userEmail: string;
  userName: string;
  dietChoice?: string;
  bmr?: number;
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

export const dietDescriptions: { [key: string]: string } = {
  'Ketogenic Diet':
    'A low-carb, high-fat diet that focuses on reducing carbohydrate intake and increasing fat consumption.',
  'Low Carb Diet':
    'A diet that restricts the consumption of carbohydrates, typically focusing on reducing intake of refined sugars and starches.',
  'Atkins Diet':
    'A low-carb diet that emphasizes protein and fat consumption while limiting carbohydrate intake.',
  'High-protein Diet':
    'A diet that emphasizes consuming a higher proportion of protein-rich foods.',
  'Paleo Diet':
    'An eating pattern that emphasizes whole foods and avoids processed foods and grains to mimic the eating patterns of our ancestors from the Paleolithic era.',
  'Carnivore Diet':
    'An animal-based diet that primarily consists of meat and other animal products.',
  'Vegan Diet':
    'A plant-based diet that excludes all animal products, including meat, dairy, eggs, and honey.',
  'Vegetarian Diet':
    'A diet that excludes meat and seafood but allows for the consumption of other animal-derived products, such as dairy and eggs.',
  'Pescatarian Diet':
    'A diet that includes fish and other seafood, but excludes other types of meat.',
  'Flexitarian Diet':
    'A flexible diet that encourages plant-based eating while allowing for occasional consumption of meat and animal products.',
  'Mediterranean Diet':
    'An eating pattern inspired by the traditional dietary habits of Mediterranean countries, emphasizing whole foods, olive oil, fruits, vegetables, and fish.',
  'Zone Diet':
    'A diet that balances carbohydrates, protein, and fats in specific ratios to control insulin levels and promote weight loss.',
  'Weight Watchers':
    'A commercial weight loss program that assigns points to foods based on their nutritional content.',
  'DASH Diet':
    'Dietary Approaches to Stop Hypertension (DASH) is a diet designed to lower blood pressure and promote heart health by emphasizing fruits, vegetables, whole grains, lean proteins, and low-fat dairy.',
};

export const dietRatios: {
  [dietName: string]: { Carbohydrate: number; Fat: number; Protein: number };
} = {
  'Ketogenic Diet': {
    Carbohydrate: 0.05,
    Fat: 0.7,
    Protein: 0.25,
  },
  'Low Carb Diet': {
    Carbohydrate: 0.2,
    Fat: 0.4,
    Protein: 0.4,
  },
  'Atkins Diet': {
    Carbohydrate: 0.05,
    Fat: 0.65,
    Protein: 0.3,
  },
  'High-protein Diet': {
    Carbohydrate: 0.2,
    Fat: 0.3,
    Protein: 0.5,
  },
  'Paleo Diet': {
    Carbohydrate: 0.25,
    Fat: 0.4,
    Protein: 0.35,
  },
  'Carnivore Diet': {
    Carbohydrate: 0.05,
    Fat: 0.7,
    Protein: 0.25,
  },
  'Vegan Diet': {
    Carbohydrate: 0.7,
    Fat: 0.2,
    Protein: 0.1,
  },
  'Vegetarian Diet': {
    Carbohydrate: 0.7,
    Fat: 0.2,
    Protein: 0.1,
  },
  'Pescatarian Diet': {
    Carbohydrate: 0.7,
    Fat: 0.2,
    Protein: 0.1,
  },
  'Flexitarian Diet': {
    Carbohydrate: 0.55,
    Fat: 0.25,
    Protein: 0.2,
  },
  'Mediterranean Diet': {
    Carbohydrate: 0.55,
    Fat: 0.35,
    Protein: 0.15,
  },
  'Zone Diet': {
    Carbohydrate: 0.4,
    Fat: 0.3,
    Protein: 0.3,
  },
  'Weight Watchers': {
    Carbohydrate: 0.4,
    Fat: 0.3,
    Protein: 0.3,
  },
  'DASH Diet': {
    Carbohydrate: 0.55,
    Fat: 0.27,
    Protein: 0.18,
  },
};

export const activityFactor: Record<string, number> = {
  sedentary: 1.2,
  lightlyActive: 1.375,
  moderatelyActive: 1.55,
  veryActive: 1.725,
  superActive: 1.9,
};
