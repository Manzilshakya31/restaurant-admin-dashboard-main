"use client";
import { GoogleIcon } from "@/app/icons/GoogleIcon";
import PrimaryButton from "@/app/shared/components/Form/Button/Primary";

import { Checkbox, Divider, Input } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const [rememberme, setRememberMe] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const rememberPrefers = localStorage.getItem("rememberMe");
      setRememberMe(rememberPrefers === "true");
    }
  }, []);
  const handleChangeRememberMe = () => {
    const newRemeberMe = !rememberme;
    setRememberMe(newRemeberMe);
    localStorage.setItem("rememberMe", String(newRemeberMe));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/restaurants/login",
        {
          email,
          password,
        },
      );
      setSuccess("Login successful!");
      setError("");
      console.log("Token:", response.data.token);
      localStorage.setItem("token", response.data.token);
      router.push("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <form
        className="items-between flex justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col lg:w-[360px]">
          <h1 className="mb-[12px] text-[24px] font-semibold lg:text-[30px]">
            Welcome back
          </h1>
          <p className="text-[#475467]">
            Welcome back! Please enter your details.
          </p>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
          <div className=" mt-[32px] flex flex-col gap-[16px]">
            <p className="mb-[-15px]">Email</p>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className="mb-[-15px]">Password</p>
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* <AppInput label="Email" name="email" /> */}
            {/* <AppInputPassword
              control={control}
              label="Password"
              name="password"
              size="large"
              iconRender={(visible: boolean) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
            /> */}
          </div>

          <div className="my-[24px] flex justify-between">
            <div className="">
              <Checkbox checked={rememberme} onChange={handleChangeRememberMe}>
                Remember me
              </Checkbox>
            </div>
            <Link
              href={"forgot-password"}
              className="right-0 flex items-center text-[14px] text-[#242424]"
            >
              Forgot password?
            </Link>
          </div>

          <PrimaryButton size="large" htmlType="submit">
            Log in
          </PrimaryButton>
          <Divider plain>
            <p className="text-base font-normal text-[#D0D5DD]">Or</p>
          </Divider>
          <Link
            href={"https://api.tradieshome.com/oauth2/authorization/google"}
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded border border-[#D0D5DD] px-4 py-3 hover:border-[#F9DC5C]"
          >
            <GoogleIcon />
            <p className="text-base font-semibold text-[#344054]">
              Sign in with Google
            </p>
          </Link>
          <div className="mt-[32px] flex justify-center gap-2">
            <span>Don’t have an account? </span>
            <Link href={"signup"} className="font-medium text-[#000000]">
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
