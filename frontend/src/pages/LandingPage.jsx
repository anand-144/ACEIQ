import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiBrain } from 'react-icons/bi';
import { LuSparkles } from 'react-icons/lu';

import HomeImg from '../assets/HeroImg.png';
import { APP_FEATURES } from '../utils/data';

import ShinyText from '../animations/ShinyText';
import BlurText from '../animations/BlurText';
import CurvedLoop from '../animations/CurvedLoop';

import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import Modal from '../components/Loaders/Modal';

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const handleCTA = () => navigate('/signup');

  return (
    <>
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-[#F8F0FF] relative overflow-hidden">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-pink-200/20 blur-3xl absolute top-0 left-0 z-0" />

        <div className="container mx-auto px-4 pt-6 pb-20 relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center flex-wrap mb-12 gap-y-4">
            <div className="flex items-center gap-2 text-lg sm:text-xl text-black font-bold text-center sm:text-left">
              <BiBrain className="text-[#EC5EC1] text-3xl animate-pulse drop-shadow-[0_0_8px_rgba(236,94,193,0.8)]" />
              <span className="text-[#B282F4]">AceIQ</span>
            </div>

            <button
              onClick={() => {
                setOpenAuthModal(true);
                setCurrentPage('login');
              }}
              className="relative z-10 text-sm font-semibold text-white px-6 py-2.5 rounded-full border transition-all duration-300 bg-gradient-to-r from-[#EC5EC1] to-[#B282F4] hover:from-[#FF45A3] hover:to-[#C68AFF]"
            >
              Login / Sign Up
            </button>
          </header>

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-2 text-sm text-[#EC5EC1] font-semibold bg-[#300024] px-3 py-1 rounded-full border-2 border-[#EC5EC1] w-fit mb-4">
                <LuSparkles /> AI Powered <LuSparkles />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-slate-700 font-medium mb-6 leading-tight">
                AceInterview with <br />
                <ShinyText
                  text="AI-Powered"
                  speed={4}
                  className="text-4xl sm:text-5xl lg:text-6xl font-semibold"
                />{' '}
                Learning
              </h1>

              <p className="text-base sm:text-lg text-gray-900 mb-6">
                Get role-specific questions, expand answers when you need them, dive into concepts, and organize everything your way. From preparation to mastery — your ultimate interview toolkit is here.
              </p>

              <button
                onClick={handleCTA}
                className="bg-[#EC5EC1] hover:bg-[#FF45A3] text-white text-sm font-semibold px-6 py-2.5 rounded-full border-2 border-[#490037] transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Hero Image */}
            <div className="w-full md:w-1/2">
              <img src={HomeImg} alt="Hero" className="w-full max-w-[500px] mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-[#F8F0FF] py-16 px-4">
        <div className="container mx-auto">
          {/* Curved Animated Text */}
          <div className="flex justify-center mb-6">
            <CurvedLoop />
          </div>

          {/* Centered BlurText Heading */}
          <div className="flex justify-center">
            <BlurText
              text="Features that make you shine"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#B282F4]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {APP_FEATURES.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg shadow-pink-200 transition border border-[#EC5EC1]/30"
              >
                <h3 className="text-lg font-semibold text-[#B282F4] mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage('login');
        }}
        hideHeader
      >
        <div>
          {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === 'signup' && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>

      {/* Footer */}
      <footer className="text-sm bg-[#F3E7F5] text-black text-center p-5">
        Made with Passion 💖 <br />
        © {new Date().getFullYear()} AceIQ. All rights reserved.
      </footer>
    </>
  );
};

export default LandingPage;
