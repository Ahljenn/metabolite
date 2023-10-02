import { ModalInfo } from '@/app/components/ui/Modals/ModalAdvanced';
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
  setModalView: React.Dispatch<React.SetStateAction<boolean>>;
  setModalInfo: React.Dispatch<React.SetStateAction<ModalInfo>>;
}

export const extendDietDescriptions: { [key: string]: string } = {
  'Ketogenic Diet': `
    The Ketogenic Diet is a low-carb, high-fat diet that focuses on reducing carbohydrate intake and increasing fat consumption. By drastically reducing carb intake, the body enters a state of ketosis, where it primarily burns fat for fuel. This diet is often used for weight loss, as well as for managing conditions like epilepsy. It requires careful planning to ensure adequate nutrient intake while staying within the strict carb limits.
  `,
  'Low Carb Diet': `
    A Low Carb Diet is a dietary approach that restricts the consumption of carbohydrates, typically focusing on reducing the intake of refined sugars and starches. By minimizing carb intake, it aims to control blood sugar levels and promote weight loss. This diet encourages the consumption of whole, unprocessed foods like vegetables, lean proteins, and healthy fats. It's important to choose nutrient-dense options to meet essential nutrient requirements.
  `,
  'Atkins Diet': `
    The Atkins Diet is a low-carb diet that emphasizes protein and fat consumption while limiting carbohydrate intake. It's divided into phases, starting with strict carb restriction and gradually reintroducing carbs in later stages. The goal is to find an individual's carbohydrate tolerance level for sustainable weight loss and improved metabolic health. It emphasizes whole foods and encourages a balance of macronutrients.
  `,
  'High-protein Diet': `
    A High-protein Diet is an eating plan that places a strong emphasis on consuming a higher proportion of protein-rich foods. It's often favored by individuals aiming to build muscle, support athletic performance, or promote satiety for weight management. Protein is essential for various bodily functions, including tissue repair and immune function. However, it's important to balance protein intake with other nutrients for overall health.
  `,
  'Paleo Diet': `
    The Paleo Diet, also known as the Caveman Diet, is an eating pattern that emphasizes whole foods and avoids processed foods and grains. It seeks to mimic the dietary habits of our ancestors from the Paleolithic era. The focus is on lean meats, fish, fruits, vegetables, nuts, and seeds. Dairy, legumes, and grains are excluded. The diet is rich in nutrients and can be beneficial for those seeking to reduce inflammation and improve nutrient intake.
  `,
  'Carnivore Diet': `
    The Carnivore Diet is an animal-based diet that primarily consists of meat and other animal products. It excludes all plant-based foods, including fruits, vegetables, and grains. Advocates claim benefits such as improved mental clarity, energy levels, and digestive health. However, it's important to note that this diet lacks certain essential nutrients found in plant-based foods, and long-term adherence may raise nutritional concerns.
  `,
  'Vegan Diet': `
    A Vegan Diet is a plant-based diet that excludes all animal products, including meat, dairy, eggs, and honey. It is centered around fruits, vegetables, whole grains, nuts, seeds, and plant-based protein sources like legumes and tofu. Vegans often choose this diet for ethical, environmental, and health reasons. Proper planning is crucial to ensure adequate intake of essential nutrients like vitamin B12, iron, and omega-3 fatty acids.
  `,
  'Vegetarian Diet': `
    A Vegetarian Diet excludes meat and seafood but allows for the consumption of other animal-derived products, such as dairy and eggs. There are various subtypes of vegetarian diets, including lacto-ovo vegetarians (who consume dairy and eggs) and lacto vegetarians (who consume dairy but not eggs). This diet can provide a wide range of nutrients, but attention should be given to meeting protein and vitamin B12 needs.
  `,
  'Pescatarian Diet': `
    A Pescatarian Diet includes fish and other seafood but excludes other types of meat. It is a plant-based diet that allows for the inclusion of nutrient-rich seafood, providing essential nutrients like omega-3 fatty acids, protein, and various vitamins and minerals. This diet can offer health benefits associated with both plant-based and fish-rich diets, including potential heart health benefits.
  `,
  'Flexitarian Diet': `
    The Flexitarian Diet is a flexible eating approach that encourages plant-based eating while allowing for occasional consumption of meat and animal products. It promotes a predominantly plant-based diet for health and environmental reasons but does not strictly eliminate meat. This diet is flexible and can be adapted to individual preferences and dietary needs while still reaping the benefits of a plant-rich eating pattern.
  `,
  'Mediterranean Diet': `
    The Mediterranean Diet is an eating pattern inspired by the traditional dietary habits of Mediterranean countries. It emphasizes whole foods like fruits, vegetables, whole grains, olive oil, nuts, and legumes. Fish and lean protein sources are also included. This diet is rich in antioxidants, healthy fats, and fiber, and is associated with numerous health benefits, including improved heart health and reduced risk of chronic diseases.
  `,
  'Zone Diet': `
    The Zone Diet is a diet that balances carbohydrates, protein, and fats in specific ratios to control insulin levels and promote weight loss. It aims to keep the body in a state called "the zone," where inflammation is minimized, and optimal metabolic function is achieved. The diet encourages a balance of macronutrients at each meal, which is believed to support overall health and well-being.
  `,
  'Weight Watchers': `
    Weight Watchers is a commercial weight loss program that assigns points to foods based on their nutritional content. It promotes a balanced and sustainable approach to weight management by assigning a point value to each food based on its nutritional profile. Participants are given a daily point allowance, and they can choose how to distribute it throughout the day. The program also emphasizes behavioral changes and support for long-term success.
  `,
  'DASH Diet': `
    The DASH Diet (Dietary Approaches to Stop Hypertension) is a diet designed to lower blood pressure and promote heart health. It emphasizes the consumption of fruits, vegetables, whole grains, lean proteins, and low-fat dairy products while limiting sodium intake. The DASH Diet is rich in essential nutrients like potassium, calcium, and fiber, which contribute to overall cardiovascular health and can benefit those with hypertension or at risk of heart disease.
  `,
};
