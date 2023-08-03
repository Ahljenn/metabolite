'use client';

function TestAPI() {
  async function onApiRequest() {
    const response = await fetch('/api/test_api');
    const data = await response.json();
    // window.alert(data.message);
  }

  async function onMongoApiRequest() {
    const response = await fetch('/api/user_api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData, null, 2),
    });
    const data = await response.json();
    // window.alert(data.message);
  }

  return (
    <>
      <div className="flex justify-center mt-20 flex-col gap-5 items-center">
        <div>
          <button
            className="bg-red-500 hover:bg-green-500 transition-all duration-300 px-5 py-2 rounded-lg text-black"
            onClick={onApiRequest}
          >
            TEST
          </button>
        </div>
        <div>
          <button
            className="bg-green-500 hover:bg-lime-500 transition-all duration-300 px-5 py-2 rounded-lg text-black"
            onClick={onMongoApiRequest}
          >
            MONGO TEST
          </button>
        </div>
      </div>
    </>
  );
}

const testData = {
  user: 'Test Metabolite',
  method: 'Quickstart',
  gender: 'Male',
  height: 162,
  weight: 80,
  age: 21,
  activityLevel: 'Lightly active',
  workExertion: 'Office job',
  allergies: 'Nuts',
  dietPref: 'Not applicable',
  budget: '$$$ (Moderate)',
};

export default TestAPI;
