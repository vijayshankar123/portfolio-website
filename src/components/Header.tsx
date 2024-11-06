import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-semibold">
          <Link to="/">Vijay Shankar</Link>
        </h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-yellow-400">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
