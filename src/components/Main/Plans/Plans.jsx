import PlanCard from "./PlanCard";

function Plans() {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-100 h-4/5 w-full py-14 gap-5">
      <h2 className="text-7xl font-black text-black">JioAirFiber Plans</h2>

      <p className="text-gray-600 font-semibold text-lg">
        Find a perfect plan to go with your digital aspirations.
      </p>

      <div className="bg-white p-1 rounded-full flex items-center justify-center pr-5 gap-10">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-full focus:outline-none focus:shadow-outline">
          AirFiber
        </button>
        <p className="text-lg">AirFiber Max</p>
      </div>

      <div className="flex gap-5">
        <PlanCard price="599" mb="30" />
        <PlanCard price="899" mb="100" />
        <PlanCard price="1199" mb="100" />
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-full focus:outline-none focus:shadow-outline">
        Get JioAirFiber
      </button>
    </div>
  );
}

export default Plans;
