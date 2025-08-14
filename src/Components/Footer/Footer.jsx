import React from 'react';
import { images } from '../../assets/images';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='bg-[#2fc8c0] w-full h-auto border-t border-gray-400 shadow-2xl shadow-slate-400 px-4 md:px-6 py-10'>
            <div className='flex flex-col md:flex-row gap-10 justify-between'>
                {/* Logo and Social Icons */}
                <div className='md:w-1/3 flex flex-col items-center md:items-start mt-10'>
                    <img className='w-1/2 md:w-1/3 shadow-2xl shadow-slate-400 ' src={images.slogo} alt='logo'  />

                    {/* Social Icons */}
                    <div className='text-2xl text-white font-bold flex gap-4 mt-8'>
                        <a
                            href='https://www.facebook.com/meshdoor/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='cursor-pointer text-white border border-transparent hover:border-blue-100 p-1 rounded-full transition-all duration-300'>
                            <Facebook />
                        </a>
                        <a
                            href='https://www.instagram.com/meshdoor/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='cursor-pointer text-white border border-transparent hover:border-amber-500 p-1 rounded-full transition-all duration-300'>
                            <Instagram />
                        </a>
                        <a
                            href='https://twitter.com/meshdoor/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='cursor-pointer text-white border border-transparent hover:border-blue-300 p-1 rounded-full transition-all duration-300'>
                            <Twitter />
                        </a>
                        <a
                            href='https://www.linkedin.com/meshdoor/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='cursor-pointer text-white border border-transparent hover:border-blue-500 p-1 rounded-full transition-all duration-300'>
                            <Linkedin />
                        </a>
                        <a
                            href='https://www.youtube.com/meshdoor/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='cursor-pointer text-white border border-transparent hover:border-red-500 p-1 rounded-full transition-all duration-300'>
                            <Youtube />
                        </a>
                    </div>
                </div>

                

                {/* Services */}
                <div className='md:w-1/3'>
                    <h2 className='text-white text-2xl font-bold mb-4 '>Services</h2>
                    <ul className='text-white text-lg cursor-pointer'>
                        <li className='mb-2 hover:underline'>Aluminium</li>
                        <li className='mb-2 hover:underline'>Windows</li>
                        <li className='mb-2 hover:underline'>UPVC Doors</li>
                        <li className='mb-2 hover:underline'>Mesh Doors</li>
                        <li className='mb-2 hover:underline'>Mesh Windows</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className='md:w-1/3'>
                    <h2 className='text-white text-2xl font-bold mb-4'>Quick Links</h2>
                    <ul className='text-white text-lg  '>
                        <li className='mb-2 hover:underline'><a href='#'>Home</a></li>
                        <li className='mb-2 hover:underline'><a href='#'>About</a></li>
                        <li className='mb-2 hover:underline'><a href='#'>Services</a></li>
                        <li className='mb-2 hover:underline'><a href='#'>Testimonials</a></li>
                        <li className='mb-2 hover:underline'><a href='#'>Contact</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className='md:w-1/3'>
                    <h2 className='text-white text-2xl font-bold mb-4'>Contact</h2>
                    <p className='text-white text-lg'>
                        <span className='font-bold'>Address :</span>   Hyderabad, Telangana
                        <br />
                        <span className='font-bold'>Mobile :</span>  +91 70754 16949
                        <br />
                        <span className='font-bold'>Email :</span>  meshdoor@gmail
                    </p>
                </div>
            </div>


            {/* Horizontal Line and Copyright */}
            <div className='w-full'>
                
                <hr className='border-t border-white mt-5 w-full' />
                <p className='text-white mt-4 text-center items-center '>
                    &copy; 2023 Meshdoor. All rights reserved.
                </p>
            </div>




        </footer>
    );
}

export default Footer;
