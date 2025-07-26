"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-lg py-4 px-4 md:px-8 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2 md:gap-3">
                        <Image
                  src="/Images/clean_dyn_logo2.jpg"
                  alt="Cleaning Dynamics Ltd Logo"
                  width={120}
                  height={120}
                  className="rounded-md"
                />
        <span className="text-[#013A20] text-lg md:text-2xl font-bold tracking-wide">Cleaning Dynamics Ltd</span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Link href="/" className="text-[#212121] hover:text-[#8BC34A] font-medium transition-colors">Home</Link>
        <Link href="/about" className="text-[#212121] hover:text-[#8BC34A] font-medium transition-colors">About</Link>
        <Link href="/team" className="text-[#212121] hover:text-[#8BC34A] font-medium transition-colors">Team</Link>
        <Link href="/contact" className="text-[#212121] hover:text-[#8BC34A] font-medium transition-colors">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1 p-2"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-[#212121] transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#212121] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#212121] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col py-4">
          <Link 
            href="/" 
            className="px-6 py-3 text-[#212121] hover:text-[#8BC34A] hover:bg-gray-50 font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="px-6 py-3 text-[#212121] hover:text-[#8BC34A] hover:bg-gray-50 font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/team" 
            className="px-6 py-3 text-[#212121] hover:text-[#8BC34A] hover:bg-gray-50 font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Team
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-3 text-[#212121] hover:text-[#8BC34A] hover:bg-gray-50 font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 