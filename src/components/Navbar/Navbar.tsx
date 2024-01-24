import Link from 'next/link'
import React from 'react'
import LeetCode from "@/../public/icon/leetcode.png"
import Logo from "@/../public/logo.png"
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='container mx-auto flex justify-between items-center py-8 absolute top-0 left-0 right-0 text-white font-bold'>
            <div className="">
                <Image
                    src={Logo}
                    alt="logo"
                    width={70}
                    placeholder='blur'
                />
            </div>
            <ul className="flex justify-between">
                <li className='px-5 cursor-pointer'>
                    <Link href="/">Home</Link>
                </li>
                <li className='px-5 cursor-pointer'>
                    {/* <Link href="/about">About</Link> */}
                    <a href="#about">About</a>
                </li>
                <li className='px-5 cursor-pointer'>
                    {/* <Link href="/skills">Skills</Link> */}
                    <a href="#skills">Skills</a>
                </li>
                <li className='px-5 cursor-pointer'>
                    {/* <Link href="/portfolio">Portfolio</Link> */}
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li className='px-5 cursor-pointer'>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
            <div className="">
                <a className='border-[5px] border-[#dd9f44] inline-block rounded-lg' target='_blank' href="https://leetcode.com/sadi-tanvir/">
                    <Image
                        src={LeetCode}
                        alt='LeetCode Logo'
                        width={110}
                        className=''
                    />
                </a>
            </div>
        </nav>
    )
}

export default Navbar