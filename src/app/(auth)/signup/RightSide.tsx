"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/../../public/images/logoblack.png";

const RightSide = () => {
  const router = useRouter();
  return (
    <div className="h-[100vh] background-imagesignup-container">
      <div className="py-[32px] px-[72px]">
        <span onClick={() => router.push("/")}>
          <Image
            src={logo}
            alt={"Logo"}
            width={200}
            // height={58}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </span>
      </div>
      {/* logo above and below is content */}
      <div className="flex items-center justify-center place-items-center h-[75vh]">
        {/* <div className="flex flex-col justify-center items-center">
          <p className="text-center text-[#101828] w-[450px] xl:w-[560px] h-[114px] font-semibold lg:text-3xl text-base leading-9">
            We’ve been using RBS to book table.
          </p>
          <div className="flex flex-col items-center justify-center my-[32px]">
            <Image src="/images/Avatar.png" alt={""} height={64} width={64} />
            <span className="text-[#101828] text-[16px] font-semibold mt-[16px]">
              NalZim
            </span>
            <p>Software Engineer</p>
          </div>
          <div>
            <Image
              src="/images/Stars.svg"
              alt={"image of star logo"}
              width={116}
              height={20}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RightSide;
