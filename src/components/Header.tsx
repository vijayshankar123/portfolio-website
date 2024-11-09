import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { email, urls } from '../utils/constants';

const Header = ({ scrollToSection }: { scrollToSection: Function }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown if a click happens outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white py-4 px-8 flex justify-between items-center z-50 shadow-lg">
      <div className="text-2xl font-bold">
        <Link
          to="/"
          // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-yellow-400 hover:text-yellow-500"
        >
          Vijay Shankar
        </Link>
      </div>

      {/* Center Navigation Links */}
      <nav className="hidden md:flex space-x-8">
        <Link
          to="#about"
          onClick={() => scrollToSection('about')}
          className="hover:text-yellow-400"
        >
          About
        </Link>
        <Link
          to="#experience"
          // scroll={scrollWithOffset}
          onClick={() => scrollToSection('experience')}
          className="hover:text-yellow-400"
        >
          Experience
        </Link>
        <Link
          to="/#contact"
          onClick={() => scrollToSection('contact')}
          // scroll={scrollWithOffset}
          className="hover:text-yellow-400"
        >
          Contact
        </Link>
      </nav>

      {/* Social Links on the Right with Yellow Color */}
      <div className="hidden md:flex space-x-6 items-center">
        <a
          href={urls.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:text-yellow-500"
        >
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
        </a>
        <a
          href={urls.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:text-yellow-500"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
        </a>
        <a
          href={`mailto:${email}`}
          className="text-yellow-400 hover:text-yellow-500"
        >
          <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
        </a>
      </div>

      {/* Dropdown Button for Small Screens */}
      <div className="md:hidden relative" ref={dropdownRef}>
        <button
          onClick={toggleMenu}
          className="text-yellow-400 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Dropdown Menu with Social Links and Navigation Links */}
        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames="dropdown"
          unmountOnExit
        >
          <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-48 p-4 transition-all duration-200 ease-in-out">
            <Link
              to="#about"
              onClick={() => scrollToSection('about')}
              className="block py-2 px-4 hover:bg-gray-700"
            >
              About
            </Link>
            <Link
              to="#experience"
              onClick={() => scrollToSection('experience')}
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Experience
            </Link>
            <Link
              to="#contact"
              onClick={() => scrollToSection('contact')}
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Contact
            </Link>
            <div className="flex space-x-4 mt-4">
              <a
                href={urls.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-500"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </a>
              <a
                href={urls.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-500"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${email}`}
                className="text-yellow-400 hover:text-yellow-500"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </CSSTransition>
      </div>
    </header>
  );
};

export default Header;
