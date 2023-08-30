import { UserScreeningType } from '@/tools/diet-rank/rank.utils';

const nutritionQuotes: string[] = [
  '"Let food be thy medicine and medicine be thy food." - Hippocrates',
  '"Your diet is a bank account. Good food choices are good investments." - Bethenny Frankel',
  '"It\'s not about eating less. It\'s about eating right." - Anonymous',
  '"Take care of your body. It\'s the only place you have to live." - Jim Rohn',
  '"When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need." - Ayurvedic Proverb',
  '"Our bodies are our gardens—our wills are our gardeners." - William Shakespeare',
  '"Tell me what you eat, and I will tell you what you are." - Anthelme Brillat-Savarin',
  '"Your body is a temple, but only if you treat it as one." - Astrid Alauda',
  '"Life expectancy would grow by leaps and bounds if green vegetables smelled as good as bacon." - Doug Larson',
  '"The best doctor gives the least medicines." - Benjamin Franklin',
  '"Every time you eat or drink, you are either feeding disease or fighting it." - Heather Morgan',
  '"If you’re not hungry enough to eat an apple, you’re probably not hungry." - Dr. Loraine Day',
  '"Let your food be your medicine, and your medicine be your food." - Hippocrates',
  '"The greatest wealth is health." - Virgil',
];

export const quote = (): string => {
  return nutritionQuotes[Math.floor(Math.random() * nutritionQuotes.length)];
};

interface MacroInterfaceProps {
  header: string;
  desc: string;
}

export const macroCards: MacroInterfaceProps[] = [
  {
    header: 'Protein',
    desc: 'Your remaining protein for today.',
  },
  {
    header: 'Carbohydrate',
    desc: 'Your remaining carbs for today.',
  },
  {
    header: 'Fat',
    desc: 'Your remaining fats for today.',
  },
];

export interface MacrosProps {
  userData: UserScreeningType;
}
