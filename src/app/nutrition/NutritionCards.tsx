'use client';
import { useState } from 'react';
import ModalBasic from '@/app/components/ui/Modals/ModalBasic';

interface ModalDataType {
  title?: string;
  desc?: string;
}

const NutritionCards = () => {
  const [modalView, setModalView] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalDataType>({ title: 'None', desc: 'None' });
  return (
    <div className="mt-20 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left gap-5 mx-10">
      <ModalBasic
        title={modalData?.title}
        description={modalData?.desc}
        modalView={modalView}
        setModalView={setModalView}
      />
      {nutritionCardData.map(
        (
          card: {
            header: string;
            desc: string;
            info: string;
          },
          index: number
        ) => {
          return (
            <div
              key={index}
              className={`${
                card.header === 'Diet' ? 'md:col-span-2' : ''
              } rounded-lg cursor-pointer border px-5 py-4 border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition-all`}
              rel="noopener noreferrer"
              onClick={() => {
                setModalData({
                  title: card.header,
                  desc: card.info,
                });
                setModalView(true);
              }}
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>{card.header}</h2>
              <p
                className={`m-0 ${
                  card.header === 'Diet' ? 'md:max-w-[70ch]' : 'md:max-w-[30ch]'
                } text-sm opacity-50`}
              >
                {card.desc}
              </p>
            </div>
          );
        }
      )}
    </div>
  );
};
const nutritionCardData: {
  header: string;
  desc: string;
  info: string;
}[] = [
  {
    header: 'Diet',
    desc: 'The specific food and drinks a person consumes regularly to meet their nutritional needs and achieve their health and fitness goals. The goal of a diet is often to achieve specific health and fitness objectives, such as weight management, muscle gain, improved athletic performance, or the prevention of chronic diseases. Different dietary approaches, such as vegetarian, vegan, Mediterranean, or low-carb diets, exist to cater to individual needs and preferences.',
    info: 'A diet is not just about what you eat, but also how it can impact your overall well-being. It plays a crucial role in providing the necessary nutrients for your body to function optimally.',
  },
  {
    header: 'Basal Metabolic Rate',
    desc: 'Learn more about the amount of energy expended by your body at rest to maintain basic bodily functions such as breathing, circulation, and cell production.',
    info: 'Basal Metabolic Rate (BMR) is a key factor in understanding how many calories your body needs to maintain its essential functions, even when you are at rest.',
  },
  {
    header: 'Nutrients',
    desc: 'The essential components of food that are vital for optimal fitness and health.',
    info: 'Nutrients encompass a wide range of substances, including vitamins, minerals, carbohydrates, proteins, and fats, all of which are necessary for various physiological processes in the body.',
  },
  {
    header: 'Water',
    desc: 'A vital liquid essential for maintaining hydration, regulating body temperature, transporting nutrients, and eliminating waste from the body.',
    info: 'Water is often referred to as the "elixir of life" due to its critical role in numerous bodily functions, including maintaining electrolyte balance and supporting cellular processes.',
  },
  {
    header: 'Fasting',
    desc: 'Often practiced for various health and spiritual reasons, or as a strategy for weight management and metabolic health.',
    info: 'Fasting involves voluntarily abstaining from food for a specified period. It can have different effects on the body, ranging from promoting fat utilization to providing potential mental and spiritual benefits.',
  },
];

export default NutritionCards;
