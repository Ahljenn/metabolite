import { useState } from 'react';

// Add unit converter calculator

const BmrCalculator: React.FC = (): JSX.Element => {
  const [age, setAge] = useState<number>();
  const [gender, setGender] = useState<number>();
  const [feet, setFeet] = useState<number>();
  const [inches, setinches] = useState<number>();
  const [pounds, setPounds] = useState<number>();
  const [estimationFormula, setFormula] = useState<string>('');

  return (
    <div className="mt-10 flex justify-center mb-[10rem]">
      <section className="w-full sm:w-[35rem] border p-10 sm:rounded-lg shadow-xl">
        <h1 className="font-bold mb-1">Age</h1>
        <input type="number" placeholder="Years (21)"></input>

        <h1 className="font-bold mt-2 mb-1">Gender</h1>
        <form>
          <input type="radio" name="gender" id="male" value="male"></input>
          <label htmlFor="male" className="inline mx-2 mr-10">
            Male
          </label>
          <input type="radio" name="gender" id="female" value="female"></input>
          <label htmlFor="female" className="inline mx-2 mr-10">
            Female
          </label>
          <input type="radio" name="gender" id="other" value="other"></input>
          <label htmlFor="other" className="inline mx-2">
            Other
          </label>
        </form>

        <h1 className="font-bold mt-2 mb-1">Height</h1>
        <div className="flex">
          <input type="number" placeholder="Feet (5)"></input>
          <input type="number" placeholder="Inches (11)"></input>
        </div>

        <div className="mt-5 flex justify-between items-center">
          <span>
            <h1 className="font-bold">Weight</h1>
          </span>
          <span>
            <button className=" w-[8rem] py-2 mb-5 text-sm bg-secondary text-black rounded-xl shadow-xl hover:bg-tertiary transition duration-300">
              Unit converter
            </button>
          </span>
        </div>
        <input type="number" placeholder="Pounds (190)"></input>
        <h1 className="font-bold mt-2 mb-1">Estimation Formula</h1>

        <form>
          <div>
            <input type="radio" name="bmr-type" id="mifflin" value="mifflin"></input>
            <label htmlFor="mifflin" className="inline mx-2">
              Mifflin St Jeor (Recommended)
            </label>
          </div>

          <div>
            <input type="radio" name="bmr-type" id="revised-hb" value="revised-hb"></input>
            <label htmlFor="revised-hb" className="inline mx-2">
              Revised Harris-Benedict
            </label>
          </div>

          <div>
            <input type="radio" name="bmr-type" id="katch" value="katch"></input>
            <label htmlFor="katch" className="inline mx-2">
              Katch-McArdle
            </label>
          </div>
        </form>

        <div className="mt-5 flex flex-col items-center sm:flex-row justify-between gap-2">
          <button className="mt-5 w-[8rem] py-2 text-sm bg-secondary text-black rounded-xl shadow-xl hover:bg-tertiary transition duration-300">
            Calculate
          </button>
          <span>
            <p className="mt-5">
              BMR:
              <span className="bg-gray-100 border-2 rounded-lg border-secondary mx-2 px-2 py-1 font-bold text-secondary">
                (1,889)
              </span>
              Calories per/day
            </p>
          </span>
        </div>
      </section>
    </div>
  );
};

export default BmrCalculator;
