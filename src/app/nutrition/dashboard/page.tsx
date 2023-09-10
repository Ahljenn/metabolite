'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { MacrosProps, macroCards, quote } from './n.dashboard.utils';
import { UserScreeningType, dietRatios, activityFactor } from '@/tools/diet-rank/rank.utils';
import Image from 'next/image';
import MealTabs from './MealTabs';
import fetchUserData from '@/app/services/fetchUserData';
import ModalAdvanced, { ModalInfo } from '@/app/components/ui/Modals/ModalAdvanced';
import Macros from './Macros';
import IntakeChart from './IntakeChart';

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

        <Divider />

        <main className="gap-5 flex flex-col items-center">
          <h3 className="text-center mt-10 text-lg font-thin">
            Path:
            <p className="inline text-metaAccent"> {userData.dietChoice}</p>
          </h3>

          <Macros userData={userData} setModalView={setModalView} setModalInfo={setModalInfo} />

          <MealTabs setModalView={setModalView} setModalInfo={setModalInfo} />
        </main>

        <Divider />

        {/* <section>
          <div className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12 bg-neutral-900">
            <h3 className="text-center text-lg font-thin">Health Tracker</h3>
            <IntakeChart />
          </div>
        </section> */}
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
