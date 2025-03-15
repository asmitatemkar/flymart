const HomePage = () => {
  return (
    <div className="flex flex-col space-y-5 px-10 py-5 bg-gray-200">
      <div className="flex space-x-5 bg-white p-5 rounded-lg shadow-lg">
        <div className="bg-blue-500 w-20 h-20 flex justify-center items-center text-white rounded-lg hover:cursor-pointer hover:-translate-y-1 hover:shadow-lg ease-in-out transition-all duration-300">
          Hello
        </div>
      </div>
      <div className="flex space-x-5">
        <div className="flex flex-col w-1/2 space-x-5 bg-white p-5 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold tracking-tighter mb-4">
            Category 1
          </h1>
          <div className="flex flex-col space-y-5">Hello</div>
        </div>
        <div className="flex flex-col w-1/2 space-x-5 bg-white p-5 rounded-lg shadow-lg">
          <h1 className="text-xl font-bold tracking-tighter mb-4">
            Category 2
          </h1>
          <div className="flex flex-col space-y-5">Hello</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
