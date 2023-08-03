'use client';

function TestAPI() {
  async function onApiRequest() {
    const response = await fetch('/api/test_api');
    const data = await response.json();
    window.alert(data.message);
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
    window.alert(data.message);
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
  method: {
    name: 'Quickstart',
    desc: 'Get started on your health journey with a fast and efficient pre-screening assessment designed to provide immediate insights.',
  },
  gender: { name: 'Male', desc: 'Select if you are a biological male.' },
  height: 154,
  weight: 210,
  age: 20,
  activityLevel: {
    name: 'Active',
    desc: 'Moderate physical activity or regular exercise most days of the week.',
  },
  workExertion: {
    name: 'Office job',
    desc: 'Office environment with sedentary tasks and minimal physical exertion.',
  },
  allergies: { name: 'No Allergy', desc: 'No known allergies.' },
  dietPref: {
    name: 'Paleo Diet',
    desc: 'An eating pattern that emphasizes whole foods and avoids processed foods and grains to mimic the eating patterns of our ancestors from the Paleolithic era.',
  },
  budget: {
    name: '$$$ (Moderate)',
    desc: 'I have a moderate budget and can spend a reasonable amount on my weekly diet.',
  },
};

export default TestAPI;
