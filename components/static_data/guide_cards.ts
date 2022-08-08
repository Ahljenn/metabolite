export interface PageData {
  heading: string;
  description: string;
  route: string;
}

export const guide_cards: PageData[] = [
  {
    heading: 'What can I eat?',
    description:
      'After walking around the grocery store and looking at different foods, you may be curious which ones are good for you.',
    route: '/nutrients',
  },
  {
    heading: 'Nutrients',
    description:
      'Eat to be healthy, don’t focus on only losing the weight. Learn how macro and micro nutrients work together.',
    route: '/nutrients',
  },
  {
    heading: 'Supplements',
    description:
      'Supplements can optimize your ketogenic burn. Learn which ones to take, and which ones to avoid.',
    route: '/supplements',
  },
  {
    heading: 'Exercise',
    description:
      'Do you have to exercise often for this diet? Learn more about how exercise interacts with this diet.',
    route: '/exercise',
  },
  {
    heading: 'The Keto Flu',
    description:
      'When you first start keto you may feel flu-like symptoms. Learn more about what you can do when this happens.',
    route: '/keto-flu',
  },
  {
    heading: 'Nutritional Fasting',
    description:
      'Fasting a power tool for dieting coming in many different forms. Find out which method of fasting is suited for you.',
    route: '/fasting',
  },
  {
    heading: 'What to expect',
    description:
      'Your body will go through some drastic changes. Here are the things to expect during a ketogenic diet.',
    route: '/expectations',
  },
  {
    heading: 'Cheat meals?',
    description:
      'Cheat meals allow you to take a short break from your strict diet, but should you do cheat meals with keto?',
    route: '/cheat-meals',
  },
];
