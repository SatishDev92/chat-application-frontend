import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Contact = () => {
  const sliderImages = [
    'https://images.pexels.com/photos/5077393/pexels-photo-5077393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/5926370/pexels-photo-5926370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="font-quicksand w-full h-[100vh] flex flex-col">
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-2xl font-bold text-gray-800">Chatti</div>
        <nav className="space-x-4">
          <a href="/home" className="hover:text-orange-600 font-semibold">Home</a>
          <a href="/abouts" className="hover:text-orange-600 font-semibold">About</a>
          <a href="/service" className="hover:text-orange-600 font-semibold">Services</a>
          <a href="/contact" className="hover:text-orange-600 text-orange-600 font-semibold">Contact</a>
        </nav>
        <Link to="/login">
          <button className="relative border-2 border-red-500 right-[150px] text-red-500 rounded-full px-4 py-2 hover:bg-red-500 hover:text-white transition">
            Get Started
          </button>
        </Link>
      </header>

      <div className="flex-1 overflow-y-auto bg-white">
        <section className="relative">
          <Slider {...sliderSettings}>
            {sliderImages.map((src, index) => (
              <div key={index}>
                <img src={src} alt={`Slider image ${index + 1}`} className="w-full h-96 object-cover" />
              </div>
            ))}
          </Slider>
          <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 text-white">
            <h2 className="relative font-bold top-2 left-[200px] text-x mb-4">GET IN</h2>
            <h1 className="relative font-bold -bottom-1 left-[200px] text-4xl mb-6">Touch With Us</h1>
            <Link to="/login">
              <button className="relative font-bold top-3 left-[200px] bg-red-500 text-white rounded-full px-6 py-3 hover:bg-white hover:text-red-500 transition">
                Get Started
              </button>
            </Link>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="container mx-auto px-6">
            <div className="text-left mb-12">
              <small className="text-red-600 text-xl font-semibold uppercase">Contact Us</small>
              <h2 className="text-4xl font-bold">We'd Love To Hear From You</h2>
            </div>
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2">
                <div className="relative h-[450px] w-[400px] mx-auto rounded-tl-3xl rounded-br-3xl shadow-xl overflow-hidden">
                  <img src="https://images.pexels.com/photos/5077393/pexels-photo-5077393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Contact Us" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12 mt-6 md:mt-0">
                <p className="text-black font-bold text-2xl mb-4">Get in touch with us for any queries or support. We're here to help!</p>
                <p className="text-black font-semibold mb-4"><FaPhoneAlt className="inline-block mr-2" /> 123-456-7890</p>
                <p className="text-black font-semibold mb-4"><FaEnvelope className="inline-block mr-2" /> contact@chatti.com</p>
                <p className="text-black font-semibold"><FaMapMarkerAlt className="inline-block mr-2" /> 1234 Street Name, City, State, 12345</p>
              </div>
            </div>
          </div>
         
        </section>

        <section className="bg-pink-200 py-12">
          <div className="container mx-auto px-6">
            <div className="text-left mb-12">
              <small className="text-red-600 font-bold text-xl uppercase">Reach Out</small>
              <h2 className="text-4xl font-bold">Contact Form</h2>
            </div>
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2 md:pr-12">
                <form className="space-y-4">
                  <input type="text" placeholder="Name" className="w-full p-4 border rounded-lg" />
                  <input type="email" placeholder="Email" className="w-full p-4 border rounded-lg" />
                  <textarea placeholder="Message" className="w-full p-4 border rounded-lg h-32"></textarea>
                  <button type="submit" className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">Submit</button>
                </form>
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.291353089387!2d85.25664751506133!3d27.706573982794312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1832f5f5fd8b%3A0xc8b5d5bb26ee18da!2sKankali%20Secondary%20School!5e0!3m2!1sen!2snp!4v1630148293071!5m2!1sen!2snp"
                  width="100%"
                  height="300"
                  className="rounded-lg shadow-md"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
    
        </section>

        <footer className="font-quicksand bg-white py-6 text-center text-black">
          <p>Copyright © 2024 Chatti</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
