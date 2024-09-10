import React from 'react';
import EmptyAvatar from "@/../public/empty-avatar.jpg";
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import linkedin from "@/../public/icon/linkedin.png";

const AboutMe = () => {
    return (
        <>
            <div id='about' className=" w-[90%] sm:container bg-gray-800 rounded-xl mx-auto h-auto grid grid-cols-1 md:grid-cols-2 content-center  pb-10 px-8 pt-10 mt-16">
                <div className='flex flex-col sm:pt-3 pr-5'>
                    <h2 className='text-3xl font-bold text-[#2ed573] uppercase'>About Me</h2>
                    <p className="text-white text-justify tracking-wide mt-2">
                        Hello there! I&rsquo;m a Full Stack Developer with over 2 years of experience in
                        <span className='text-[#2ed573]'> SaaS</span>, development, passionate about crafting dynamic, user-focused web applications. Leveraging technologies like
                        <span className='text-[#2ed573]'> React.js</span>,
                        <span className='text-[#2ed573]'> Next.js</span>,
                        <span className='text-[#2ed573]'> TypeScript</span>,
                        <span className='text-[#2ed573]'> Laravel</span>, and
                        <span className='text-[#2ed573]'> MySQL</span>, I bring ideas to life with clean, efficient code and intuitive interfaces.

                        I excel in developing
                        <span className='text-[#2ed573]'> RESTful</span> and
                        <span className='text-[#2ed573]'> GraphQL APIs</span>  using
                        <span className='text-[#2ed573]'> Express.js</span> and
                        <span className='text-[#2ed573]'> MongoDB</span>, ensuring scalable and high-performing solutions. Driven by a passion for solving complex problems on platforms like 
                        <span className='text-orange-500'> LeetCode</span>, I strive to create innovative applications that enhance user experiences. Let&rsquo;s collaborate to build something extraordinary together!
                    </p>

                    <div className='flex justify-center md:justify-start space-x-4 mt-5'>
                        <a target='_blank' href="https://github.com/sadi-tanvir">
                            <FaGithub
                                size="45px"
                                color='white'
                                className='bg-slate-600 rounded-full'
                            />
                        </a>
                        <a target='_blank' href="https://leetcode.com/sadi-tanvir/">
                            <SiLeetcode
                                size="45px"
                                // color='white'
                                className='bg-white text-[#dd9f44] rounded-full p-2'
                            />
                        </a>

                        <a target='_blank' href="https://www.linkedin.com/in/tanvir-hossain-sadi">
                            <Image
                                src={linkedin}
                                alt='linkedin'
                                width={45}
                            />
                        </a>
                    </div>
                </div>
                <div className='hidden md:flex justify-center sm:justify-end mt-10 sm:mt-0'>
                    <Image
                        src={EmptyAvatar}
                        alt="empty-avatar"
                        placeholder='blur'
                        width={300}
                        className=' rounded-lg opacity-90'
                    // height={100}
                    />
                </div>
            </div>
            <div className='container mx-auto flex justify-center pt-5 space-x-5'>
                <span className='h-2 w-2 bg-gray-400 inline-block rounded-full'></span>
                <span className='h-2 w-2 bg-gray-400 inline-block rounded-full'></span>
                <span className='h-2 w-2 bg-gray-400 inline-block rounded-full'></span>
            </div>
        </>
    )
}

export default AboutMe