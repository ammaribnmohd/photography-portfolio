import React from "react";

const Works = () => {
  return (
    <div className="container mx-auto max-w-7xl py-12 px-8">
      {/* Header Section */}
      <header className="mb-16 mt-20">
        <h1 className="font-syne font-bold text-7xl mb-2">My works</h1>
        <p className="text-gray-400 font-rubik font-medium text-[18px]">
          Showcase About Works
        </p>
      </header>
      <div className="w-[1148px] h-[1px] bg-[#949494] my-20"></div>
      <div className="flex flex-wrap w-[1140px] justify-center items-start content-start gap-x-[40px] gap-y-[30px] h-[1557px]">
        <div className="flex flex-col items-center w-[350px] h-[400px]  overflow-hidden">
          <img
            src="/works1.jpg"
            alt="Orvillebury"
            className="w-full h-[320px] object-cover rounded-lg"
          />
          <div className="mt-4 text-center font-inter">
            <p className="text-[13px] font-bold uppercase tracking-[1.625px] text-[#F4F7FA]">Blue</p>
            <h3 className="text-[24px] font-bold text-[#FFF]">West Lavada</h3>
          </div>
        </div>
        <div className="flex flex-col items-center w-[350px] h-[400px]  overflow-hidden">
          <img
            src="/works2.jpg"
            alt="Orvillebury"
            className="w-full h-[320px] object-cover rounded-lg"
          />
          <div className="mt-4 text-center font-inter">
            <p className="text-[13px] font-bold uppercase tracking-[1.625px] text-[#F4F7FA]">green</p>
            <h3 className="text-[24px] font-bold text-[#FFF]">Orvillebury</h3>
          </div>
        </div>
        <div className="flex flex-col items-center w-[350px] h-[400px]  overflow-hidden">
          <img
            src="/works3.jpg"
            alt="Orvillebury"
            className="w-full h-[320px] object-cover rounded-lg"
          />
          <div className="mt-4 text-center font-inter">
            <p className="text-[13px] font-bold uppercase tracking-[1.625px] text-[#F4F7FA]">aqua</p>
            <h3 className="text-[24px] font-bold text-[#FFF]">Rempelshire</h3>
          </div>
        </div>

        <div className="flex flex-col items-center w-[550px] h-[400px]  overflow-hidden">
          <img
            src="/works4.jpg"
            alt="Orvillebury"
            className="w-full h-[320px] object-cover rounded-lg"
          />
          <div className="mt-4 text-center font-inter">
            <p className="text-[13px] font-bold uppercase tracking-[1.625px] text-[#F4F7FA]">lime</p>
            <h3 className="text-[24px] font-bold text-[#FFF]">Delfinaland</h3>
          </div>
        </div>

        <div className="flex flex-col items-center w-[550px] h-[400px]  overflow-hidden">
          <img
            src="/works5.jpg"
            alt="Orvillebury"
            className="w-full h-[320px] object-cover rounded-lg"
          />
          <div className="mt-4 text-center font-inter">
            <p className="text-[13px] font-bold uppercase tracking-[1.625px] text-[#F4F7FA]">fuchsia</p>
            <h3 className="text-[24px] font-bold text-[#FFF]">Buckridgeburgh</h3>
          </div>
        </div>

        <div className="flex flex-col items-center w-[350px] h-[400px]  overflow-hidden">
          <img
            src="/works6.jpg"
            alt="Orvillebury"
            className="w-full h-[320px] object-cover rounded-lg"
          />
          <div className="mt-4 text-center font-inter">
            <p className="text-[13px] font-bold uppercase tracking-[1.625px] text-[#F4F7FA]">Blue</p>
            <h3 className="text-[24px] font-bold text-[#FFF]">West Lavada</h3>
          </div>
        </div>
        <div className="flex flex-col items-center w-[350px] h-[400px]  overflow-hidden">
          <img
            src="/works7.jpg"
            alt="Orvillebury"
            className="w-full h-[320px] object-cover rounded-lg"
          />
          <div className="mt-4 text-center font-inter">
            <p className="text-[13px] font-bold uppercase tracking-[1.625px] text-[#F4F7FA]">green</p>
            <h3 className="text-[24px] font-bold text-[#FFF]">Orvillebury</h3>
          </div>
        </div>
        <div className="flex flex-col items-center w-[350px] h-[400px]  overflow-hidden">
          <img
            src="/works8.jpg"
            alt="Orvillebury"
            className="w-full h-[320px] object-cover rounded-lg"
          />
          <div className="mt-4 text-center font-inter">
            <p className="text-[13px] font-bold uppercase tracking-[1.625px] text-[#F4F7FA]">aqua</p>
            <h3 className="text-[24px] font-bold text-[#FFF]">Rempelshire</h3>
          </div>
        </div>



        {/* Add More Cards Similarly */}

        {/* Load More Button */}
        <div className="w-full flex justify-center mt-12">
          <button className="px-8 py-5 bg-[#1A1A1A] text-[#FF9142] text-[13px] tracking-[1.626px] uppercase font-rubik rounded-[32px] font-bold border border-[#FF9142] flex items-center gap-2">
            <span>Load more works</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Works;
