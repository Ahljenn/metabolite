'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { MacrosProps, extendDietDescriptions, macroCards, quote } from './n.dashboard.utils';
import { UserScreeningType, dietRatios, activityFactor } from '@/tools/diet-rank/rank.utils';
import Image from 'next/image';
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
    const totalExpenditure: number = Math.round(
      (userData.bmr ?? 1) * activityFactor[userData.activityLevel]
    );
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
            <h2 className="whitespace-nowrap text-2xl lg:text-4xl font-bold text-center mt-5 ">
              {userData.dietChoice}
            </h2>
            <p className="opacity-50 text-sm mt-2 text-center mx-10">{quote()}</p>
          </div>
        </section>

        <main className="p-12 container mx-auto px-4 py-8 max-w-screen-xl">
          <p className="opacity-75 mx-10">{extendDietDescriptions[userData?.dietChoice ?? '']}</p>
          <div className="mt-10 text-center">
            <p>Recommended calories per day: {totalExpenditure}</p>
            <p className="mt-5 font-semibold text-lg lg:text-2xl">
              Recommended Macronutrient Ratios
            </p>
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
                            (dietRatio[macro as keyof typeof dietRatio] * totalExpenditure) /
                              calPerGram
                          )}g`
                        : 'Diet ratio not found'}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </main>
      </div>
    );
  }
};

export default NDashboard;

const Divider = () => {
  return (
    <>
      <div className={`w-full h-[5rem] bg-gradient-to-b from-black to-gray-700 opacity-30 -z-50`} />
      <div className="border w-full border-slate-700 border-y-[0.01px]" />
    </>
  );
};
