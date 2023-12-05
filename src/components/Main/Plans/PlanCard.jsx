function PlanCard(props) {
  return (
    <div className="flex flex-col bg-white py-7 px-5 justify-between gap-5 rounded-3xl w-96">
      <div className="flex items-center">
        <h3 className="text-black font-black text-4xl"> ₹{props.price}</h3>
        <p className="text-gray-600 text-md ">+GST</p>
      </div>
      <p className="font-semibold text-lg">
        6/12 months plans available for new customers
      </p>
      <hr />
      <div className="flex">
        <div className="flex-col w-2/4 items-center">
          <p>Validity</p>
          <h5 className="font-semibold text-lg">Bill Cycle</h5>
        </div>

        <div className="flex-col w-2/4">
          <p>Data</p>
          <h5 className="font-semibold text-lg">
            Unlimited Data @ up to {props.mb} Mbps
          </h5>
        </div>
      </div>
      <div className="flex gap-2">
        <img className="w-10" src="/jiocinema-n.svg" alt="" />
        <img className="w-10" src="/SonyLive.svg" alt="" />
        <img className="w-10" src="/hotstar.svg" alt="" />
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-full w-full  focus:outline-none focus:shadow-outline">
        View Details
      </button>
    </div>
  );
}

export default PlanCard;
