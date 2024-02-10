import Link from 'next/link'
import React from 'react'
import Logo from "@/../public/Logo.png";
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='container mx-auto flex justify-between items-center py-8 absolute top-0 left-0 right-0 text-white font-bold'>
            <div className="">
                <Image
                    src={Logo}
                    alt="logo"
                    className='w-12 xl:w-20'
                    placeholder='blur'
                />
            </div>
            <ul className="flex justify-between">
                <li className='px-5 cursor-pointer uppercase text-[#2ed573]'>
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

            <div className="">
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