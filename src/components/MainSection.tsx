import { motion, useScroll, useTransform } from 'framer-motion';
import ProfilePic from '../assets/profilepic.png';

const MainSection = ({ scrollToSection }: { scrollToSection: Function }) => {
  const { scrollY } = useScroll();
  const fadeOut = useTransform(scrollY, [0, window.innerHeight - 64], [1, 0.4]);
  const moveUp = useTransform(
    scrollY,
    [0, window.innerHeight - 64],
    ['0%', '0%'],
  );

  return (
    <motion.section
      className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white"
      style={{ opacity: fadeOut, y: moveUp }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-center gap-4 justify-between w-full max-w-7xl px-8">
        {/* Left Section: Text Content */}
        <motion.div
          className="md:w-1/2 pt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Title */}
          <motion.h1
            className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            Hi, I'm Vijay Shankar
          </motion.h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">
            A passionate{' '}
            <span className="font-semibold text-yellow-400">
              Software Engineer
            </span>{' '}
            creating modern web applications.
          </p>

          {/* Contact Me and Download CV Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-yellow-400 sm:text-base text-sm text-yellow-400 font-semibold sm:py-2 sm:px-6  py-1 px-4 rounded-full shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Contact Me
            </button>
            <a
              href="https://drive.google.com/uc?export=download&id=1R7KX7GpIGhB6lAjUnl2hF6WB8x2hFj5D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-teal-400 sm:text-base text-sm text-teal-400 font-semibold sm:py-2 sm:px-6  py-1 px-4 rounded-full shadow-lg hover:bg-teal-500 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Section: Profile Picture */}
        <motion.div
          className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <div className="relative overflow-hidden">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-full h-full rounded-3xl object-cover -mb-7"
            />
            <div className="absolute inset-0 top-[70%] bg-gradient-to-b from-gray-900 to-gray-800 from-transparent"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MainSection;
