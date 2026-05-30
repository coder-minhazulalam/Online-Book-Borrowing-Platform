import { Button } from "@heroui/react";
import { FaFacebook, FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#ececf1] py-6 sm:py-10">
      <footer className="bg-[#d9e1f2] py-10 px-6 sm:px-8 md:py-14 md:px-12 mx-4 sm:mx-8 md:mx-10 shadow-2xl rounded-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Side */}
          <div className="space-y-6 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#2e2ea8] tracking-tight">
                BOOK<span className="text-[#792CA2]">LOOP</span>
              </h2>

              <p className="text-gray-700 mt-4 text-sm sm:text-base leading-relaxed max-w-md">
                Discover, borrow, and explore your favorite books with
                BookLoop Library. Your reading journey starts here.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-bold text-[#2e2ea8]">
                Social Links
              </h2>
              {/* Social Links */}
              <div className="flex gap-4 text-sm font-medium text-[#2e2ea8]">
                <a 
                  href="#" 
                  className="p-2 bg-white/50 rounded-full hover:bg-[#2e2ea8] hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-white/50 rounded-full hover:bg-[#792CA2] hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-white/50 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-white/50 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="Telegram"
                >
                  <FaTelegramPlane size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/40 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/50 shadow-inner w-full max-w-lg mx-auto lg:ml-auto lg:mr-0">
            <form className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#142f84] flex items-center gap-2">
                <MdOutlineContactSupport className="text-2xl" />
                Contact Us
              </h2>

              {/* Name */}
              <div className="space-y-1">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full bg-white/60 hover:bg-white/80 focus:bg-white px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2e2ea8] focus:ring-2 focus:ring-[#2e2ea8]/20 text-gray-800 placeholder:text-gray-500 outline-none transition duration-300 shadow-sm"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  className="w-full bg-white/60 hover:bg-white/80 focus:bg-white px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2e2ea8] focus:ring-2 focus:ring-[#2e2ea8]/20 text-gray-800 placeholder:text-gray-500 outline-none transition duration-300 shadow-sm"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full bg-white/60 hover:bg-white/80 focus:bg-white px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2e2ea8] focus:ring-2 focus:ring-[#2e2ea8]/20 text-gray-800 placeholder:text-gray-500 outline-none resize-none transition duration-300 shadow-sm"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-start">
                <Button
                  type="submit"
                  className="w-full sm:w-auto border-2 border-[#d9d9d9] bg-yellow-500 px-8 py-2.5 font-bold text-[#142f84] hover:bg-[#142f84] hover:text-white transition duration-300 shadow-md rounded-lg"
                >
                  SUBMIT
                </Button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom border & Copyright info */}
        <div className="border-t border-gray-400/30 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} BookLoop Library. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#2e2ea8] transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-[#2e2ea8] transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;