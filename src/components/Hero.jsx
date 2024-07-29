import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import Card from "./Card";
import Counsellor from "./Counsellor";
const Hero = () => {
  return (
   <div>
     <div className="newPost flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold">Share your fears !</h1>
      <h4 className="text-xl pt-2 pb-8">
        We promise to keep your secrets a secret.
      </h4>
      <div className="button flex px-8 py-3 bg-white text-black font-bold rounded-2xl hover:bg-[#1E424A] hover:text-white gap-4">
        <IoAddCircleOutline className="w-10 h-10" />
        <button className="text-xl">Create a Post</button>
      </div>
    </div>
    
    <div className="flex px-16 py-24 justify-between">
    <div>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    <div className="w-[387px] text-white border border-white text-xl px-7 gap-10 flex flex-col rounded-2xl">
      <h1 className="font-bold text-5xl text-center py-10 ">Counsellors</h1>
      <Counsellor/>
      <Counsellor/>

    </div>
    </div>
   </div>
  );
};

export default Hero;
