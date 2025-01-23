import React from "react";

const About = () => {
  return (
    <div className="container mx-auto max-w-7xl py-12 px-8">
      {/* Header Section */}
      <header className="mb-16 mt-20">
        <h1 className="font-syne font-bold text-7xl mb-2">About Me</h1>
        <p className="text-gray-400 font-rubik font-medium text-[18px]">
          Little Brief About Myself
        </p>
      </header>
      <div className="w-[1148px] h-[1px] bg-[#949494] my-20"></div>
      <div className="grid grid-cols-2 gap-8 mb-16">
        <h2 className="w-[535px] font-syne text-[80px] font-bold leading-tight tracking-tight text-white">
          My mission is to make design easier.
        </h2>
        <p className="mt-10 text-[#949494] font-opensans w-[495px] text-[21px] font-semibold leading-[39px] tracking-[-0.657px]">
          Create custom Designs with AARONN that converts more visitors than any
          website. With lots of unique design, you can easily select a logo
          without hassle. Create custom landing logos with AARONN that converts
          more visitors than any website. With lots of revisions, you can easily
          build a logo without problem.
        </p>
      </div>

      {/* Team Photos */}
      <div className="flex gap-4 mb-32 mt-32">
        <div className="relative w-[420px] h-[520px]">
          
          <div className="absolute top-0 right-0 w-12 h-1" />
          <img
            src="/aronfull.png"
            alt="Team member 1"
            className="w-full h-full  rounded-sm"
          />
        </div>
        <div className="relative w-[720px] h-[520px]">
        
          <div className="absolute bottom-0 right-0 w-12 h-1" />
          <img
            src="/aronimage2.png"
            alt="Team member 2"
            className="w-full h-full  rounded-sm"
          />
        </div>
      </div>

      {/* Social Links */}
      <section className="mt-12 py-12 mb-20">
        <h3 className="text-white font-syne text-[48px] font-bold leading-[79.993px] tracking-[-0.5px] mb-4">
          Follow me on:
        </h3>
        <div className="flex text-gray-400 font-inter text-3xl font-bold tracking-widest uppercase space-x-32">
          <span>Dribbble</span>
          <span>Twitter</span>
          <span>Facebook</span>
          <span>Instagram</span>
        </div>
      </section>
    </div>
  );
};

export default About;
