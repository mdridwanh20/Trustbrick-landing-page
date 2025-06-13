import { FaEnvelope, FaFacebookF, FaGoogle, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Branding */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-2">TrustBrick</h2>
          <p className="text-sm mb-2">
            Your trusted partner in real estate and development—delivering customized, sustainable solutions for every project.
          </p>
          <p className="text-sm italic text-gray-300">Building futures, one brick at a time.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Our Services", "Projects", "Testimonials", "Terms & Conditions", "Privacy Policy"].map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:text-teal-300 transition duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1 text-gray-400" /> 87 Wellness Ave, Chattogram, Bangladesh</li>
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-gray-400" /> +1 (415) 555-2634</li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-gray-400" /> support@trustbrick.com</li>
            <li className="flex items-start gap-2"><FaWhatsapp className="mt-1 text-gray-400" /> WhatsApp: +1 (415) 555-2634</li>
            <li className="text-sm">🕒 Mon - Sat: 9:00 AM - 6:00 PM</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-teal-300 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-teal-300 transition"><FaGoogle /></a>
            <a href="#" className="hover:text-teal-300 transition"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded bg-white text-black text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#e3912b] cursor-pointer text-white px-4 py-2 rounded hover:bg-[#cc7f22] text-sm transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center border-t border-gray-700 py-4 text-sm text-gray-300">
        © 2025 <span className="font-semibold text-white">TrustBrick</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
