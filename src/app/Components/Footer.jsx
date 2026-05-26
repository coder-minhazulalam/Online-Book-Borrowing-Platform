import { Button } from "@heroui/react";
import { FaFacebook, FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";

const Footer = () => {
  return (

    <div className="bg-[#ececf1]">
      <footer className="bg-[#d9e1f2] py-14 px-6 mx-10 shadow-2xl rounded-2xl md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="space-y-5">

          <div>
            <h2 className="text-5xl font-bold text-[#2e2ea8]">
              BOOK<span className="text-[#792CA2]">LOOP</span>
            </h2>

            <p className="text-gray-700 mt-3 text-sm leading-6 max-w-md">
              Discover, borrow, and explore your favorite books with
              BookLoop Library. Your reading journey starts here.
            </p>
          </div>

          <h2 className="text-[20px] font-bold text-[#2e2ea8]">
              Social Link
            </h2>
          {/* Social Links */}
          <div className="flex gap-5 text-sm font-medium text-[#2e2ea8]">

            <FaFacebook size={24} />

            <FaInstagram size={24}/>

            <FaTwitter size={24}/>
            <FaTelegramPlane  size={24}/>


          </div>

          <p className="text-gray-600 text-sm">
            © 2024 BookLoop Library. All rights reserved.
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="rounded-md ">



          <form className="space-y-1 w-7/10 mx-auto">
         <h2 className="text-[20px] font-bold text-start text-[#142f84] mb-8">
            Contact Us
          </h2>

            {/* Name */}
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full px-4 py-2  border-b-2 border-gray-600 text-gray-700 placeholder:text-gray-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="w-full  px-4 py-2  border-b-2 border-gray-600 text-gray-700 placeholder:text-gray-500"
            />

            {/* Message */}
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full  bg-[#d9d9d9] px-4 py-4 outline-none resize-none text-gray-700 placeholder:text-gray-500"
            />

            {/* Submit Button */}
            <div className="flex justify-start pt-2">
              <Button
                type="submit"
                className="border-2 border-[#d9d9d9] bg-yellow-500  px-10 py-2 font-semibold text-[#142f84] hover:bg-yellow-500 hover:text-white transition duration-300"
              >
                SUBMIT
              </Button>
            </div>
          </form>
        </div>

      </div>
    </footer>

    </div>
  
  );
};

export default Footer;