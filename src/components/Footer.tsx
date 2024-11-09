const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-4 md:px-8">
      <div className="text-sm text-center text-gray-400">
        &copy; {new Date().getFullYear()} Vijay Shankar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
