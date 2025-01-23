const Contact = () => {
  return (
    <div className="container mx-auto max-w-7xl py-12 px-8">
      {/* Header Section */}
      <header className="mb-16 mt-20">
        <h1 className="font-syne font-bold text-7xl mb-2">Contact Me</h1>
        <p className="text-gray-400 font-rubik font-semibold text-[18px]">
          For Any Project Knock Us
        </p>
      </header>
      <div className="w-[1148px] h-[1px] bg-[#949494] my-20"></div>

      <div className="grid grid-cols-2 gap-8 mb-16">
        <h2 className="w-[436px] font-syne text-[64px] font-bold leading-tight  text-white">
          Get in Touch With Us
        </h2>
        <div className="flex flex-col space-y-8 font-rubik font-medium text-[24px]">
          <div className="flex flex-col">
            <label className="text-white mb-4">NAME</label>
            <input
              type="text"
              className="bg-transparent border-b border-[#949494] pb-2 text-white focus:outline-none focus:border-orange-400 w-full max-w-lg"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-4">SUBJECT</label>
            <input
              type="text"
              className="bg-transparent border-b border-[#949494] pb-2 text-white focus:outline-none focus:border-orange-400 w-full max-w-lg"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-4">MESSAGE</label>
            <input
              type="text"
              className="bg-transparent border-b border-[#949494] pb-2 mb-14 text-white focus:outline-none focus:border-orange-400 w-full max-w-lg"
            />
          </div>

          <button className="bg-orange-400 text-white px-20 py-3 rounded-full w-24 flex justify-center items-center hover:bg-orange-500 transition-colors duration-300">
            SEND
          </button>
        </div>
      </div>

      <div className="relative flex flex-col w-full items-center justify-center mb-24">
        {/* Laptop Image */}
        <img
          src="/laptop.png"
          alt="Laptop Design"
          className="w-auto h-auto object-contain py-16"
        />
        {/* Contact Info */}
        <div className="flex items-center justify-center gap-32  py-4 text-white font-syne font-bold text-[24px]">
          <span>Street Avenue 21, CA</span>
          <span>+9 0283353</span>
          <span className="underline">info@aaronn.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
