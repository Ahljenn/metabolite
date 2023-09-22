import {
  UserScreeningType,
  EntryType,
  calculateBmr,
  activityMultiplier,
  workMultiplier,
  fastingOptions,
  goalOptions,
  clusterMap,
} from './rank.utils';

// User's cluster "score"
let clusterScore: { [key: string]: number } = {
  KTO: 0.0,
  HPO: 0.0,
  VEG: 0.0,
  FLX: 0.0,
  ZON: 0.0,
};

export const rank = (
  metrics: UserScreeningType,
  normalizeScore: boolean = false
): [number, string[]] => {
  const bmr = calculateBmr(metrics.weight, metrics.height, metrics.age, metrics.gender);
  const normalizedBmr = bmr / 1000;

  // Diminishing factor based on BMR value for KTO, VEG, FLX
  // The higher the BMR, the greater caloric needs will be for certain diets
  clusterScore['KTO'] += 1 / Math.log(normalizedBmr);
  clusterScore['HPO'] += Math.sqrt(normalizedBmr);
  clusterScore['VEG'] += 1 / Math.log(normalizedBmr);
  clusterScore['FLX'] += 1 / Math.log(normalizedBmr);
  clusterScore['ZON'] += Math.sqrt(normalizedBmr);

  // Compute on activity and work multipliers
  const activityLevel = metrics.activityLevel;
  const workExertion = metrics.workExertion;
  clusterScore['KTO'] += (activityMultiplier[activityLevel] + workMultiplier[workExertion]) * 1.05;
  clusterScore['HPO'] += (activityMultiplier[activityLevel] + workMultiplier[workExertion]) * 1.45;
  clusterScore['VEG'] += (activityMultiplier[activityLevel] + workMultiplier[workExertion]) * 1.05;
  clusterScore['FLX'] += (activityMultiplier[activityLevel] + workMultiplier[workExertion]) * 1.35;
  clusterScore['ZON'] += (activityMultiplier[activityLevel] + workMultiplier[workExertion]) * 1.25;

  // Health Goals
  const goal = metrics.healthGoal;
  if (goal === 'Building Muscle' || goal === 'Building Strength') {
    clusterScore['HPO'] += 3;
    clusterScore['KTO'] += 0.5;
    clusterScore['VEG'] -= 1;
  } else if (
    goal === 'Losing Weight' ||
    goal === 'Enhancing Cardiovascular Health' ||
    goal === 'Managing Diabetes'
  ) {
    clusterScore['ZON'] += 3;
    clusterScore['KTO'] += 1;
    clusterScore['VEG'] += 0.5;
  } else if (goal === 'Performance Enhancement' || goal === 'Body Recomposition') {
    clusterScore['HPO'] += 3;
    clusterScore['FLX'] += 1;
  } else if (goal === 'Ethical or Environment Concerns') {
    clusterScore['VEG'] += 5;
    clusterScore['FLX'] += 3;
    clusterScore['HPO'] -= 1;
  } else if (goal === 'Gut Health') {
    clusterScore['FLX'] += 2;
    clusterScore['KTO'] += 0.5;
  }

  // Existing dietary preferences
  const pref = metrics.dietPref;
  if (pref === 'Ketogenic Diet') {
    clusterScore['KTO'] += 5;
  } else if (pref === 'Zone Diet') {
    clusterScore['ZON'] += 5;
  } else if (pref === 'Vegan Diet') {
    clusterScore['VEG'] += 5;
    clusterScore['FLX'] += 2.5;
  } else if (pref === 'Paleo Diet') {
    clusterScore['HPO'] += 5;
  }

  // Normalize scores to between 0 - 1
  if (normalizeScore) {
    const allScores = Object.values(clusterScore);
    const maxScore = Math.max(...allScores);
    const minScore = Math.min(...allScores);

    for (const key in clusterScore) {
      clusterScore[key] = (clusterScore[key] - minScore) / (maxScore - minScore);
    }
  }

  // Find best cluster value
  const bestCluster = Object.entries(clusterScore).reduce(
    (maxEntry: EntryType, currentEntry: EntryType): EntryType => {
      const [maxKey, maxValue] = maxEntry;
      const [currentKey, currentValue] = currentEntry;

      return currentValue > maxValue ? currentEntry : maxEntry;
    },
    [null, -Infinity]
  );

  const [bestKey, bestValue] = bestCluster;

  // console.table(clusterScore);
  // console.log('BMR:', bmr, 'calories per day');
  // console.log('Normalized rank value: ', bestValue); // i.e - Output: 2.0 (or the highest score)
  // console.log('Recommend Diets: '); // i.e - Output: "KTO" (or the key with the highest score)
  // console.table(clusterMap[bestKey ?? 0]);
  return [bmr, clusterMap[bestKey ?? 0]];
};
