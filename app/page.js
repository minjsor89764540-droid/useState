"use client";
import { useState } from "react";
import { IconCard } from "./compunents/IconCard";
export default function Home() {
  const [point, setPoint] = useState(0);
  const [isOn, setIsOn] = useState(true);
  const [isLocked, setIsLocked] = useState(true);
  return (
    <div className="bg-white w-screen h-screen  flex justify-center items-center  gap-10   ">
      <div className="bg-gray-200 w-[200px] h-[200px] flex rounded-2xl items-center justify-center font-bold flex-col gap-20 ">
        <h1 className="text-black">🔢 Тоолуур</h1>
        <div className="">
          <div className="text-black flex items-center justify-center  ">
            {point}
          </div>
          <div className="flex items-center justify-center gap-20">
            <button
              className=" flex justify-center items-center rounded-full bg-black text-white w-[40px] h-[40px]"
              onClick={() => {
                setPoint(point + 1);
                console.log(point);
              }}
            >
              +
            </button>
            <button
              className="flex justify-center items-center rounded-full bg-black text-white w-[40px] h-[40px]"
              onClick={() => {
                setPoint(point - 1);
                console.log(point);
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`flex flex-col justify-center items-center rounded-2xl ${isOn ? "bg-yellow-200" : "bg-blue-700"} w-[200px] h-[200px] gap-8`}
        >
          <h1 className="text-black font-bold">
            {isOn === true ? "💡 гэрэл" : "гэрэл"}
          </h1>
          <button className=" text-6xl  ">{isOn === true ? "☀️" : "🌑"}</button>
          <button
            className="text-black bg-yellow-300 rounded-lg   items-center justify-center w-[100px]"
            onClick={() => {
              setIsOn(!isOn);
            }}
          >
            {isOn === true ? "turn off" : "turn on"}
          </button>
        </div>
      </div>
      <div className=" flex items-center justify-center rounded-xl   ">
        <div className="bg-white w-[200px] gap-8 flex items-center flex-col p-8">
          <h1 className="text-black font-bold text-3xl">🔒 Нууц мессеж</h1>
          <h1 className="text-3xl">{isLocked ? "🔒" : "🔓"}</h1>
          <button
            className="w-[90px] h-[50px] rounded-lg text-2xl bg-purple-400 text-white"
            onClick={() => {
              setIsLocked(!isLocked);
            }}
          >
            {isLocked ? "Харах" : "Нуух"}
          </button>
          <h1 className="bg-purple-200 rounded-lg text-black">
            {isLocked ? "" : " 🎉 Чи useState-г ойлголоо"}
          </h1>
        </div>
      </div>
    </div>
  );
}
