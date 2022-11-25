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
        <input type="number" placeholder="21"></input>

        <h1 className="font-bold mt-2 mb-1">Gender</h1>
        <form>
          <input type="radio" name="gender" value="male"></input>
          <p className="inline mx-2 mr-10">Male</p>
          <input type="radio" name="gender" value="female"></input>
          <p className="inline mx-2 mr-10">Female</p>
          <input type="radio" name="gender" value="other"></input>
          <p className="inline mx-2">Other</p>
        </form>

        <h1 className="font-bold mt-2 mb-1">Height</h1>
        <div className="flex">
          <input type="number" placeholder="Feet"></input>
          <input type="number" placeholder="Inches"></input>
        </div>

        <h1 className="font-bold mt-2 mb-1">Weight</h1>
        <input type="number" placeholder="Pounds"></input>

        <h1 className="font-bold mt-2 mb-1">Estimation Formula</h1>

        <form>
          <div>
            <input type="radio" name="bmr-type" id="mifflin" value="mifflin"></input>
            <label htmlFor="mifflin" className="inline mx-2">
              Mifflin St Jeor (Default)
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

        <div className="flex flex-col items-center sm:flex-row justify-between">
          <button className="mt-5 w-[10rem] py-2 text-lg bg-secondary text-black rounded-xl shadow-xl hover:bg-tertiary transition duration-300">
            Unit converter
          </button>
          <button className="mt-5 w-[10rem] py-2 text-lg bg-secondary text-black rounded-xl shadow-xl hover:bg-tertiary transition duration-300">
            Calculate
          </button>
        </div>
      </section>
    </div>
  );
};

export default BmrCalculator;
