import React from "react";

const Box = () => {
  return (
    <div className="w-[200px] rounded-lg border-2 border-[#D9D9D9] p-2 text-[14px] shadow-md">
      <div className="flex">
        <h2>Table no: </h2>
        <p>1</p>
      </div>

      <div className="flex">
        <h2>Time: </h2>
        <p>12:00pm - 1:00pm</p>
      </div>
    </div>
  );
};

export default Box;
