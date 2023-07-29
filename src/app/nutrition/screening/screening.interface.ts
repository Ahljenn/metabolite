import { RadioBasic } from './../../components/ui/Radio';

// Types
export interface MetricSetters {
  setHeight: React.Dispatch<React.SetStateAction<number | null>>;
  setWeight: React.Dispatch<React.SetStateAction<number | null>>;
  setAge: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface MetricValues {
  height: number | null;
  weight: number | null;
  age: number | null;
}

export interface BodyMetricsProps {
  metricSetters: MetricSetters;
  metricValues: MetricValues;
}

export interface DietaryConcernsProps {
  allergies: RadioBasic;
  setAllergies: React.Dispatch<React.SetStateAction<RadioBasic>>;
}

// export constants
export const methodOptions: RadioBasic[] = [
  {
    name: 'Quickstart',
    desc: 'Get started on your health journey with a fast and efficient pre-screening assessment designed to provide immediate insights.',
  },
  {
    name: 'Complete',
    desc: 'Dive deeper into your health assessment with a comprehensive screening, uncovering valuable insights for a holistic understanding of your well-being.',
  },
];

export const genders: RadioBasic[] = [
  {
    name: 'Female',
    desc: 'Select if you are a biological female.',
  },
  {
    name: 'Male',
    desc: 'Select if you are a biological male.',
  },
];

export const activityOptions: RadioBasic[] = [
  {
    name: 'Sedentary',
    desc: 'Limited physical activity or mostly sedentary lifestyle.',
  },
  {
    name: 'Lightly active',
    desc: 'Light physical activity or regular exercise a few times per week.',
  },
  {
    name: 'Active',
    desc: 'Moderate physical activity or regular exercise most days of the week.',
  },
  {
    name: 'Very active',
    desc: 'High level of physical activity or intense exercise on a daily basis.',
  },
];

export const workOptions: RadioBasic[] = [
  {
    name: 'Not applicable',
    desc: 'This question is not applicable for you to the current situation.',
  },
  {
    name: 'Work from home',
    desc: 'Working remotely or from home without a fixed office location.',
  },
  {
    name: 'Office job',
    desc: 'Office environment with sedentary tasks and minimal physical exertion.',
  },
  {
    name: 'Active labor',
    desc: 'Engaged in physically demanding work or job with significant physical activity.',
  },
  {
    name: 'Very active labor',
    desc: 'High-intensity physical labor or job requiring extensive physical exertion.',
  },
];

export const allergyOptions: RadioBasic[] = [
  {
    name: 'No Allergy',
    desc: 'No known allergies.',
  },
  {
    name: 'Gluten',
    desc: 'An allergic reaction to the gluten protein found in wheat, barley, and rye.',
  },
  {
    name: 'Dairy',
    desc: 'An allergy to milk and milk products, including lactose intolerance.',
  },
  {
    name: 'Nuts',
    desc: 'An allergy to tree nuts or peanuts, which are common allergens.',
  },
  {
    name: 'Shellfish',
    desc: 'An allergic reaction to shellfish like shrimp, crab, and lobster.',
  },
  {
    name: 'Soy',
    desc: 'An allergic reaction to soybeans and soy-based products.',
  },
  {
    name: 'Eggs',
    desc: 'An allergy to eggs, including egg whites and yolks.',
  },
  {
    name: 'Fish',
    desc: 'An allergic reaction to various types of fish.',
  },
  {
    name: 'Sesame',
    desc: 'An allergy to sesame seeds and sesame-based products.',
  },
  {
    name: 'Sulfites',
    desc: 'An allergy to sulfites used as preservatives in certain foods and beverages.',
  },
  {
    name: 'Corn',
    desc: 'An allergic reaction to corn or corn-based products.',
  },
  {
    name: 'Sodium',
    desc: 'An allergic reaction to sodium, a common component of table salt and processed foods.',
  },
  {
    name: 'Other',
    desc: 'An allergy to specific foods not listed above.',
  },
];

export const dietOptions: RadioBasic[] = [
  {
    name: 'Not applicable',
    desc: 'Select this option if you do not have any dietary preference.',
  },
  {
    name: 'Ketogenic Diet',
    desc: 'A low-carb, high-fat diet that focuses on reducing carbohydrate intake and increasing fat consumption.',
  },
  {
    name: 'Low Carb Diet',
    desc: 'A diet that restricts the consumption of carbohydrates, typically focusing on reducing intake of refined sugars and starches.',
  },
  {
    name: 'Vegan Diet',
    desc: 'A plant-based diet that excludes all animal products, including meat, dairy, eggs, and honey.',
  },
  {
    name: 'Vegetarian Diet',
    desc: 'A diet that excludes meat and seafood but allows for the consumption of other animal-derived products, such as dairy and eggs.',
  },
  {
    name: 'Paleo Diet',
    desc: 'An eating pattern that emphasizes whole foods and avoids processed foods and grains to mimic the eating patterns of our ancestors from the Paleolithic era.',
  },
  {
    name: 'Whole30',
    desc: 'A 30-day dietary program that eliminates certain food groups, such as grains, dairy, legumes, and added sugars, to reset eating habits and improve overall health.',
  },
];

export const budgetOptions: RadioBasic[] = [
  {
    name: '$ (Economical)',
    desc: 'I have a very tight budget and can spend a minimal amount on my weekly diet.',
  },
  {
    name: '$$ (Affordable)',
    desc: 'I have a limited budget and can allocate a modest amount for my weekly diet.',
  },
  {
    name: '$$$ (Moderate)',
    desc: 'I have a moderate budget and can spend a reasonable amount on my weekly diet.',
  },
  {
    name: '$$$$ (Generous)',
    desc: 'I have a generous budget and can invest a substantial amount in high-quality dietary options.',
  },
  {
    name: '$$$$$ (Flexible)',
    desc: 'I have a flexible budget and can afford premium and diverse dietary options.',
  },
];

export const fastingOptions: RadioBasic[] = [
  {
    name: 'Not Fasting',
    desc: 'Select this option if you wish to not follow any specific fasting regimen.',
  },
  {
    name: 'Intermittent Fasting',
    desc: 'Alternate between periods of eating and fasting with various schedules like 16/8 or 5:2.',
  },
  {
    name: 'Extended Fasting',
    desc: 'Engage in longer periods of fasting lasting 24 to 48 hours or more.',
  },
  {
    name: 'Time-Restricted Feeding',
    desc: 'Limit the eating window to a specific time frame each day, such as 8-hour eating and 16-hour fasting.',
  },
  {
    name: '5-Day Fasting Mimicking Diet (FMD)',
    desc: 'Follow a low-calorie diet designed to mimic fasting effects for five days.',
  },
  {
    name: 'Alternate-Day Fasting',
    desc: 'Alternate between fasting days and regular eating days, restricting calorie intake on fasting days.',
  },
  {
    name: 'OMAD (One Meal a Day)',
    desc: 'Consume all daily calories in a single meal, fasting for the rest of the day.',
  },
];

export const goalOptions: RadioBasic[] = [
  { name: 'Losing Weight', desc: 'Focus on weight loss and reducing body fat.' },
  { name: 'Building Muscle', desc: 'Emphasize building and gaining muscle mass.' },
  { name: 'Building Strength', desc: 'Prioritize increasing overall strength and power.' },
  {
    name: 'Enhancing Cardiovascular Health',
    desc: 'Improve cardiovascular fitness and endurance.',
  },
  { name: 'Managing Diabetes', desc: 'Tailored diet plan for individuals with diabetes.' },
  { name: 'Body Recomposition', desc: 'Simultaneously lose fat and gain muscle.' },
  {
    name: 'Ethical or Environment Concerns',
    desc: 'Consider ethical and environmental factors in food choices.',
  },
  { name: 'Performance Enhancement', desc: 'Optimize diet for athletic performance.' },
  { name: 'Gut Health', desc: 'Focus on improving digestive and gut health.' },
];

export const MAX_QUESTION_QUICK: number = 5;
export const MAX_QUESTION_COMPLETE: number = 7;
