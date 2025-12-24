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
    <footer className="bg-black text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            trividol <span className="text-green-400">tech</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Transforming your vision into reality with innovative solutions.
            Connect with us to elevate your business to new heights today!
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400 text-black hover:scale-110 transition"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">About Us</li>
            <li className="hover:text-green-400 cursor-pointer">
              Latest Updates
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Get a free Consultation
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
            <li>Consultation</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Contact Info
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <FaLocationDot className="text-green-400 mt-1" />
              <span>
                B-48, Lala Lajpat Rai Colony,
                <br />
                Bhopal, India 462023
              </span>
            </li>
            <li className="flex gap-3">
              <FaEnvelope className="text-green-400 mt-1" />
              hello@trividoltech.com
            </li>
            <li className="flex gap-3">
              <FaPhone className="text-green-400 mt-1" />
              +91 7554169396
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-center py-4 text-sm text-gray-400">
        © 2024 Trividol Technologies. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
