import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} MMC Print & Packaging. All rights
          reserved.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/matthew-mullen-83a80a240/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/mmc.print.packaging/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
