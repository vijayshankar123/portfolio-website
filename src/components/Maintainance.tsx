import { email } from '../utils/constants';

//COMPONENT
const Maintenance = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="p-8 text-center max-w-lg mx-auto shadow-lg rounded-xl bg-gray-800 bg-opacity-75">
        <div className="flex justify-center mb-6">
          <svg
            className="w-20 h-20 text-yellow-500 animate-pulse"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1 4h.01M17.293 9.707a1 1 0 00-1.414 0L12 13.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l5-5a1 1 0 000-1.414z"
            />
          </svg>
        </div>
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4">
          Hey there! I'm currently making improvements.
        </h1>
        <p className="text-xl mb-6 text-gray-300">
          My website is undergoing scheduled maintenance as I work on some
          exciting updates. Please check back soon, I promise it'll be worth the
          wait!
        </p>
        <p className="text-sm text-gray-400 mb-8">
          In the meantime, if you have any urgent inquiries, feel free to reach
          out to me directly at{' '}
          <a
            href={`mailto:${email}`}
            className="text-yellow-400 hover:underline"
          >
            {email}
          </a>
        </p>
        <div className="mt-8">
          <button
            onClick={() => window.location.reload()}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-lg transition duration-200 ease-in-out transform hover:scale-105"
          >
            Refresh to Check Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
