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
    title: 'Developer Update - November 10, 2023',
    details: [
      'Refactored subroute indication logic in navigation.',
      'Optimized link references with <Link> for improved performance.',
      'Enhanced standards navigation with active route indication.',
      'Disabled fitness navigation on the root layout.',
      'Unified standards button color for consistent styling.',
      'Added icons and color changes to standards buttons.',
      'Improved mobile responsiveness for buttons.',
      'Implemented root layout for standards buttons.',
      'Created a reusable standard buttons component.',
      'Introduced deadlift and bench standards.',
      'Adjusted text content for squats.',
      'Resolved build error for better development workflow.',
      'Enhanced text multipliers information.',
      'Added content for squat standards.',
      'Updated multipliers data for squats.',
      'Introduced a table for squat standards.',
      'Reordered fitness cards for better user experience.',
    ],
    author: 'Ahljenn',
  },
  {
    title: 'Developer Update - October 31, 2023',
    details: [
      'Added standards files.',
      'Changed routing and added folders.',
      'Adjusted card data for related strength standards.',
      'Temporarily removed metabolite score link.',
      'Refined skeleton loader to align items.',
      'Implemented skeleton loading to dashboard.',
      'Added custom 404 page.',
      'Enhanced frontend image upload design.',
      'Added developer notes for the week.',
      'Integrated metabolite score as middleware route.',
    ],
    author: 'Ahljenn',
  },
  {
    title: 'Developer Update - October 14, 2023',
    details: [
      'Implemented metabolite scoring as middleware.',
      'Enhanced frontend API endpoint for feature extraction.',
      'Added numeric conversion for ingredient analysis.',
      'Improved extraction algorithm for better accuracy.',
      'Enhanced detection of additives and ingredients.',
      'Introduced red label feature for additives.',
      'Optimized RPE computation for accuracy.',
      'Improved OCR image processing.',
      'Added ML service route and refactored API names.',
      'Optimized styling for image and uploader components.',
      'Enhanced mobile view styling for improved UI.',
      'Added explanatory frontend component.',
      'Implemented robust optical character recognition.',
      'Integrated Tesseract for advanced OCR functionality.',
    ],
    author: 'Ahljenn',
  },
  {
    title: 'Developer Update - October 7, 2023',
    details: [
      'Implemented an RPE (Rate of Perceived Exertion) calculator, acknowledging potential accuracy limitations.',
      'Enhanced table responsiveness to ensure optimal user experience.',
      'Optimized the One Rep Max calculator by swapping rows and columns for improved usability.',
      'Added an RPE scale and corresponding inputs for precise assessments.',
      'Introduced backspace functionality and revalidation for BMR metrics on the screening page.',
      'Resolved backspace behavior on input fields for the calculators page.',
      'Reintegrated a previously omitted image for comprehensive visual context.',
      'Implemented a functional One Rep Max calculator, accommodating up to 50% of ORM for accurate strength assessments.',
      'Removed top margin for a streamlined and visually polished layout.',
      'Incorporated single rep max calculations and a structured table for easy reference.',
      'Provided source information for One Rep Max calculations, ensuring transparency in methodology.',
      'Initiated an One Rep Max beginning page with necessary input refinements.',
      'Added an option to redo screening assessments for thorough evaluation.',
      'Adjusted terminology for clearer understanding and user-friendly interaction.',
      'Resolved text display on mobile view for improved legibility and accessibility.',
      'Introduced a divider component for more organized content presentation.',
      'Added comprehensive information on Total Energy Expenditure (TEE) for enhanced nutritional tracking.',
      'Styled daily calorie display for a clear and intuitive representation of nutritional data.',
      'Conducted a refactor of the dashboard, resulting in a more efficient and user-centric nutrition management system.',
      'Removed extraneous component imports in dash for a cleaner codebase.',
      'Streamlined the interface by eliminating the chart component for simplified navigation and data presentation.',
      'Uninstalled superfluous dependencies and deprecated Redux integration for a leaner application stack.',
      'Included an informative guide on vitamins and nutrients to empower users with essential knowledge for optimal health.',
    ],
    author: 'Ahljenn',
  },
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
