import QnA from "./QnA";

function FAQ() {
  return (
    <div className="flex flex-col items-center py-20 px-20 gap-10">
      <h2 className="text-7xl font-black text-black">JioAirFiber FAQ</h2>
      <div className="flex flex-col w-3/4 gap-3">
        <QnA que="What is JioAirFiber?" />
        <QnA que="I already have a JioFiber connection. Can I switch to JioAirFiber?" />
        <QnA que="How to get a new JioAirFiber connection?" />
        <QnA que="How do I check if JioAirFiber is available in my city?" />
        <QnA que="What is the difference between JioAirFiber and JioFiber?" />
        <QnA que="Is installation required for getting a new JioAirFiber connection? Is installation paid?" />
        <br />
        <br />
        <div className="w-full">
          <button className=" border-gray-300 border px-3 py-2 rounded-full text-xl font-semibold">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
