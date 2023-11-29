import React from "react";
import one from "../productsImgs/one.jpg";
import two from "../productsImgs/two.jpg";
import three from "../productsImgs/three.jpg";
import four from "../productsImgs/four.jpg";
import five from "../productsImgs/five.jpg";
import six from "../productsImgs/six.jpg";

const NewArrivals = () => {
  return (
    <>
      <div className="flex justify-center text-xl font-bold py-3">
        <h1>New Arrivals</h1>
      </div>
      <div className="flex flex-row justify-center gap-8 py-4 bg-[#f5f5dc]">
        <div className=" h-[auto] w-[30%] border border-solid border-slate-600 flex flex-col items-center cursor-pointer bg-white">
          <img src={one} alt="" />
          <h2 className="text-xl font-semibold">Price</h2>
          <p>4500</p>
        </div>
        <div className=" h-[auto] w-[30%] border border-solid border-slate-600 flex flex-col items-center cursor-pointer bg-white">
          <img src={two} alt="" />
          <h2 className="text-xl font-semibold">Price</h2>
          <p>4500</p>
        </div>
        <div className=" h-[auto] w-[30%] border border-solid border-slate-600 flex flex-col items-center cursor-pointer bg-white">
          <img src={three} alt="" />
          <h2 className="text-xl font-semibold">Price</h2>
          <p>4500</p>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-8 py-4 bg-[#f5f5dc]">
        <div className=" h-[auto] w-[30%] border border-solid border-slate-600 flex flex-col items-center cursor-pointer bg-white">
          <img src={four} alt="" />
          <h2 className="text-xl font-semibold">Price</h2>
          <p>4500</p>
        </div>
        <div className=" h-[auto] w-[30%] border border-solid border-slate-600 flex flex-col items-center cursor-pointer bg-white">
          <img src={five} alt="" />
          <h2 className="text-xl font-semibold">Price</h2>
          <p>4500</p>
        </div>
        <div className=" h-[auto] w-[30%] border border-solid border-slate-600 flex flex-col items-center cursor-pointer bg-white">
          <img src={six} alt="" />
          <h2 className="text-xl font-semibold">Price</h2>
          <p>4500</p>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
