import React, { useState, useEffect } from 'react';
import { images } from '../../assets/images';
import { Link, NavLink } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon, Menu, X } from 'lucide-react';

function Header() {
  const [open, setOpen] = useState(false);

  // Scroll or sticky header logic here (optional)
  useEffect(() => {
    const handleScroll = () => {
      // your logic if needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      {/* Social + Email Section */}
      <div className='hidden md:flex items-center bg-[#57e1da] justify-center text-xl py-2 gap-4'>
        <a href='https://www.facebook.com/meshdoor/' target='_blank' rel='noopener noreferrer'>
          <FacebookIcon className='text-white w-6 h-6' />
        </a>
        <a href='https://www.instagram.com/meshdoor/' target='_blank' rel='noopener noreferrer'>
          <InstagramIcon className='text-white w-6 h-6' />
        </a>
        <a href='https://twitter.com/meshdoor/' target='_blank' rel='noopener noreferrer'>
          <TwitterIcon className='text-white w-6 h-6' />
        </a>
        <a href='mailto:meshdoor@gmail.com' className='text-white text-lg'>
          meshdoor@gmail.com
        </a>
      </div>

      {/* Main Header */}
      <div className='w-full flex items-center justify-between py-3 px-6 sm:px-8 md:px-22 bg-white relative shadow-xl shadow-slate-200 '>
        {/* Logo */}
        <Link to='/'>
          <img src={images.sblue} alt='logo' className='w-22 h-22 shadow-2xl inset-shadow-slate-400  ' />
        </Link>

        {/* Desktop Nav */}
        <ul className='hidden md:flex items-center gap-8 text-[#2fc8c0] text-sm font-semibold uppercase px-32'>
          <NavLink to='/'><li className='hover:underline underline-offset-1 cursor-pointer '>Home</li></NavLink>
          <NavLink to='/about'><li className='hover:underline  underline-offset-1 cursor-pointer'>About</li></NavLink>
          <NavLink to='/services'><li className='hover:underline  underline-offset-1 cursor-pointer'>Services</li></NavLink>
          <NavLink to='/testimonials'><li className='hover:underline  underline-offset-1 cursor-pointer'>Testimonials</li></NavLink>
          <NavLink to='/contact'><li className='hover:underline  underline-offset-1 cursor-pointer'>Contact</li></NavLink>
        </ul>

        {/* Hamburger (Mobile) */}
        <div className='md:hidden text-white z-50' onClick={() => setOpen(!open)}>
          {open ? <null></null> : <Menu size={28} />}
        </div>

        {/* Mobile Nav */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-[#2fc8c0] transition-transform duration-300 z-40 ${open ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>

          {/* Close icon */}
          <X className='w-8 h-8 text-white absolute top-4 right-4 cursor-pointer z-50' onClick={() => setOpen(false)} />

          {/* Logo top-left */}
          <div className='absolute top-4 left-4'>
            <img src={images.sbl} alt='logo' className='w-24' />
          </div>

          {/* Centered Menu Container */}
          <div className='flex flex-col items-center justify-center h-full px-4'>
            <ul className='flex flex-col items-center gap-6 text-white text-sm font-semibold uppercase text-center'>
              <NavLink to='/' onClick={() => setOpen(false)}><li className='hover:text-gray-200 underline'>Home</li></NavLink>
              <NavLink to='/about' onClick={() => setOpen(false)}><li className='hover:text-gray-200'>About</li></NavLink>
              <NavLink to='/services' onClick={() => setOpen(false)}><li className='hover:text-gray-200'>Services</li></NavLink>
              <NavLink to='/testimonials' onClick={() => setOpen(false)}><li className='hover:text-gray-200'>Testimonials</li></NavLink>
              <NavLink to='/contact' onClick={() => setOpen(false)}><li className='hover:text-gray-200'>Contact</li></NavLink>
            </ul>
          </div>
        </div>



      </div>
    </header>
  );
}

export default Header;
