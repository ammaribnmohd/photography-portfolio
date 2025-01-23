const Home = () => {
  return (
    <div className="container mx-auto max-w-7xl py-12 px-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="text-4xl font-syne font-bold text-white leading-none md:text-6xl lg:text-7xl w-full max-w-[891px] mx-auto h-[172px]">
          Adaptive Logo Design <br /> for Your Brand
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="517.142px"
            height="273.029px"
            viewBox="0 0 517 273"
            style={{
              fill: "rgba(255, 255, 255, 0.18)",
              filter: "blur(100px)",
              transform:
                "rotate(-178.318deg) translateY(130px) translateX(-420px)",
            }}
          >
            <g>
              <path d="M485.187 449.805C580.282 443.548 642.347 408.446 702.715 326.776C825.011 161.329 110.485 108.772 209.995 290.534C272.738 405.139 363.72 457.796 485.187 449.805Z" />
            </g>
          </svg>
        </div>

        <div className="mt-24 flex justify-center">
          <button className="px-8 py-5 bg-orange-500 text-white text-[13px] font-rubik rounded-[32px] font-bold tracking-[1.626px] uppercase shadow-md hover:bg-orange-600 flex items-center gap-2">
            <span>Explore Works</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="10"
              viewBox="0 0 18 12"
              fill="none"
            >
              <path
                d="M1 5.5H17"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 1L17 6L12 11"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-36 mt-12">
        <div>
          <h2 className="mb-10 text-3xl font-syne font-bold text-white md:text-4xl lg:text-5xl w-[516px]">
            Let’s get know <br /> about me closer
          </h2>
          <p className="mt-4 text-gray-400 text-lg font-normal font-rubik w-[625px]">
            Aaronn is a New York-based visual designer focusing on branding and
            visual identity. Her portfolio showcases her wide range of work,
            spanning books, posters, and web design.
          </p>
          <div className="mt-24">
            <button className="px-8 py-4 bg-orange-500 text-white text-[13px] text-base font-rubik rounded-[47px] shadow-md hover:bg-orange-600">
              Discover More About Me
            </button>
          </div>
        </div>
        <div className=" w-[454px] h-[506px]">
          <img src="/aronimage.png" alt="Aaronn" className="rounded-[30px]" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <h2 className="mb-16 text-3xl font-syne text-white text-center md:text-4xl lg:text-[64px] font-bold">
          My Projects Highlight
        </h2>
        <div className="mt-20 mb-32 flex justify-center">
          <button className="px-8 py-5 bg-[#1A1A1A] text-white text-[13px] tracking-[1.626px] uppercase font-rubik rounded-[32px] font-bold border border-[#FF9142] flex items-center gap-2">
            <span>Explore More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="10"
              viewBox="0 0 18 12"
              fill="none"
            >
              <path
                d="M1 5.5H17"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 1L17 6L12 11"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-20 w-[1140px] justify-center items-start content-start">
          <div className="flex flex-col  w-[560px] h-[768px] overflow-hidden">
            <img
              src="/homeimage1.png"
              alt="Brand Journey Improvements"
              className="w-full h-[620px] object-cover rounded-lg"
            />
            <div className="mt-8 text-left">
              <p className="text-[24px] font-bold font-syne text-[#F4F7FA]">
                Brand Journey Improvements
                <span className="inline-block w-[48px] h-[1px] bg-[#FF9142] ml-8 mb-2"></span>
              </p>
              <div className="flex items-center justify-between w-[92px] mt-4">
                <p className="text-[13px] font-normal font-rubik text-[#606060] text-right">
                  Client:
                </p>
                <p className="text-[13px] font-normal font-rubik text-[#FFFFFF]">
                  Organc
                </p>
              </div>
              <div className="flex items-center justify-between w-[180px] mt-2">
                <p className="text-[13px] font-normal font-rubik text-[#606060] text-right">
                  Work:
                </p>
                <p className="text-[13px] font-normal font-rubik text-[#FFFFFF]">
                  Branding Logo design
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[560px] h-[768px] overflow-hidden">
            <img
              src="/homeimage2.png"
              alt="Brand Grouping"
              className="w-full h-[620px] object-cover rounded-lg"
            />
            <div className="mt-8 text-left">
              <p className="text-[24px] font-bold font-syne text-[#F4F7FA] relative">
                Brand Grouping
                <span className="inline-block w-[48px] h-[1px] bg-[#FF9142] ml-8 mb-2"></span>
              </p>
              <div className="flex items-center justify-between w-[65px] mt-4">
                <p className="text-[13px] font-normal font-rubik text-[#606060] text-right">
                  Client:
                </p>
                <p className="text-[13px] font-normal font-rubik text-[#FFFFFF]">
                  FR
                </p>
              </div>
              <div className="flex items-center justify-between w-[180px] mt-2">
                <p className="text-[13px] font-normal font-rubik text-[#606060] text-right">
                  Work:
                </p>
                <p className="text-[13px] font-normal font-rubik text-[#FFFFFF]">
                  Branding Logo design
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-[560px] h-[768px] overflow-hidden">
            <img
              src="/homeimage3.png"
              alt="NFT Glimps"
              className="w-full h-[620px] object-cover rounded-lg"
            />
            <div className="mt-8 text-left ">
              <p className="text-[24px] font-bold font-syne text-[#F4F7FA]">
                NFT Glimps
                <span className="inline-block w-[48px] h-[1px] bg-[#FF9142] ml-8 mb-2"></span>
              </p>
              <div className="flex items-center justify-between w-[115px] mt-4">
                <p className="text-[13px] font-normal font-rubik text-[#606060] text-right">
                  Client:
                </p>
                <p className="text-[13px] font-normal font-rubik text-[#FFFFFF]">
                  Rumanda
                </p>
              </div>
              <div className="flex items-center justify-between w-[125px] mt-2">
                <p className="text-[13px] font-normal font-rubik text-[#606060] text-right">
                  Work:
                </p>
                <p className="text-[13px] font-normal font-rubik text-[#FFFFFF]">
                NFT Design
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-full h-[768px] overflow-hidden">
            <img
              src="/homeimage4.png"
              alt="Brand Suggestions"
              className="w-full h-[620px] object-cover rounded-lg"
            />
            <div className="mt-8 text-left ">
              <p className="text-[24px] font-bold font-syne text-[#F4F7FA]">
                Brand Suggestions
                <span className="inline-block w-[48px] h-[1px] bg-[#FF9142] ml-8 mb-2"></span>
              </p>
              <div className="flex items-center justify-between w-[78px] mt-4">
                <p className="text-[13px] font-normal font-rubik text-[#606060] text-right">
                  Client:
                </p>
                <p className="text-[13px] font-normal font-rubik text-[#FFFFFF]">
                T3d
                </p>
              </div>
              <div className="flex items-center justify-between w-[110px] mt-2">
                <p className="text-[13px] font-normal font-rubik text-[#606060] text-right">
                  Work:
                </p>
                <p className="text-[13px] font-normal font-rubik text-[#FFFFFF]">
                NFT logo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="pb-40 pt-8 mx-auto flex justify-center items-center">
        <div className="relative w-[1440px] h-auto">
          <div
            className="absolute top-0 right-0 text-orange-500 text-[288px] font-syne font-extrabold leading-none w-[199px] h-[183px] flex-shrink-0"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#FF9142",
              transform: "rotate",
            }}
          >
            <p>“</p>
          </div>
          <h2 className="text-white font-syne font-bold text-[64px] leading-none w-[878.571px]">
            Testimonial
          </h2>

          <p className="mt-10 text-[#949494] font-rubik text-[18px]  w-[878.571px] ">
            “Aaronn was fantastic to work with from start to finish. We were
            looking for a simple, stand-out logo and he delivered. I tried
            designing the logo myself thinking I wouldn’t need to pay the money
            for a professional graphic designer but I was very wrong. Working
            with Aaronn was worth every penny and was surprisingly affordable! I
            remember him saying simplicity is key to a successful logo and boy
            he was right. I can’t thank Aaronn enough for his effort and
            professionalism. I would recommend him to anyone looking for a
            design!”
          </p>

          <p className="mt-10 text-white font-syne font-bold text-[24px] leading-none w-[193.571px] h-[38.721px]">
            - Martin Lee
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
