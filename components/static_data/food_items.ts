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
    name: 'Egg',
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
    name: 'Steak',
    source: 'Protein',
    vit_min: 'Vitamin B12, Zinc',
    info: 'N/A',
  },
  {
    name: 'Pork Belly',
    source: 'Fat',
    vit_min: '...',
    info: 'N/A',
  },
  {
    name: 'Chicken',
    source: 'Protein',
    vit_min: '...',
    info: 'N/A',
  },
  {
    name: 'Salmon',
    source: 'Fat',
    vit_min: 'Vitamin B12',
    info: 'Great source of omega-3 fatty acids',
  },
  {
    name: 'Ground Beef',
    source: 'Overall',
    vit_min: '...',
    info: 'N/A',
  },
  {
    name: 'Carb Balance Tortilla',
    source: 'Fiber',
    vit_min: '...',
    info: 'Great replacement for tortillas',
  },
  {
    name: 'Almond',
    source: 'Protein',
    vit_min: 'Vitamin E, Magnesium',
    info: 'N/A',
  },
  {
    name: 'Walnut',
    source: 'Fat',
    vit_min: 'Polyunsaturated Fat',
    info: 'Tremendous source of fat',
  },
  {
    name: 'Almond Butter',
    source: 'Fat',
    vit_min: '...',
    info: 'N/A',
  },
];
