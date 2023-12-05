function ServiceEven(props) {
  return (
    <div className="flex items-center justify-between py-5 gap-52">
      <div className=" w-3/6">
        <img className="  h-80 rounded-3xl" src={props.img} alt="" />
      </div>
      <div className="ftext-black font-bold text-4xl flex flex-col gap-5 items-center w-6/12 justify-center">
        <h3 className="">{props.label}</h3>
        <ul className="text-gray-600 font-normal text-base px-10 list-disc">
          <li>{props.desc1}</li>
          <li>{props.desc2}</li>
          <li>{props.desc3}</li>
        </ul>
      </div>
    </div>
  );
}

export default ServiceEven;
