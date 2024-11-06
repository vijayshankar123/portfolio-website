import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-4 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Vijay Shankar. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="w-6 h-6 text-gray-400 hover:text-gray-300 transition-all"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/yourname"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-6 h-6 text-gray-400 hover:text-gray-300 transition-all"
            />
          </a>
          <a href="mailto:your-email@gmail.com">
            <FontAwesomeIcon
              icon={faGoogle}
              className="w-6 h-6 text-gray-400 hover:text-gray-300 transition-all"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
