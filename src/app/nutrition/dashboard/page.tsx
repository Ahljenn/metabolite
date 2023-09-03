'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { MacrosProps, macroCards, quote } from './n.dashboard.utils';
import { UserScreeningType, dietRatios, activityFactor } from '@/tools/diet-rank/rank.utils';
import Image from 'next/image';
import MealTabs from './MealTabs';
import fetchUserData from '@/app/services/fetchUserData';
import ModalAdvanced, { ModalInfo } from '@/app/components/ui/Modals/ModalAdvanced';

const NDashboard = () => {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<UserScreeningType>();
  const [isEffectRun, setIsEffectRun] = useState(false);

  const [modalView, setModalView] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState<ModalInfo>({
    titleTxt: '',
    descTxt: '',
    rejectTxt: '',
    acceptTxt: '',
  });

  useEffect(() => {
    if (!isEffectRun && session?.user?.email) {
      fetchUserData({
        userEmail: session?.user?.email || '', // Make sure to handle the case when userEmail is undefined
        setUserData,
        setIsEffectRun,
      });
    }
  }, [session?.user?.email, isEffectRun]);

  // Replace with loading animation
  if (!isEffectRun) {
    return <>Loading...</>;
  }

  // console.table(userData);

  if (!userData) {
    return (
      <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl flex flex-col items-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mt-5">No results</h1>
        <p className="mt-5 text-center opacity-75 mx-10 w-3/4">
          Looks like you have no screening results! Let&apos;s navigate back to the nutrition page
          to get started.
        </p>
        <div className="mt-5">
          <a
            className="mt-5 border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
            href="/nutrition/screening"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-5">
        <ModalAdvanced
          title={modalInfo.titleTxt}
          description={modalInfo.descTxt}
          modalView={modalView}
          setModalView={setModalView}
          acknowledgeText={modalInfo.acceptTxt}
          onAcknowledge={() => {
            setModalView(false);
          }}
          rejectText={modalInfo.rejectTxt}
          onReject={() => {
            setModalView(false);
          }}
        />
        <section className="flex justify-center">
          <div className="flex flex-col items-center lg:flex-row justify-between w-full gap-5 mt-10 max-w-5xl">
            <Image
              className="grayscale"
              src="/eating.png"
              alt="Person eating food"
              width={500}
              height={500}
              quality={100}
              priority
            />

            <div className="lg:w-1/2">
              <h2 className="whitespace-nowrap text-2xl lg:text-4xl font-bold text-center mt-5 ">
                Ignite Vitality.
              </h2>

              <p className="opacity-50 text-sm mt-2 text-center mx-10">{quote()}</p>
            </div>
          </div>
        </section>

        <div
          className={`w-full h-[8rem] bg-gradient-to-b from-black to-gray-700  opacity-30 -z-50`}
        />
        <div className="border w-full border-slate-700 border-y-[0.01px]" />

        <main className="gap-5 flex flex-col items-center">
          <h3 className="text-center mt-10 text-lg font-thin">
            Path:
            <p className="inline text-metaAccent"> {userData.dietChoice}</p>
          </h3>

          <Macros userData={userData} setModalView={setModalView} setModalInfo={setModalInfo} />

          <MealTabs setModalView={setModalView} setModalInfo={setModalInfo} />
        </main>
      </div>
    );
  }
};

export default NDashboard;

const Macros: React.FC<MacrosProps> = ({ userData, setModalView, setModalInfo }) => {
  const onLogClick = () => {
    setModalInfo({
      titleTxt: 'Logging Nutrition Information',
      descTxt: 'Please provide the details for the new nutrition source:',
      rejectTxt: 'Cancel',
      acceptTxt: 'Log',
    });
    setModalView(true);
  };

  const onRatioClick = () => {
    setModalInfo({
      titleTxt: 'Modify Ratios',
      descTxt: 'Please provide the details for the new macro-nutrient ratios:',
      rejectTxt: 'Cancel',
      acceptTxt: 'Save',
    });
    setModalView(true);
  };

  // TDEE
  const totalExpenditure: number = Math.round(
    (userData.bmr ?? 1) * activityFactor[userData.activityLevel]
  );

  return (
    <section className="flex flex-col justify-center">
      <div
        className="flex flex-col lg:flex-row gap-5 items-center justify-between rounded-lg border px-10 py-6 border-neutral-700 bg-neutral-800/50 mx-2 transition-all duration-500"
        rel="noopener noreferrer"
      >
        <div>
          <p className={`mb-3 text-2xl font-semibold`}>Calories</p>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Total Calories</p>
          <p>0 of {totalExpenditure} cal</p>
        </div>

        <div>
          <button
            className="text-sm transition-all border rounded-lg py-3 px-10 whitespace-nowrap border-metaAccent/80 bg-neutral-800/70 hover:border-metaAccent/50"
            onClick={onLogClick}
          >
            Start Logging
          </button>
        </div>
      </div>
      <div className="mt-5 flex justify-center lg:justify-start">
        <button
          className="text-sm transition-all border rounded-lg mx-2 py-3 px-10 whitespace-nowrap border-metaAccent/80 bg-neutral-800/70 hover:border-metaAccent/50"
          onClick={onLogClick}
        >
          Modify Ratios
        </button>
      </div>
      <div className="flex flex-col items-center lg:flex-row justify-center">
        {macroCards.map(
          (
            card: {
              header: string;
              desc: string;
            },
            index: number
          ) => {
            const dietName: string = userData.dietChoice ?? 'Low Carb Diet'; // Replace with the appropriate diet name
            const dietRatio = dietRatios[dietName];
            const macro = card.header;
            const calPerGram = macro === 'Fat' ? 9 : 4;

            return (
              <div
                key={index}
                className="rounded-lg border px-10 py-6 border-neutral-700 bg-neutral-800/50 mx-2 my-5 text-center sm:text-left"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-lg md:text-2xl font-semibold`}>{macro}</h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{card.desc}</p>
                <p>
                  {dietRatio
                    ? `0 of ${Math.round(
                        (dietRatio[macro as keyof typeof dietRatio] * totalExpenditure) / calPerGram
                      )}g`
                    : 'Diet ratio not found'}
                </p>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};
