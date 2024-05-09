"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const CustomHeader: React.FC = () => {  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanding, setIsLanding] = useState(false);  
  const router = useRouter();
  const pathname = usePathname();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mengatur sumber gambar logo sesuai dengan status scrolling dan status menu navigasi terbuka
  const logoSrc =
    isScrolled || isMenuOpen
      ? "/img/Random Symboles 5.png"
      : "/img/Random Symboles 4.png";

  if (pathname === "/") {
    return (
      <header>
        <div className="container px-4 mx-auto">
          <nav className="flex items-center justify-between text-white">
            <div className="logo">
              <a href="#" className="flex items-center space-x-3">
                <Image src={logoSrc} alt="Docxtra Logo" height="45" width="45" />
                <span className="text-2xl font-semibold">DOCXTRA</span>
              </a>
            </div>
            <ul className="hidden md:flex space-x-8">
              <li>
                <a href="/home" className="nav-menu">
                  Home
                </a>
              </li>
              <li>
                <a href="/#section2" className="nav-menu">
                  About
                </a>
              </li>
              <li>
                <a href="/#section3" className="nav-menu">
                  Features
                </a>
              </li>
              <li>
                <a href="/#section4" className="nav-menu">
                  Review
                </a>
              </li>
              <li>
                <a href="https://intip.in/docxtrav1" className="btn-download">
                  Download
                </a>
              </li>
            </ul>
            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              className="md:hidden focus:outline-none"
              aria-controls="navbar-solid-bg"
              aria-expanded="false"
              onClick={handleToggleMenu}
            >
              <svg
                className="w-6 h-6 text-gray-300 hover:text-gray-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </nav>
        </div>

        <div
          id="navbar-solid-bg"
          className={`md:hidden ${isMenuOpen ? "show" : "hidden"}`}
        >
          <ul className="flex flex-col">
            <li>
              <a href="/home" className="nav-solid-menu">
                Home
              </a>
            </li>
            <li>
              <a href="#section2" className="nav-solid-menu">
                About
              </a>
            </li>
            <li>
              <a href="#section3" className="nav-solid-menu">
                Features
              </a>
            </li>
            <li>
              <a href="#section4" className="nav-solid-menu">
                Review
              </a>
            </li>
            <li>
              <a href="https://intip.in/docxtrav1" className="btn-download">
                Download
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  } else {
    return (
      <header>
        <div className="container px-4 mx-auto">
          <nav className="flex items-center justify-between text-white">
            <div className="logo">
              <a href="#" className="flex items-center space-x-3">
                <Image src={logoSrc} alt="Docxtra Logo" height="45" width="45" />
                <span className="text-2xl font-semibold">DOCXTRA</span>
              </a>
            </div>
            <ul className="hidden md:flex space-x-4">
              <li>
                <a href="/home" className="nav-menu">
                  Home
                </a>
              </li>
              <li>
                <a href="/summaroid" className="nav-menu">
                  Summaroid
                </a>
              </li>
              <li>
                <a href="/syntax-guard" className="nav-menu">
                  Syntax Guard
                </a>
              </li>
              <li>
                <a href="/doc-query" className="nav-menu">
                  Doc Query
                </a>
              </li>
              <li>
                <a href="/similatron" className="nav-menu">
                  Similatron
                </a>
              </li>                          
              <li>
                <a href="https://intip.in/docxtrav1" className="btn-download">
                  Download
                </a>
              </li>
            </ul>
            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              className="md:hidden focus:outline-none"
              aria-controls="navbar-solid-bg"
              aria-expanded="false"
              onClick={handleToggleMenu}
            >
              <svg
                className="w-6 h-6 text-gray-300 hover:text-gray-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </nav>
        </div>

        <div
          id="navbar-solid-bg"
          className={`md:hidden ${isMenuOpen ? "show" : "hidden"}`}
        >
          <ul className="flex flex-col">
            <li>
              <a href="/home" className="nav-solid-menu">
                Home
              </a>
            </li>
            <li>
              <a href="/summaroid" className="nav-solid-menu">
                Summaroid
              </a>
            </li>
            <li>
              <a href="/syntax-guard" className="nav-solid-menu">
                Syntax Guard
              </a>
            </li>
            <li>
              <a href="/doc-query" className="nav-solid-menu">
                Doc Query
              </a>
            </li>
            <li>
              <a href="/similatron" className="nav-solid-menu">
                Similatron
              </a>
            </li>
            <li>
              <a href="https://intip.in/docxtrav1" className="btn-download">
                Download
              </a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
};

export default CustomHeader;
