import bycycle from "../assets/bicycle-animation.gif";

const Footer = () => {
  return (
    <footer className="bg-[#f5f9fc] w-full h-[70vh]">
      <div className="flex w-full h-full">
        <div className="w-[65vw] h-full">
          <div className="flex p-12">
            <div className="w-[33vw]">
              <h2 className="text-4xl font-semibold text-gray-800">
                Become an insider
              </h2>
              <p className=" text-gray-600 text-lg tracking-wide mt-5 w-80">
                Receive exclusive offers, hydration news, and more when you
                subscribe.
              </p>
              <div className="mt-5 flex items-center justify-between  border border-gray-300 rounded-full  overflow-hidden bg-white px-2 w-80">
                <input
                  type="email"
                  placeholder="Email address"
                  className="p-2 focus:outline-none"
                />
                <button className="bg-[#f5f9fc] hover:bg-[#e6e9eb] text-black px-2 py-1 rounded-full">
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

            <div className="flex-1 grid grid-cols-2 gap-4">
              <ul className="space-y-4 cursor-pointer text-gray-600 text-lg">
                <li>FAQ</li>
                <li>Reviews</li>
                <li>Contact</li>
                <li>Find a retailer</li>
                <li>Corporate gifting</li>
                <li>Wholesale</li>
              </ul>
              <ul className="space-y-4 cursor-pointer text-gray-600 text-lg">
                <li>basq magazine</li>
                <li>Press</li>
                <li>Our story</li>
                <li>Affiliate program</li>
                <li>Ambassador program</li>
              </ul>
            </div>
          </div>
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
        </div>

        <div className="w-[35] h-full">
          <img
            src={bycycle}
            alt="Illustration"
            className=" w-full object-cover h-full"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
