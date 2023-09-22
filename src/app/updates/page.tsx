import Image from 'next/image';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Updates',
};

const Updates: React.FC = (): JSX.Element => {
  return (
    <section className={`flex flex-col items-center justify-between p-12`}>
      <h1 className="text-2xl sm:text-4xl font-bold text-center mt-5">Updates & Highlights</h1>
      <section className="mt-10 p-4 max-w-6xl mx-auto rounded-md shadow-md">
        <h2 className="sm:text-xl font-semi-bold mb-2">Developer Update - September 21, 2023</h2>
        <ul className="list-disc pl-4 font-thin mb-4">
          <li>Added a unit converter to the screening feature.</li>
          <li>Implemented string formatting for enhanced user experience.</li>
          <li>Integrated a working calculator for Basal Metabolic Rate (BMR) calculations.</li>
          <li>Implemented a check to verify if state exists and added a BMR value placeholder.</li>
          <li>Disabled input fields for kilograms and centimeters.</li>
        </ul>
        <p className="mb-4">Some more updates in the recent weeks:</p>
        <ul className="list-disc pl-4 font-thin mb-4">
          <li>Restyled the BMR calculator in the nutrition/calculator section.</li>
          <li>Added functionality for backwards conversion.</li>
          <li>Introduced additional metrics, with plans to enhance the unit converter.</li>
          <li>Adjusted border colors for a more polished look.</li>
          <li>Included a route for smoother navigation.</li>
        </ul>
        <p className="text-metaAccent italic"> - Ahljenn</p>
      </section>
    </section>
  );
};
export default Updates;
