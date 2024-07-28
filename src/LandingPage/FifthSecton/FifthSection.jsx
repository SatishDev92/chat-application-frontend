import React from 'react';

const FifthSection = () => {
  return (
    <section className="bg-pink-100 w-full h-full text-gray-800 py-12 font-quicksand">
      <div className="relative py-20 flex justify-center">
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform top-[510px] -skew-y-2"></div>
        <div className="text-center bg-white rounded-lg p-10 shadow-md z-10 max-w-4xl mx-auto">
          <h4 className="text-red-500 text-lg font-semibold">WHY CHOOSE US</h4>
          <h1 className="text-3xl font-bold mt-2">Our Unique Value Proposition</h1>
          <div className="flex justify-center mt-8 space-x-8">
            <div className="text-center">
              <div className="text-red-600 font-bold text-3xl">✔</div>
              <p className="mt-2 text-black font-bold">User-friendly</p>
              <p className="mt-2 text-black font-bold">Our interface is designed for utmost user-friendliness <br /> and efficiency.</p>
            </div>
            <div className="text-center">
              <div className="text-red-600 font-bold text-3xl">✔</div>
              <p className="mt-2 text-black font-bold">Video Options</p>
              <p className="mt-2 text-black font-bold">Connect seamlessly across various devices for a truly <br /> flexible experience.</p>
            </div>
            <div className="text-center">
              <div className="text-red-600 font-bold text-3xl">✔</div>
              <p className="mt-2 text-black font-bold">Secure Messaging</p>
              <p className="mt-2 text-black font-bold">Enjoy peace of mind with our secure messaging and <br /> customizable settings.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;