import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-[var(--text)] body-font relative">
      <div
        style={{ zIndex: "-1" }}
        className="px-5 pt-8 flex items-center justify-center gap-1 sm:flex-row flex-col"
      >
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            stroke-linejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-[var(--text)] p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-[var(--text)]">Saran</span>
        </a>
        <p className="text-sm text-[var(--text)] sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Portfolio website —
          <a
            href="#"
            className="text-[var(--text)] ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @saran
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="#" className="mr-1">
            <FaLinkedin />
          </a>
          <a href="#" className="mr-1">
            <FaTwitter />
          </a>
          <a href="#" className="mr-1">
            <FaGithub />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
