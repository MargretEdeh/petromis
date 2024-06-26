import React, { useState } from 'react';
import petromisLogo from '../assets/Images/petromisLogo.png';
import { MdMenu } from 'react-icons/md';
import Button from './Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu on mobile after clicking a link
  };
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
    handleSetActiveLink(link);
  };

  return (
    <div className="w-full font-poppins h-20 flex items-center justify-between px-14 py-4  ">
      <img src={petromisLogo} alt="logo" className="w-20" />
      <div className=" hidden lg:flex gap-7 ">
        <div className="hidden lg:flex gap-7">
          <a
            href="#home"
            className={`cursor-pointer ${
              activeLink === 'home'
                ? 'text-primary border-b-2 border-b-primary'
                : ''
            }`}
            onClick={(e) => handleLinkClick(e, 'home')}
          >
            Home
          </a>
          <a
            href="#about"
            className={`cursor-pointer ${
              activeLink === 'about'
                ? 'text-primary border-b-2 border-b-primary'
                : ''
            }`}
            onClick={(e) => handleLinkClick(e, 'about')}
          >
            About Petromis
          </a>
          <a
            href="#services"
            className={`cursor-pointer ${
              activeLink === 'services'
                ? 'text-primary border-b-2 border-b-primary'
                : ''
            }`}
            onClick={(e) => handleLinkClick(e, 'services')}
          >
            Services
          </a>
          <a
            href="#work"
            className={`cursor-pointer ${
              activeLink === 'work'
                ? 'text-primary border-b-2 border-b-primary'
                : ''
            }`}
            onClick={(e) => handleLinkClick(e, 'work')}
          >
            Work
          </a>
          <a
            href="#request-quote"
            className={`cursor-pointer ${
              activeLink === 'request-quote'
                ? 'text-primary border-b-2 border-b-primary'
                : ''
            }`}
            onClick={(e) => handleLinkClick(e, 'request-quote')}
          >
            Request Quote
          </a>
        </div>
      </div>
      <div className=" hidden lg:flex">
        <Button size="md" className="bg-secondary py-2 text-white rounded-md">
          Get a Quote{' '}
        </Button>
      </div>
      <div className="block lg:hidden">
        {' '}
        <button onClick={toggleMenu} className="text-gray-800">
          <MdMenu className="text-2xl" />
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 "
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`fixed z-40 top-0 left-0 h-full bg-white shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 w-[70%] ease-in-out lg:hidden`}
      >
        <div className="flex justify-between  items-center p-4">
          <img src={petromisLogo} alt="logo" />
          <button onClick={toggleMenu} className="text-gray-800">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-7 p-4">
          <a
            href="#home"
            className={`cursor-pointer ${
              activeLink === 'home'
                ? 'text-primary border-b-2 border-b-primary'
                : ''
            }`}
            onClick={(e) => handleLinkClick(e, 'home')}
          >
            Home
          </a>
          <a
            href="#about"
            className={`cursor-pointer ${
              activeLink === 'about'
                ? 'text-primary border-b-2 border-b-primary'
                : ''
            }`}
            onClick={(e) => handleLinkClick(e, 'about')}
          >
            About Petromis
          </a>
          <a
            href="#services"
            className={`cursor-pointer ${
              activeLink === 'services'
                ? 'text-primary border-b-2 border-b-primary'
                : ''
            }`}
            onClick={(e) => handleLinkClick(e, 'services')}
          >
            Services
          </a>
          <a
            href="#work"
            className={`cursor-pointer ${
              activeLink === 'work'
                ? 'text-primary border-b-2 border-b-primary'
                : ''
            }`}
            onClick={(e) => handleLinkClick(e, 'work')}
          >
            Work
          </a>
          <a
            href="#request-quote"
            className={`cursor-pointer ${
              activeLink === 'request-quote'
                ? 'text-primary border-b-2 border-b-primary'
                : ''
            }`}
            onClick={(e) => handleLinkClick(e, 'request-quote')}
          >
            Request Quote
          </a>
        </nav>
      </div>
    </div>
  );
}
