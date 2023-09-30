import Image from 'next/image';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Updates',
};

const notes: {
  title: string;
  details: string[];
  author: string;
}[] = [
  {
    title: 'Developer Update - September 30, 2023',
    details: [
      'Enhanced mobile view and adjusted hero section widths.',
      'Refactored hero sections for better performance and page load optimization.',
      'Streamlined UI elements for improved user experience.',
      'Implemented advanced calculators including BMI and unit conversion.',
      'Added features like dividers for clearer section separation.',
      'Optimized body fat calculation with gender-specific parameters.',
      'Restyled and fine-tuned BMR calculator.',
      'Updated and consolidated content across pages for smoother navigation.',
      'Removed redundant images for improved loading times.',
    ],
    author: 'Ahljenn',
  },
  {
    title: 'Developer Update - September 21, 2023',
    details: [
      'Added a unit converter to the screening feature.',
      'Implemented string formatting for enhanced user experience.',
      'Integrated a working calculator for Basal Metabolic Rate (BMR) calculations.',
      'Implemented a check to verify if state exists and added a BMR value placeholder.',
      'Disabled input fields for kilograms and centimeters.',
      'Some more updates in the recent weeks:',
      'Restyled the BMR calculator in the nutrition/calculator section.',
      'Added functionality for backwards conversion.',
      'Introduced additional metrics, with plans to enhance the unit converter.',
      'Adjusted border colors for a more polished look.',
      'Included a route for smoother navigation.',
    ],
    author: 'Ahljenn',
  },
];

const Updates: React.FC = (): JSX.Element => {
  return (
    <section className={`flex flex-col items-center justify-between p-12`}>
      <h1 className="text-2xl sm:text-4xl font-bold text-center mt-5">Updates & Highlights</h1>
      <main className="">
        {notes.map((note, index) => (
          <div key={index} className="mt-10 p-4 max-w-6xl mx-auto rounded-md shadow-md">
            <h2 className="sm:text-xl font-semi-bold mb-2">{note.title}</h2>
            <ul className="list-disc pl-4 font-thin mb-4">
              {note.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <p className="text-metaAccent italic"> - {note.author}</p>
          </div>
        ))}
      </main>
    </section>
  );
};
export default Updates;
