import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLocationDot,
  FaEnvelope,
  FaPhone
} from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="bg-black text-gray-300">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 py-14
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Company */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">
              Quick <span className="text-green-400">Creative</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Transforming your vision into reality with innovative solutions.
            </p>

            <div className="flex gap-4 mt-6">
              {[FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter].map(
                (Icon, i) => (
                  <button
                    key={i}
                    className="w-10 h-10 rounded-full bg-green-400
              text-black flex items-center justify-center
              hover:scale-110 transition"
                  >
                    <Icon />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-green-400 cursor-pointer">Home</li>
              <li className="hover:text-green-400 cursor-pointer">About Us</li>
              <li className="hover:text-green-400 cursor-pointer">Updates</li>
              <li className="hover:text-green-400 cursor-pointer">
                Consultation
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>Web Application</li>
              <li>Mobile Application</li>
              <li>AR/VR Development</li>
              <li>Digital Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <FaLocationDot className="text-green-400 mt-1" />
                <span>Hyderabad, India</span>
              </li>
              <li className="flex gap-3">
                <FaEnvelope className="text-green-400 mt-1" />
                quick@creative.com
              </li>
              <li className="flex gap-3">
                <FaPhone className="text-green-400 mt-1" />
                +91 8340648012
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 text-center py-4 text-sm text-gray-400">
          © 2025 Quick Creative. All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
