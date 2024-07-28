import React from "react";

const Lastpage = () => {
  return (
     <section className="relative w-[100vw] bg-pink-100 py-16 font-quicksand">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg  text-orange-600 font-bold">Our Offerings</p>
          <h2 className="text-4xl font-bold my-4">Discover Our Key Services</h2>
          <div className="flex justify-around mt-8 space-x-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <span className="text-red-500 font-bold text-xl">01.</span>
              <h3 className="text-2xl font-bold mt-2">Secure Messaging</h3>
              <p className="text-lg font-light mt-2">Send messages with utmost privacy and security</p>
              <a href="/service" className="text-red-800 font-bold mt-4 block">Read More</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <span className="text-red-500 font-bold text-xl">02.</span>
              <h3 className="text-2xl font-bold mt-2">Notification Alerts</h3>
              <p className="text-lg font-light mt-2">Stay updated with real-time notifications and alerts for important messages. </p>
              <a href="/service" className="text-red-500 font-bold mt-4 block">Read More</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <span className="text-red-500 font-bold text-xl">03.</span>
              <h3 className="text-2xl font-bold mt-2">Customizable Settings</h3>
              <p className="text-lg font-light mt-2">Tailor your chat experience to suit your preferences</p>
              <a href="/service" className="text-red-500 font-bold mt-4 block">Read More</a></div>
          </div>
        </div>
      </section>
  );
};

export default Lastpage;