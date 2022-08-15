export interface FoodItem {
  name: string;
  source?: string;
  vit_min?: string;
  info?: string;
}

export const good_foods: FoodItem[] = [
  {
    name: 'Cheese',
    source: 'Protein',
    vit_min: 'Calcium',
    info: 'N/A',
  },
  {
    name: 'Butter',
    source: 'Protein',
    vit_min: 'Vitamin D',
    info: 'Use for cooking',
  },
  {
    name: 'Eggs',
    source: 'Protein',
    vit_min: 'Calcium',
    info: 'N/A',
  },
  {
    name: 'Bacon',
    source: 'Fat',
    vit_min: 'Calcium',
    info: 'N/A',
  },
  {
    name: 'Breakfast Sausage',
    source: 'Protein',
    vit_min: 'Vitamin B-12, Iron',
    info: 'N/A',
  },
  {
    name: 'Bratwurst',
    source: 'Protein',
    vit_min: 'Thiamin',
    info: 'N/A',
  },
];
