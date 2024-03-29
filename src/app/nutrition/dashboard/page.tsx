'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { MacrosProps, extendDietDescriptions, macroCards, quote } from './n.dashboard.utils';
import { UserScreeningType, dietRatios, activityFactor } from '@/tools/diet-rank/rank.utils';
import Image from 'next/image';
import fetchUserData from '@/app/services/fetchUserData';
import ModalAdvanced, { ModalInfo } from '@/app/components/ui/Modals/ModalAdvanced';
import Divider from '@/app/components/ui/Divider';

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
    return (
      <div className="mt-5 animate-pulse">
        <section className="flex justify-center">
          <div className="flex flex-col items-center justify-between w-full gap-5 mt-[5rem] max-w-5xl">
            <div className="w-32 h-4 rounded-full bg-gray-700" />
            <div className="w-[24rem] h-2 rounded-full bg-gray-700" />
          </div>
        </section>

        <div className="px-12">
          <Divider />
        </div>

        <main className="p-12 container mx-auto px-4 py-8 max-w-screen-xl">
          <div className="mt-10 text-center">
            <div className="flex justify-center gap-5 flex-col">
              <div className="w-full h-2 rounded-full bg-gray-700" />
              <div className="w-full h-2 rounded-full bg-gray-700" />
              <div className="w-full h-2 rounded-full bg-gray-700" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-10 w-[24rem] h-2 rounded-full bg-gray-700" />
          </div>

          <div className="py-8 flex flex-col sm:flex-row sm:items-end gap-5 justify-center mx-10 items-center">
            <div>
              <div className="w-[24rem] h-2 rounded-full bg-gray-700" />
            </div>
            <div className="flex justify-center gap-5 flex-col">
              <div className="w-[15rem] sm:w-[20rem] md:w-[40rem] h-2 rounded-full bg-gray-700" />
              <div className="w-[15rem] sm:w-[20rem] md:w-[40rem] h-2 rounded-full bg-gray-700" />
              <div className="w-[15rem] sm:w-[20rem] md:w-[40rem] h-2 rounded-full bg-gray-700" />
            </div>
          </div>
          <div className="mt-10 text-center text-lg lg:text-xl flex justify-center">
            <div className="w-[24rem] h-2 rounded-full bg-gray-700" />
          </div>
          <div className="mt-5 flex flex-col items-center lg:flex-row justify-center">
            {macroCards.map(
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
                    className="flex flex-col gap-5 rounded-lg border px-10 py-6 border-neutral-700 bg-neutral-800/50 mx-2 my-5 text-center sm:text-left"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[10rem] h-4 rounded-full bg-gray-700" />{' '}
                    <div className="mt-2 w-[15rem] h-2 rounded-full bg-gray-700" />
                    <div className="w-[6rem] h-3 rounded-full bg-gray-700" />
                  </div>
                );
              }
            )}
          </div>
          <div className="mt-20 flex justify-center">
            <div className="w-[24rem] h-2 rounded-full bg-gray-700" />
          </div>
        </main>
      </div>
    );
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
          <div className="flex flex-col items-center justify-between w-full gap-5 mt-10 max-w-5xl">
            <h2 className="whitespace-nowrap text-2xl lg:text-4xl font-bold text-center mt-5 ">
              {userData.dietChoice}
            </h2>
            <p className="opacity-50 text-sm mt-2 text-center mx-10">{quote()}</p>
          </div>
        </section>

        <div className="px-12">
          <Divider />
        </div>

        <main className="p-12 container mx-auto px-4 py-8 max-w-screen-xl">
          <p className="opacity-75 mx-10">{extendDietDescriptions[userData?.dietChoice ?? '']}</p>
          <div className="mt-10 text-center">
            <p className="text-center text-lg lg:text-xl">
              {' '}
              Recommended Calories Daily:
              <span className="text-metaPrimary"> {totalExpenditure}</span>
            </p>
          </div>
          <div className="py-8 flex flex-col sm:flex-row sm:items-end gap-5 justify-center mx-10">
            <div>
              <h2 className="text-lg lg:text-xl font-bold">How is this calculated?</h2>
            </div>
            <div className="opacity-75 max-w-2xl">
              Total Energy Expenditure (TEE). TEE is the total amount of energy (calories) that a
              person expends in a day. It encompasses all the energy used for various bodily
              functions, physical activity, and even the energy needed for digestion and metabolism.
            </div>
          </div>

          <div className="text-center text-lg lg:text-xl">
            <p>Recommended Macronutrient Ratios</p>
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
                        ? `${Math.round(
                            (dietRatio[macro as keyof typeof dietRatio] * totalExpenditure) /
                              calPerGram
                          )}g per day`
                        : 'Diet ratio not found'}
                    </p>
                  </div>
                );
              }
            )}
          </div>

          <div className="mt-20 text-center text-sm font-italic opacity-75">
            <p>
              If you have updated health metrics or would like to re-select your diet, you can
              refill the screening form here:
            </p>
            <a
              rel="noopener noreferrer"
              href="/nutrition/screening"
              className="text-metaPrimary hover:text-metaSecondary transition-all"
            >
              Screening{' '}
              <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                -&gt;
              </span>
            </a>
          </div>
        </main>
      </div>
    );
  }
};

export default NDashboard;
