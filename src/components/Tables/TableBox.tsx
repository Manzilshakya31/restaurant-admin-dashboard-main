import React from "react";
import Box from "./Box";

const TableBox = () => {
  return (
    <div className="shadow-defalut w-[262px] bg-white p-8 dark:border-strokedark dark:bg-boxdark md:w-[462px]">
      <div>
        <h1 className="text-xl font-semibold text-black dark:text-white">
          Table
        </h1>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </div>
  );
};

export default TableBox;
