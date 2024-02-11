'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from "@/../public/logo.png";
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";

const Navbar = () => {

    const [showNav, setShowNav] = useState(false)

    return (
        <nav className='container mx-auto flex justify-between items-center py-8 absolute top-0 left-0 right-0 text-white font-bold px-5'>
            <div className="">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="logo"
                        className='w-12 xl:w-14'
                        placeholder='blur'
                    />
                </Link>
            </div>


            <div className='relative  w-full md:w-auto md:mt-2'>
                <ul className={`${showNav ? "scale-100" : "scale-0 translate-x-36 sm:translate-x-42 md:translate-y-0 -translate-y-24 md:translate-x-0"}  md:scale-100  duration-300 ease-in-out absolute right-0 -top-5 md:top-0 w-5/6 sm:w-3/6 bg-gray-800 md:bg-transparent rounded-2xl md:rounded-none z-10 py-8 md:py-0 space-y-5 md:space-y-0 md:relative flex flex-col md:flex-row items-center justify-between `}>
                    <FiXSquare onClick={() => setShowNav(false)} className='text-4xl md:hidden absolute right-5 top-5 cursor-pointer hover:animate-pulse text-red-400' />
                    <li className='px-5 cursor-pointer uppercase text-[#2ed573] '>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='px-5 cursor-pointer  uppercase'>
                        {/* <Link href="/about">About</Link> */}
                        <a href="#about">About</a>
                    </li>
                    <li className='px-5 cursor-pointer  uppercase'>
                        {/* <Link href="/skills">Skills</Link> */}
                        <a href="#skills">Skills</a>
                    </li>
                    <li className='px-5 cursor-pointer  uppercase'>
                        {/* <Link href="/portfolio">Portfolio</Link> */}
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className='px-5 cursor-pointer  uppercase'>
                        {/* <Link href="/contact">Contact</Link> */}
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                {
                    !showNav && <div onClick={() => setShowNav(true)} className='delay-100 text-4xl cursor-pointer md:hidden py-2 transition-all'>
                        <FiAlignJustify className=' ml-auto' />
                    </div>
                }
            </div>


            <div className="hidden md:block">
                <a target='_blank' href="https://github.com/sadi-tanvir">
                    <FaGithub
                        color='white'
                        className='bg-slate-600 rounded-full w-10 h-10 xl:w-12 xl:h-12'
                    />
                </a>
            </div>
        </nav>
    )
}

export default Navbar