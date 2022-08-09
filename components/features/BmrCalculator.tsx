import React from 'react';

// Add unit converter calculator

const BmrCalculator: React.FC = (): JSX.Element => {
  return (
    <div className="mt-10 flex justify-center">
      <section className="w-[35rem] border p-10 rounded-lg shadow-xl">
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
            <input type="radio" name="bmr-type" value="mifflin" checked></input>
            <p className="inline mx-2">Mifflin St Jeor (Default)</p>
          </div>

          <div>
            <input type="radio" name="bmr-type" value="revised-hb"></input>
            <p className="inline mx-2">Revised Harris-Benedict</p>
          </div>

          <div>
            <input type="radio" name="bmr-type" value="mifflin"></input>
            <p className="inline mx-2">Katch-McArdle</p>
          </div>
        </form>

        <div className="flex flex-col items-center sm:flex-row justify-between">
          <button className="mt-5 w-[10rem] py-2 text-lg bg-secondary text-white rounded-xl shadow-xl hover:bg-metablack transition duration-300">
            Unit converter
          </button>
          <button className="mt-5 w-[10rem] py-2 text-lg bg-secondary text-white rounded-xl shadow-xl hover:bg-metablack transition duration-300">
            Calculate
          </button>
        </div>
      </section>
    </div>
  );
};

export default BmrCalculator;
