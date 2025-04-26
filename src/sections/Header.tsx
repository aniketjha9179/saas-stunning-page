'use client';

import { useState } from 'react';
import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* Top black bar */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get Started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      {/* Main header */}
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />

            {/* Menu Button for Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none"
            >
              <MenuIcon className="h-6 w-6" />
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>

          {/* Mobile nav */}
          {isOpen && (
            <div className="mt-4 flex flex-col gap-4 md:hidden text-black/60 animate-fade-in-down">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight">
                Get for free
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
