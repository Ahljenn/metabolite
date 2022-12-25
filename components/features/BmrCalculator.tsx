import { Agent } from 'https';
import { useState } from 'react';
import Converter from '../features/Converter';

interface BmrData_T {
  age: number;
  gender: string;
  feet: number;
  inches: number;
  pounds: number;
  estimationFormula: string;
}

const toCm = (feet: number, inches: number): number => {
  return feet * 30.48 + inches * 2.54;
};

const toKg = (pound: number): number => {
  return pound / 2.2046;
};

const Calculate = (
  age: number,
  gender: string,
  feet: number,
  inches: number,
  pounds: number,
  estimationFormula: string
): string => {
  let val: string;
  switch (estimationFormula) {
    case 'mifflin':
      if (gender === 'male') {
        val = (10 * toKg(pounds) + (6.25 * toCm(feet, inches) - 5 * age) - 5).toFixed(1);
      } else {
        val = (10 * toKg(pounds) + (6.25 * toCm(feet, inches) - 5 * age) - 161).toFixed(1);
      }
      break;
    case 'revised-hb':
      return 'a';
    case 'katch':
      return 'a';
    default:
      return `(${(1799).toLocaleString()})`;
  }
  return `(${val.toLocaleString()})`;
};

const BmrCalculator: React.FC = (): JSX.Element => {
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>('');
  const [feet, setFeet] = useState<number>(0);
  const [inches, setInches] = useState<number>(0);
  const [pounds, setPounds] = useState<number>(0);
  const [estimationFormula, setFormula] = useState<string>('');
  const [bmrValue, setBmrValue] = useState<string>('1,799');
  const [converterView, setConverterView] = useState<boolean>(false);

  const onCalculate = (): void => {
    console.info(age, gender, feet, inches, pounds, estimationFormula);
    if (age && gender && feet && inches && pounds && estimationFormula) {
      {
        let bmr: string = Calculate(age, gender, feet, inches, pounds, estimationFormula);
        setBmrValue(bmr);
      }
    } else {
      window.alert('Check your values');
    }
  };

  return (
    <div className="mt-10 flex justify-center mb-[10rem]">
      <section className="w-full sm:w-[35rem] border p-10 sm:rounded-lg shadow-xl">
        <h1 className="font-bold mb-1">Age</h1>
        <input
          type="number"
          placeholder="Years (21)"
          onChange={(e: any) => setAge(e.target.value)}
        ></input>

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
          <input
            type="number"
            placeholder="Feet (5)"
            onChange={(e: any) => setFeet(e.target.value)}
          ></input>
          <input
            type="number"
            placeholder="Inches (11)"
            onChange={(e: any) => setInches(e.target.value)}
          ></input>
        </div>

        <div className="mt-5 flex justify-between items-center">
          <span>
            <h1 className="font-bold">Weight</h1>
          </span>
          <span>
            <button
              className=" w-[8rem] py-2 mb-5 text-sm bg-secondary text-black rounded-xl shadow-xl hover:bg-tertiary transition duration-300"
              onClick={() => setConverterView(true)}
            >
              Unit converter
            </button>
          </span>
        </div>
        <input
          type="number"
          placeholder="Pounds (190)"
          onChange={(e: any) => setPounds(e.target.value)}
        ></input>
        <h1 className="font-bold mt-2 mb-1">Estimation Formula</h1>

        <form>
          <div>
            <input type="radio" name="bmr-type" id="mifflin" value="mifflin"></input>
            <label htmlFor="mifflin" className="inline mx-2">
              Mifflin St Jeor (Common)
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
          <button
            className="mt-5 w-[8rem] py-2 text-sm bg-secondary text-black rounded-xl shadow-xl hover:bg-tertiary transition duration-300"
            onClick={onCalculate}
          >
            Calculate
          </button>
          <span>
            <p className="mt-5">
              BMR:
              <span className="bg-gray-100 border-2 rounded-lg border-secondary mx-2 px-2 py-1 font-bold text-secondary">
                {bmrValue}
              </span>
              Calories per/day
            </p>
          </span>
        </div>
      </section>

      <Converter
        title="Unit Conversion"
        description=""
        modalView={converterView}
        setModalView={setConverterView}
      />
    </div>
  );
};

export default BmrCalculator;
