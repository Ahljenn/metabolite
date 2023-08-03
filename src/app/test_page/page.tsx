'use client';

function TestAPI() {
  async function onApiRequest() {
    const response = await fetch('/api/test_api');
    const data = await response.json();
    console.log('Data: ', data);
  }

  return (
    <>
      <div className="flex justify-center mt-20">
        <button
          className="bg-red-500 hover:bg-green-500 transition-all duration-300 px-5 py-2 rounded-lg text-black"
          onClick={onApiRequest}
        >
          TEST
        </button>
      </div>
    </>
  );
}

export default TestAPI;
