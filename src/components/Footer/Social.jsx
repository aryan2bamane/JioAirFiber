import React from "react";

function Social(props) {
  return (
    <div className="bg-blue-500 rounded-full ">
      <img className=" h-10 p-2" src={props.img} alt="" />
    </div>
  );
}

export default Social;
