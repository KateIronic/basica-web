import React from "react";
import { cn } from "@/lib/utils";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa"; // Import icons

const Footer: React.FC = () => {
  return (
    <footer
      className={cn(
        "bg-gray-900 bg-opacity-25 text-gray-300 p-4 border-t border-gray-700",
        "flex flex-col items-center justify-center text-center",
        "w-full mt-auto"
      )}

    >
      {/* Social Media Handles Row */}
      <div className="flex space-x-6 mb-3">
        <a
          href="https://github.com/bitwisedhruv/basica" // Replace with your GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-green-300 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://twitter.com/" // Replace with your Twitter
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-green-300 transition-colors"
          aria-label="Twitter"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://linkedin.com/in/" // Replace with your LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-green-300 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://instagram.com/" // Replace with your Instagram
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-green-300 transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
      </div>

      {/* Copyright Row */}
      <p className="text-sm mb-1">
        © {new Date().getFullYear()} All Rights Reserved
      </p>

      {/* Made with Love Row */}
      <div className="text-sm">
        Made with <FaHeart className="inline text-red-500 mx-1" size={14} /> | Website Designed and Developed by{" "}
        <span className="text-purple-600 font-semibold">Raghav</span>
        <div>Basica is developed by <span className="text-purple-600 font-semibold">Dhruv</span>, <span className="text-purple-600 font-semibold">Harsh</span> and <span className="text-purple-600 font-semibold">Raghav</span></div>

      </div>
    </footer>
  );
};

export default Footer;