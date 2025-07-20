import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical, HiX } from "react-icons/hi";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const linkRefs = useRef([]);
  const dropdownRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { width: "0%" },
      { width: "100%", duration: 1, ease: "power2.out" }
    );

    gsap.from(linkRefs.current, {
      y: -20,
      opacity: 0,
      stagger: 0.2,
      delay: 0.6,
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  }, []);

  useEffect(() => {
    if (menuOpen && dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        { y: -10, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className="bg-[#ffffff46] text-black py-4 px-6 rounded-full shadow-lg w-full lg:w-[70%] mx-auto flex justify-between items-center relative"
    >
      {/* Logo */}
      <div className="text-xl lg:text-3xl font-[play] font-black">Gallery</div>

      {/* Mobile menu icon */}
      <button
        className="text-3xl md:hidden ml-auto z-30"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <HiX /> : <HiDotsVertical />}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full right-2 mt-2 w-[180px] bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-6 flex flex-col items-center space-y-4 md:hidden z-20"
        >
          {["Home", "About", "Services", "Contact"].map((text, i) => (
            <a
              key={i}
              href="#"
              className="text-lg font-semibold text-black hover:text-pink-600 transition-all duration-300"
            >
              {text}
            </a>
          ))}
        </div>
      )}

      {/* Desktop links & search */}
      <div className="hidden md:flex items-center gap-8 ml-auto">
        {/* Nav Links */}
        <div className="flex space-x-6">
          {["Home", "About", "Services", "Contact"].map((text, i) => (
            <a
              key={i}
              ref={(el) => (linkRefs.current[i] = el)}
              href="#"
              className="font- font-[play] hover:text-white transition-colors duration-300 ease-in-out"
            >
              {text}
            </a>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-[150px] lg:w-[250px] focus:w-80 transition-all duration-500 px-4 py-2 rounded-full text-black focus:outline-none bg-white"
          />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
