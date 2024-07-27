import React from 'react';
import { Link } from 'react-router-dom';

const SixthSection = () => {
  return (
    <section className="w-[100vw] h-[100vh] font-quicksand">
    <div className="relative bg-white py-20">
      <div className="text-center">
        <h4 className="text-red-500 text-lg font-semibold">CUSTOMER</h4>
        <h1 className="text-3xl font-bold mt-2">See What Our Users Are Saying</h1>
        <div className="flex justify-center mt-8 space-x-8">
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-red-800 font-bold text-3xl">“</div>
            <p className="mt-2">Chattit has transformed how I communicate online, making it convenient and secure. I highly recommend it to anyone looking for a reliable chat app.</p>
            <p className="mt-2 font-semibold">- Sam Smith</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-red-800 font-bold text-3xl">“</div>
            <p className="mt-2">I am impressed by the features and ease of use of ChattinApp. It has truly enhanced my messaging experience. Great job, team!</p>
            <p className="mt-2 font-semibold">- Brian Johnson</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-red-800 font-bold text-3xl">“</div>
            <p className="mt-2">Chatti App has made online conversations feel more personal and secure. It’s my go-to platform for both work and staying in touch with friends.</p>
            <p className="mt-2 font-semibold">- Emily Watts</p>
          </div>
        </div>
      </div>
     <div className="relative top-[26px] bg-cover bg-center py-20" style={{ backgroundImage: `url('https://dev-chating-app.pantheonsite.io/wp-content/uploads/2024/07/pexels-photo-5926370.jpeg')` }}>
     <div className="text-center text-white">
       <h4 className="text-lg font-semibold">JOIN NOW</h4>
       <h1 className="text-3xl font-bold mt-2">Start Chatting Smarter With Chatti Today</h1>
       <h4 className="text-lg font-normal mt-2">
         Experience the future of online communication with Chatti. Join now and revolutionize <br /> the way you chat!
       </h4>
       <Link  to="/login">
       <button className="mt-4 px-6 py-3 bg-red-800 text-white font-semibold rounded-full">GET STARTED</button>
       </Link>
     </div>
     <div className="absolute w-full bottom-[-90px] bg-white py-6 text-center text-black">
      <p>Copyright @ 2024 Chatti</p>
    </div>
</div>
</div>
</section>
  );
};

export default SixthSection;