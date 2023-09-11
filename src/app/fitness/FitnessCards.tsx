'use client';
import { useState } from 'react';
import ModalBasic from '@/app/components/ui/Modals/ModalBasic';

interface ModalDataType {
  title?: string;
  desc?: string;
}

const FitnessCards = () => {
  const [modalView, setModalView] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalDataType>({ title: 'None', desc: 'None' });

  return (
    <>
      <h2 className="text-2xl font-semibold">Featured Strength Tools</h2>
      <div className="mt-10 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left gap-5 mx-10">
        <ModalBasic
          title={modalData?.title}
          description={modalData?.desc}
          modalView={modalView}
          setModalView={setModalView}
        />
        {fitnessCardData.map(
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
                } rounded-lg cursor-pointer border px-5 py-4 border-cyan-800 bg-neutral-900 hover:border-cyan-300 transition-all`}
                rel="noopener noreferrer"
                onClick={() => {
                  setModalData({
                    title: card.header,
                    desc: card.info,
                  });
                  setModalView(true);
                }}
              >
                <h2 className={`mb-3 text-xl font-semibold`}>{card.header}</h2>
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
    </>
  );
};

const fitnessCardData: {
  header: string;
  desc: string;
  info: string;
}[] = [
  {
    header: 'Strength Level Standards',
    desc: 'Discover where you stand on the strength spectrum for various exercises. Gauge your performance against established strength level standards.',
    info: 'Input your lifting stats and get an instant assessment of your strength level. Compare your progress over time and set new goals.',
  },
  {
    header: 'One Rep Max Calculator',
    desc: 'Calculate your one-rep maximum (1RM) for various exercises. Determine your peak strength for optimal training intensity.',
    info: 'Simply enter your lifting data, and let our calculator do the rest. Use this valuable tool to fine-tune your workout routine and achieve peak performance.',
  },
  {
    header: 'Fitness Rankings',
    desc: 'Get a comprehensive view of your overall strength across various lifts compared to the wider fitness community.',
    info: 'Explore leaderboards, track your performance, and get motivated by seeing how you measure up. Use this tool to set new goals and push your limits.',
  },
];

export default FitnessCards;