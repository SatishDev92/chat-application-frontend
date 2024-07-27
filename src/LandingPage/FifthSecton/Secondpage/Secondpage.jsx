import React from 'react';
import { Link } from 'react-router-dom';



const Secondpage = () => { 
    return(
      <section className="second h-[100vh] w-[100vw] font-quicksand">
      <div className=" relative  w-full bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('https://images.pexels.com/photos/5838215/pexels-photo-5838215.jpeg?w=1280')" }}>
      <div className="absolute inset-0 bg-black opacity-80">
      <div className="container mx-auto px-6 flex items-center">
      <p className=" absolute  left-[150px] text-lg p1 text-white font-bold animate-comeUp">Connect with Ease</p>
      <div className="w-1/2">
            <h1 className=" absolute left-[150px] text-5xl head1  text-white font-bold my-4 animate-move">Revolutionize Your</h1>
            <h1 className=" absolute left-[150px] text-5xl head2  text-white font-bold my-3 animate-fude">Chats With</h1>
            <h1 className=" absolute left-[150px] text-5xl head3  text-white font-bold my-32 animate-fadein">Chatti </h1>
          </div>
          <p className=" absolute left-[150px] text-lg p2  text-white font-bold animate-comeUp">Experience seamless communication across all devices with advanced <br></br> features</p>
            <Link  to="/login">
            <button className=" absolute mt-4 btn1 left-[150px] bg-red-900 hover:bg-red-900 text-white font-bold py-3 px-6 rounded-full animate-comeUp ">Get Started</button>
            </Link>
          </div>
          </div>
        <div className=" absolute small w-1/2 flex justify-center items-center">
          <div className="custom-rounded overflow-hidden animate-fadein">
            <img src="https://dev-chating-app.pantheonsite.io/wp-content/uploads/2024/07/pexels-photo-5052880.jpeg" alt="Rounded Image" />
          </div>
        </div>
      </div>
      </section>
    );
}

export default Secondpage;
