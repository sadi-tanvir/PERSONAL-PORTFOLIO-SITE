import React from 'react';
import EmptyAvatar from "@/../public/empty-avatar.jpg";
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import linkedin from "@/../public/icon/linkedin.png";

const AboutMe = () => {
    return (
        <div id='about' className="container mx-auto h-auto grid grid-cols-1 sm:grid-cols-2 content-center">
            <div className='flex flex-col pt-16 px-5'>
                <h2 className='text-3xl font-bold text-[#2ed573]'>About Me</h2>
                <p className="text-white text-justify tracking-wide">
                    Hello there! I'm passionate about crafting engaging web experiences and solving complex problems. With expertise in technologies like
                    <span className='text-[#2ed573]'> React.js</span>,
                    <span className='text-[#2ed573]'> Next.js</span>, and
                    <span className='text-[#2ed573]'> GraphQL</span>, I bring ideas to life with clean code and intuitive user interfaces. I also excel in
                    <span className='text-[#2ed573]'> algorithmic problem-solving</span> on platforms like
                    <span className='text-[#2ed573]'> LeetCode</span>. Experienced in building
                    <span className='text-[#2ed573]'> RESTful</span> and
                    <span className='text-[#2ed573]'> GraphQL</span> APIs using technologies like
                    <span className='text-[#2ed573]'> Express.js</span> and
                    <span className='text-[#2ed573]'> MongoDB</span>, let's collaborate and create something extraordinary together!
                </p>

                <div className='flex justify-center sm:justify-start space-x-4 mt-5'>
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
            <div className='flex justify-center sm:justify-end pt-16'>
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
    )
}

export default AboutMe