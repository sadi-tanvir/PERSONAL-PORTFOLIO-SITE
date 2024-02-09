import Image from 'next/image'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import linkedin from "@/../public/icon/linkedin.png";
import { FaRegCopyright } from "react-icons/fa6";
import ME from "@/../public/me.png";

const Footer = () => {
    return (
        <div className='w-full py-20 text-gray-300 bg-gray-800'>
            <div className='container mx-auto grid grid-cols-3'>
                <div className="">
                    <h2 className='text-xl font-bold uppercase'>Tanvir Hossain Sadi</h2>
                    <Image
                        src={ME}
                        alt='sadi'
                        className='w-24'
                    />
                    <p className='mt-1 text-[#2ed573]'>Full Stack Developer</p>
                    <p className='mt-1'>
                        <strong>Email : </strong>
                        htanvir.sadi@gmail.com
                    </p>
                    <p className='mt-'>
                        <strong>Phone : </strong>
                        +880 1881-540890
                    </p>
                </div>
                <div className="space-y-3">
                    <h3 className='text-xl underline capitalize'>profile links</h3>
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

                <div className='space-y-7 mt-12'>
                    <div className='space-y-2'>
                        <p>
                            Designed & Developed by
                            <a className='text-blue-400 underline ml-2' target='_blank' href="https://www.linkedin.com/in/tanvir-hossain-sadi">
                                Tanvir Hossain Sadi
                            </a>
                        </p>
                        <p className='flex'>
                            <FaRegCopyright className='mr-[2px] mt-[3px]' />
                            2024, All Rights Reserved
                        </p>
                    </div>
                    <p>Thanks for visiting my profile.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;