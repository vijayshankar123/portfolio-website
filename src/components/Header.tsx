import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <h1 className="text-3xl font-semibold">Vijay Shankar</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
