import React from 'react';
import { Link } from 'react-router-dom';

const ForthSection = () => {
  return (
    <section className=" forth bg-white w-[100vw] h-[100vh] text-gray-800 py-12 font-quicksand">
        <div className="relative  w-full  mt-8">
        <div className=" tilt w-[100vw] h-[320px] right-[14px] top-[20px] absolute bg-cover bg-center" style={{ backgroundImage: `url('https://dev-chating-app.pantheonsite.io/wp-content/uploads/2024/07/pexels-photo-7516363.jpeg')`, transform: 'rotate(-1deg)' }}>
          <div className="absolute inset-0 bg-black opacity-50 flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12">
          </div>
        </div>
        <div className="absolute left-[200px] top-[180px] align-center text-white  text-6xl text-center lg:text-left">
        <h2 className="text-4xl font-bold mb-2">Elevate Your Chat Experience Today</h2>
            </div>
            <div className="absolute left-[200px] top-[250px] align-center text-white  text-6xl text-center lg:text-left">
              <p className='text-[1rem]'>Join the thousands already enjoying ChattinApp's seamless connectivity.</p>
            </div>
            <Link  to="/login">
            <button className="absolute left-[1250px] top-[160px] bg-red-800 text-white py-4 px-8 rounded-full transition-colors duration-300 font-bold hover:bg-red-700 mt-4 lg:mt-0">Get Started</button>
            </Link>
      </div>
      <div className=" absolute container top-[2450px] mx-auto px-4 text-center">
        <h2 className="text-red-800 text-sm font-bold uppercase mb-2">Explore More</h2>
        <h1 className="text-4xl  bottom-[200px] font-bold mb-8">Dive Into The Chatti App <br /> Experience</h1>
        <div className="flex flex-wrap justify-center">
          <img src="https://dev-chating-app.pantheonsite.io/wp-content/uploads/2024/07/pexels-photo-5926370.jpeg" alt="Experience 1" className="w-24 h-24 rounded-full mx-2 mb-4" />
          <img src="https://dev-chating-app.pantheonsite.io/wp-content/uploads/2024/07/pexels-photo-7516363.jpeg" alt="Experience 2" className="w-24 h-24 rounded-full mx-2 mb-4" />
          <img src="https://dev-chating-app.pantheonsite.io/wp-content/uploads/2024/07/pexels-photo-5052880.jpeg" alt="Experience 3" className="w-24 h-24 rounded-full mx-2 mb-4" />
          <img src="https://dev-chating-app.pantheonsite.io/wp-content/uploads/2024/07/pexels-photo-6146955.jpeg" alt="Experience 4" className="w-24 h-24 rounded-full mx-2 mb-4" />
          <img src="https://dev-chating-app.pantheonsite.io/wp-content/uploads/2024/07/pexels-photo-5838215.jpeg" alt="Experience 5" className="w-24 h-24 rounded-full mx-2 mb-4" />
          <img src="https://dev-chating-app.pantheonsite.io/wp-content/uploads/2024/07/pexels-photo-5052876.jpeg" alt="Experience 6" className="w-24 h-24 rounded-full mx-2 mb-4" />
        </div>
      </div>
    </section>
  );
};

export default ForthSection;