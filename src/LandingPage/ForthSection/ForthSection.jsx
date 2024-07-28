import React from 'react';
import { Link } from 'react-router-dom';

const ForthSection = () => {
  return (
    <section className="forth bg-white w-full h-screen text-gray-800 py-12 font-quicksand">
      <div className="relative w-full mt-8">
        <div
          className="w-full h-[320px] absolute right-0 top-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: 'url("https://dev-chating-app.pantheonsite.io/wp-content/uploads/2024/07/pexels-photo-7516363.jpeg")',
            transform: 'rotate(-1deg)'
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-between px-4 lg:px-12 z-10"></div>
        </div>
        <div className="absolute left-8 top-32 lg:left-48 lg:top-40 text-white text-center lg:text-left z-20">
          <h2 className="text-4xl font-bold mb-2">Elevate Your Chat Experience Today</h2>
          <p className="text-[1rem] mb-4">Join the thousands already enjoying ChattinApp's seamless connectivity.</p>
          <Link to="/login">
            <button className="bg-red-800 text-white py-4 px-8 rounded-full transition-colors duration-300 font-bold hover:bg-red-700">Get Started</button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center mt-96 z-30">
        <h2 className="text-red-800 text-sm font-bold uppercase mb-2">Explore More</h2>
        <h1 className="text-4xl font-bold mb-8">Dive Into The Chatti App <br /> Experience</h1>
        <div className="flex flex-wrap justify-center">
          <img src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Experience 1" className="w-[120px] h-[120px] rounded-full mx-2 mb-4 transition-transform transform hover:scale-110 hover:shadow-lg" />
          <img src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Experience 2" className="w-[120px] h-[120px] rounded-full mx-2 mb-4 transition-transform transform hover:scale-110 hover:shadow-lg" />
          <img src="https://images.pexels.com/photos/5081918/pexels-photo-5081918.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Experience 3" className="w-[120px] h-[120px] rounded-full mx-2 mb-4 transition-transform transform hover:scale-110 hover:shadow-lg" />
          <img src="https://images.pexels.com/photos/5052877/pexels-photo-5052877.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Experience 4" className="w-[120px] h-[120px] rounded-full mx-2 mb-4 transition-transform transform hover:scale-110 hover:shadow-lg" />
          <img src="https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Experience 5" className="w-[120px] h-[120px] rounded-full mx-2 mb-4 transition-transform transform hover:scale-110 hover:shadow-lg" />
          <img src="https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Experience 6" className="w-[120px] h-[120px] rounded-full mx-2 mb-4 transition-transform transform hover:scale-110 hover:shadow-lg" />
        </div>
      </div>

      <div className="relative w-full mt-12 z-20">
        <div className="absolute left-8 top-96 lg:left-48 lg:top-[360px] text-gray-800 text-center lg:text-left z-20">
          <h2 className="text-2xl font-bold mb-2">Secure Messaging</h2>
          <p className="text-[1rem] mb-4">Send messages with utmost privacy and security.</p>
          <Link to="/abouts">
            <button className="bg-gray-900 text-white py-2 px-4 rounded-full transition-colors duration-300 font-bold hover:bg-blue-700">Read More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForthSection;
