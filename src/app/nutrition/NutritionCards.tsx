'use client';
import { useState } from 'react';
import Modal from '../components/ui/Modal';

interface ModalDataType {
  title?: string;
  desc?: string;
}

const NutritionCards = () => {
  const [modalView, setModalView] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalDataType>({ title: 'None', desc: 'None' });
  return (
    <div className="mt-20 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left gap-5 mx-10">
      <Modal
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
                  desc: card.desc,
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

const nutritionCardData: { header: string; desc: string }[] = [
  {
    header: 'Diet',
    desc: 'The specific food and drinks a person consumes regularly to meet their nutritional needs and achieve their health and fitness goals. The goal of a diet is often to achieve specific health and fitness objectives, such as weight management, muscle gain, improved athletic performance, or the prevention of chronic diseases. Different dietary approaches, such as vegetarian, vegan, Mediterranean, or low-carb diets, exist to cater to individual needs and preferences.',
  },
  {
    header: 'Basal Metabolic Rate',
    desc: 'Learn more about the amount of energy expended by your body at rest to maintain basic bodily functions such as breathing, circulation, and cell production.',
  },
  {
    header: 'Nutrients',
    desc: 'The essential components of food that are vital for optimal fitness and health.',
  },

  {
    header: 'Water',
    desc: 'A vital liquid essential for maintaining hydration, regulating body temperature, transporting nutrients, and eliminating waste from the body.',
  },
  {
    header: 'Fasting',
    desc: 'Often practiced for various health and spiritual reasons, or as a strategy for weight management and metabolic health.',
  },
];

export default NutritionCards;
