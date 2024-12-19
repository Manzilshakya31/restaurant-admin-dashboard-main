"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import logo from "@/../../public/images/logoblack.png";

const RightSide = () => {
  const router = useRouter();
  return (
    <div className="background-image-container h-[100vh]">
      <div className="px-[72px] py-[32px]">
        <Image
          src={logo}
          alt={"Logo"}
          width={200}
          // height={58}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        {/* <span onClick={() => router.push("/")}>RBS</span> */}
      </div>
      {/* logo above and below is content */}
      <div className="flex h-[75vh] place-items-center items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="h-[114px] w-[450px] text-center text-base font-semibold leading-9 text-[#101828] lg:text-3xl xl:w-[560px]">
            We’ve been using RBS to book table.
          </p>
          <div className="my-[32px] flex flex-col items-center justify-center">
            <Image src="/images/Avatar.png" alt={""} height={64} width={64} />
            <span className="mt-[16px] text-[16px] font-semibold text-[#101828]">
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
        </div>
      </div>
    </div>
  );
};

export default RightSide;