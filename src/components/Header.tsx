import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const Header = () => {
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
        !dropdownRef.current?.contains(event.target as Node)
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
    <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link to="/" className="text-yellow-400 hover:text-yellow-500">
          Vijay Shankar
        </Link>
      </div>

      <nav className="hidden md:flex space-x-8">
        <Link to="/about" className="hover:text-yellow-400">
          About
        </Link>
        <Link to="/projects" className="hover:text-yellow-400">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-yellow-400">
          Contact
        </Link>
      </nav>

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

        {/* Dropdown Menu with Faster Animation */}
        <CSSTransition
          in={isOpen}
          timeout={300} // Reduced timeout for faster transition
          classNames="dropdown"
          unmountOnExit
        >
          <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-48 p-4 transition-all duration-200 ease-in-out">
            <Link to="/about" className="block py-2 px-4 hover:bg-gray-700">
              About
            </Link>
            <Link to="/projects" className="block py-2 px-4 hover:bg-gray-700">
              Projects
            </Link>
            <Link to="/contact" className="block py-2 px-4 hover:bg-gray-700">
              Contact
            </Link>
          </div>
        </CSSTransition>
      </div>
    </header>
  );
};

export default Header;
