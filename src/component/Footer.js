"use client";
import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowFooter(true);
          } else {
            setShowFooter(false);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(document.querySelector("#bottom-trigger"));

    return () => observer.disconnect();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`fixed bottom-0 left-0 w-full ${
        showFooter ? "animate-slide-up" : "hidden"
      }`}
    >
      <div
        className={`flex items-center justify-center p-4 ${
          showFooter ? "bg-gray-100 text-gray-600" : "bg-gray-800 text-white"
        }`}
      >
        <p className="mr-2">© {currentYear} IMDb Clone. All rights reserved.</p>
        <a
          href="https://www.linkedin.com/in/abdellah-belcaid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className={`text-2xl hover:text-blue-500 transition-colors duration-300 ${
              showFooter ? "text-gray-600" : "text-white"
            }`}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
