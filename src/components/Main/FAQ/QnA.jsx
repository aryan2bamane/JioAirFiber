function QnA(props) {
  return (
    <>
      <div className="w-full flex justify-between">
        <p className="text-xl font-semibold">{props.que}</p>
        <button className=" p-1 border-2 rounded-full">
          <svg
            className="w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 11h-7V4a1 1 0 00-2 0v7H4a1 1 0 000 2h7v7a1 1 0 002 0v-7h7a1 1 0 000-2z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <hr />
    </>
  );
}

export default QnA;
