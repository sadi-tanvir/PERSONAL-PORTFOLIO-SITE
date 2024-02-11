'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import linkedin from "@/../public/icon/linkedin.png";
import { FaRegCopyright } from "react-icons/fa6";
import ME from "@/../public/me.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "@/../public/logo.png";
import { BsArrowUpSquareFill } from "react-icons/bs";

const Footer = () => {
    const [showTopBtn, setShowTopBtn] = useState(false)
    const toTop = useRef();

    const scrollToTop = (elemRef: any) => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        const handlerScroll = (event: any) => {
            if (window.scrollY > 500) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        }
        window.addEventListener("scroll", handlerScroll)
        return () => window.removeEventListener("scroll", handlerScroll)
    }, [])

    return (
        <div className='w-full py-20 text-gray-300 bg-gray-800'>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                <div className="mx-auto mb-10 sm:mb-0 text-center sm:text-start">
                    <h2 className='text-xl font-bold uppercase'>Tanvir Hossain Sadi</h2>
                    <Image
                        src={ME}
                        alt='sadi'
                        className='w-24 mx-auto sm:mx-0'
                    />
                    <p className='mt-1 text-[#2ed573]'>Full Stack Developer</p>
                    <p className='mt-1 flex justify-center sm:justify-start items-center'>
                        <MdOutlineEmail className='mr-2 mb-[2px]' />
                        htanvir.sadi@gmail.com
                    </p>
                    <p className='mt-px  flex justify-center sm:justify-start items-center'>
                        <FaPhoneAlt className='mr-2 mb-[2px]' />
                        +880 1881-540890
                    </p>
                </div>
                <div className="space-y-3 mx-auto">
                    <h3 className={`text-xl underline capitalize text-[#2ed573] ${showTopBtn ? 'animate__animated animate__bounce' : ''}`}>profile links</h3>
                    <a target='_blank' href="https://github.com/sadi-tanvir" className='flex items-center text-lg underline'>
                        <FaGithub
                            color='white'
                            className='bg-slate-600 rounded-full w-6 h-6 mr-2 mb-1'
                        />
                        Github
                    </a>
                    <a target='_blank' href="https://leetcode.com/sadi-tanvir/" className='flex items-center text-lg underline'>
                        <SiLeetcode
                            className='bg-white text-[#dd9f44] rounded-full p-1  w-6 h-6 mr-2 mb-1'
                        />
                        LeetCode
                    </a>

                    <a target='_blank' href="https://www.linkedin.com/in/tanvir-hossain-sadi" className='flex items-center text-lg underline'>
                        <Image
                            src={linkedin}
                            alt='linkedin'
                            className='w-6 mr-2 mb-1'
                        />
                        Linkedin
                    </a>
                </div>

                <div className='space-y-5 mt-12 md:mt-0 mx-auto sm:col-span-2 md:col-span-1'>
                    <Image
                        src={Logo}
                        alt='Logo'
                        className='w-14 mx-auto'
                    />
                    <div className='space-y-2 flex flex-col justify-center items-center'>
                        <p>
                            Designed & Developed by
                            <a className='text-blue-400 underline ml-2' target='_blank' href="https://www.linkedin.com/in/tanvir-hossain-sadi">
                                Tanvir Hossain Sadi
                            </a>
                        </p>
                        <p className='flex'>
                            <FaRegCopyright className='mr-1 mt-[3px]' />
                            2024, All Rights Reserved.
                        </p>
                    </div>
                    <p className='text-center text-[#2ed573]'>Thank you for visiting.</p>
                </div>
            </div>
            {
                showTopBtn && <p
                    onClick={() => scrollToTop(toTop)}
                    className='animate-pulse duration-1000 ease-in-out  text-white fixed right-10 bottom-14 text-4xl cursor-pointer'
                ><BsArrowUpSquareFill />
                </p>
            }

        </div>
    );
};

export default Footer;