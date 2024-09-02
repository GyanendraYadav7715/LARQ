const Footer = () => {
  return (
    <footer className="bg-blue-50 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-12 px-6">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800">
            Become an insider
          </h2>
          <p className="mt-2 text-gray-600">
            Receive exclusive offers, hydration news, and more when you
            subscribe.
          </p>
          <div className="mt-4 flex items-center">
            <input
              type="email"
              placeholder="Email address"
              className="p-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-md">
              →
            </button>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <ul className="space-y-2 text-gray-600">
            <li>FAQ</li>
            <li>Reviews</li>
            <li>Contact</li>
            <li>Find a retailer</li>
            <li>Corporate gifting</li>
            <li>Wholesale</li>
          </ul>
          <ul className="space-y-2 text-gray-600">
            <li>basq magazine</li>
            <li>Press</li>
            <li>Our story</li>
            <li>Affiliate program</li>
            <li>Ambassador program</li>
          </ul>
        </div>

        {/* Right Illustration Section */}
        <div className="hidden lg:block flex-1">
          <img src="/path-to-your-illustration.png" alt="Illustration" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-200 pt-6 flex justify-between items-center px-6">
        <div className="text-gray-600">
          <img
            src="/path-to-flag-icon.png"
            alt="United States"
            className="inline-block mr-2"
          />
          United States
        </div>
        <div className="flex space-x-4 text-gray-600">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
          <a href="#">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
