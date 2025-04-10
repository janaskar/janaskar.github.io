'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.svg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <header className="fixed w-full bg-transparent z-100 text-white font-black mix-blend-difference" >
      {/* Background gradient */}
      <div className="relative flex justify-between items-center p-4">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="invert" />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/#about" >About</Link>
          <Link href="/#skills" >Skills</Link>
          <Link href="/#projects" >Projects</Link>
        </nav>

        {/* Desktop theme toggle */}
        <div className="hidden md:flex">
          <button onClick={toggleTheme} aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={isDarkTheme ? 
                "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" : 
                "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"} />
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
      <div className="md:hidden relative w-full text-white">
        <nav className="flex flex-col items-end gap-4 px-4">
          <Link href="/#about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/#skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
          <Link href="/#projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          
          {/* Mobile theme toggle */}
          <button onClick={toggleTheme} aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"} >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={isDarkTheme ? 
                "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" : 
                "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"} />
            </svg>
          </button>
        </nav>
      </div>
      )}
    </header>
  );
}
