import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    id: '01.',
    title: 'Single Chat',
    img: '1.png',
    par: 'Engage in one-on-one conversations with secure and private messaging.',
  },
  {
    id: '02.',
    title: 'Group Chat',
    img: '2.png',
    par: 'Connect with multiple people simultaneously in a dynamic group chat environment.',
  },
  {
    id: '03.',
    title: 'Send Requests',
    img: '3.png',
    par: 'Easily send and manage friend requests to expand your network.',
  },
  {
    id: '04.',
    title: 'Notification Alerts',
    img: '4.png',
    par: 'Stay updated with real-time notifications and alerts for important messages.',
  },
  {
    id: '05.',
    title: 'Manage Group',
    img: '5.png',
    par: 'Efficiently manage group chats with advanced administrative tools and features.',
  },
  {
    id: '06.',
    title: 'Admin Panel',
    img: '6.png',
    par: 'Gain control over user management and settings with a comprehensive admin panel.',
  },
];

const sliderImages = [
  'https://images.pexels.com/photos/5077393/pexels-photo-5077393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/5926370/pexels-photo-5926370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const Services = () => {
  const cardAnimations = services.map(() => useAnimation());

  const handleHover = (index) => {
    cardAnimations[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cardAnimations[index].start({ y: "100%" });
  };

  const renderAnimatedText = (text, animation) => {
    return text.split('').map((item, index) => (
      <motion.span
        key={index}
        initial={{ y: "100%" }}
        animate={animation}
        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
        className='inline-block'
      >
        {item}
      </motion.span>
    ));
  };

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
    <div className="h-[100vh] flex flex-col font-quicksand">
      <div className="flex justify-between items-center p-6 bg-white shadow-xl">
        <div className="text-2xl font-bold text-gray-800">Chatti</div>
        <div className="space-x-4">
          <a href="/home" className="hover:text-orange-600 font-semibold">Home</a>
          <a href="/abouts" className="hover:text-orange-600 font-semibold">About</a>
          <a href="/service" className="hover:text-orange-600 text-orange-600 font-semibold">Services</a>
          <a href="/contact" className="hover:text-orange-600 font-semibold">Contact</a>
        </div>
        <Link to="/login">
          <button className="relative border-2 border-red-500 text-red-500 rounded-full px-4 py-2 hover:bg-red-500 hover:text-white transition">
            Get Started
          </button>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto bg-white">
        <div className="relative">
          <Slider {...sliderSettings}>
            {sliderImages.map((src, index) => (
              <div key={index}>
                <img src={src} alt={`Slider image ${index + 1}`} className="w-full h-96 object-cover" />
              </div>
            ))}
          </Slider>
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white text-center">
            <h2 className="font-bold text-xl mb-4">Explore</h2>
            <h1 className="font-bold text-6xl mb-6">Our Comprehensive Service Offerings</h1>
            <Link to="/login">
              <button className="font-bold bg-red-500 text-white rounded-full px-6 py-3 hover:bg-white hover:text-red-500 transition">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mt-12 px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onHoverStart={() => handleHover(index)}
              onHoverEnd={() => handleHoverEnd(index)}
              className="bg-white rounded-lg p-6 shadow-xl relative overflow-hidden group"
            >
              <motion.h1
                className="absolute flex overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-4xl leading-none tracking-tighter text-black group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
              >
                {renderAnimatedText(service.title, cardAnimations[index])}
              </motion.h1>
              <div className="text-red-500 text-2xl font-bold">{service.id}</div>
              <p className="mt-2">{service.par}</p>
              <motion.div
                className="w-full rounded-lg h-40 mt-4 overflow-hidden group-hover:h-80 transition-all duration-500"
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="relative w-full py-20 bg-cover bg-center mt-12" style={{ backgroundImage: `url('https://dev-chating-app.pantheonsite.io/wp-content/uploads/2024/07/pexels-photo-5926370.jpeg')` }}>
          <div className="bg-white w-full h-10 transform -translate-y-1/2 -skew-y-1"></div>
          <div className="text-center text-white py-20">
            <h4 className="text-lg font-semibold">JOIN NOW</h4>
            <h1 className="text-3xl font-bold mt-2">Start Chatting Smarter With Chatti Today</h1>
            <h4 className="text-lg font-normal mt-2">
              Experience the future of online communication with Chatti. Join now and revolutionize <br /> the way you chat!
            </h4>
            <Link to="/login">
              <button className="font-bold bg-red-500 text-white rounded-full px-6 py-3 hover:bg-white hover:text-red-500 transition">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white py-6 text-center text-black">
        <p>Copyright @ 2024 Chatti</p>
      </div>
    </div>
  );
};

export default Services;
