import React from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const About = () => {
  const settings = {
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
          <a href="/abouts" className="hover:text-orange-600 text-orange-600 font-semibold">About</a>
          <a href="/service" className="hover:text-orange-600 font-semibold">Services</a>
          <a href="/contact" className="hover:text-orange-600 font-semibold">Contact</a>
        </nav>
        <Link to="/login">
          <button className="relative border-2 border-red-500 right-[150px] text-red-500 rounded-full px-4 py-2 hover:bg-red-500 hover:text-white transition">
            Get Started
          </button>
        </Link>
      </header>

      <div className="flex-1 overflow-y-auto bg-white">
        <section className="relative">
          <Slider {...settings}>
            <div>
              <img src="https://images.pexels.com/photos/5807811/pexels-photo-5807811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Background" className="w-full h-96 object-cover" />
            </div>
            <div>
              <img src="https://images.pexels.com/photos/4038866/pexels-photo-4038866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Vision Mission" className="w-full h-96 object-cover" />
            </div>
            <div>
              <img src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Our Story" className="w-full h-96 object-cover" />
            </div>
          </Slider>
          <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 text-white">
            <h2 className="relative font-bold top-2 left-[200px] text-x mb-4">Discover</h2>
            <h1 className="relative font-bold -bottom-1 left-[200px] text-4xl mb-6">Unleashing The Future Of Online Communication</h1>
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
              <small className="text-red-600 text-xl font-semibold uppercase">Our Vision & Mission</small>
              <h2 className="text-4xl font-bold">Innovative Solutions For Seamless Digital Interactions</h2>
            </div>
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2">
                <div className="relative h-[450px] w-[400px] mx-auto rounded-tl-3xl rounded-br-3xl shadow-xl overflow-hidden">
                  <img src="https://images.pexels.com/photos/4038866/pexels-photo-4038866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Vision Mission" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-12 mt-6 md:mt-0">
                <p className="text-black font-bold text-2xl mb-4">Empowering connections with cutting-edge technology, elevating online dialogue for enhanced user experiences.</p>
                <p className="text-black font-semibold mb-4">Chatti has transformed online conversations, delivering secure, efficient communication solutions for businesses and individuals globally. Our customizable features ensure smoother interactions, enhancing productivity and connectivity.</p>
                <p className="text-black font-semibold">Experience a new level of messaging with Chatti, where intuitive design meets top-notch security for a chat experience like no other.</p>
              </div>
            </div>
          </div>
        
        </section>

        <section className="bg-pink-200 py-12">
          <div className="container mx-auto px-6">
            <div className="text-left mb-12">
              <small className="text-red-600 font-bold text-xl uppercase">Our Story</small>
              <h2 className="text-4xl font-bold">Journey Of Innovation</h2>
            </div>
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2 md:pr-12">
                <p className="text-black font-semibold mb-4">Chatti began as a vision of tech-savvy entrepreneurs to revolutionize digital communication. The journey started with a passion for creating a chat application that seamlessly connects users across devices. Overcoming challenges and embracing innovation, Chatti evolved into a cutting-edge platform offering secure messaging and customizable settings. Today, we continue to shape the future of online interaction, making chatting intuitive and enjoyable for all.</p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative h-[500px] w-[400px] mx-auto rounded-tl-3xl rounded-br-3xl shadow-xl overflow-hidden">
                  <img src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Our Story" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute font-semibold w-full bottom-[-90px] bg-white py-6 text-center text-black">
            <p>Copyright @ 2024 Chatti</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
