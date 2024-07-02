function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      {/* Card list*/}
      <div className="flex flex-col mx-6 gap-6">
        {/* Card*/}
        <div className="flex flex-col bg-gray-700 shadow-lg shadow-gray-800 py-4 px-6 rounded-md gap-4">
          <div className="flex flex-row items-center gap-4">
            <img
              className="w-24 rounded-full "
              src="https://github.com/kauatwn.png"
              alt="User avatar"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">Kauã Lima</h3>
              <h3 className="text-indigo-300">
                Back-end Web Development Student
              </h3>
            </div>
          </div>
          <div className=" flex flex-col gap-1">
            <h2 className="font-semibold text-2xl">Bio</h2>
            <p className="text-gray-300 font-normal">
              Back-end web developer in training, focused on problem-solving and
              building efficient solutions with modern technologies such as
              .NET.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
