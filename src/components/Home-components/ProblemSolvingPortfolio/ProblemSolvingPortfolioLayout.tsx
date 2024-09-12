import React from 'react';
import TimelineIcon from './TimelineIcon';
import { SiLeetcode } from 'react-icons/si';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import LeetCodeLogo from "@/../public/icon/LeetCode-log-white.png";
import JavaScript from "@/../public/Technoloy/javascript_icon.png";
import TypeScript from "@/../public/Technoloy/typescript.png";
import PHP from "@/../public/Technoloy/php.png";
import MySQL from "@/../public/Technoloy/mysql.png";

const ProblemSolvingPortfolioLayout = () => {

    const technologies = [
        {
            id: 1,
            url: JavaScript,
            name: 'JavaScript'
        },
        {
            id: 2,
            url: TypeScript,
            name: 'TypeScript'
        },
        {
            id: 7,
            url: PHP,
            name: 'PHP',
        },
        {
            id: 9,
            url: MySQL,
            name: '',
            className: "w-full"
        },
    ]

    const LeetCodeImages = [
        {
            url: process.env.SCORE_IMAGE,
            classes: 'shadow-xl rounded-xl border'
        },
        {
            url: process.env.ACHIEVEMENTS,
            classes: 'shadow-xl rounded-xl border'
        },
        {
            url: process.env.BADGE_2023,
            classes: 'h-60 w-48 shadow-xl rounded-xl border'
        },
        {
            url: process.env.BADGE_2024,
            classes: 'h-60 w-48 shadow-xl rounded-xl border'
        }
    ]

    return (
        <div id='problem-solving' className='w-[90%] sm:container mx-auto mt-24 bg-gray-800 pt-16  rounded-xl shadow-xl'>
            <div className='text-center lg:w-[500px] mx-auto'>
                <h1 className='text-4xl text-gray-200 font-bold border-b flex justify-center items-center'>
                    <Image
                        src={LeetCodeLogo}
                        height={45}
                        width={45}
                        alt="leetcode logo"
                        className="pb-[15px] mr-5"
                        draggable={false}
                    />
                    LeetCode Profile
                </h1>
            </div>

            <div className='w-[60%] mx-auto mt-10'>
                <p className='text-gray-300 text-center'>I am continuously strengthening my skills in data structures and algorithms by solving a diverse range of challenges on LeetCode, tackling each problem three times using JavaScript, TypeScript, and PHP. My profile shows high scores and consistent performance across all difficulty levels. Every solution is optimized and documented in my GitHub repository, reflecting my commitment to clean code and an ongoing journey of learning and growth.</p>

                {/* Technologies and Links */}
                <div className='flex flex-col justify-center items-center mt-10'>
                    {/* Technologies */}
                    <h1 className='text-xl text-gray-200 font-bold border-b'>Languages</h1>
                    <div className='flex my-5 space-x-2'>
                        {
                            technologies.map((tech, index) => (
                                <div key={index} className='bg-gray-200 flex justify-evenly items-center px-3 py-2 rounded-md space-x-2'>
                                    <Image
                                        src={tech.url}
                                        height={tech.className ? 65 : 20}
                                        width={tech.className ? 65 : 20}
                                        alt={tech.name || 'mysql'}
                                        className={`${tech.className}`}
                                        draggable={false}
                                    />
                                    {tech.name && <span>{tech.name}</span>}
                                </div>
                            ))
                        }
                    </div>

                    {/* links */}
                    <div className='flex mt-5 space-x-10'>
                        <a href="https://leetcode.com/sadi-tanvir" target="_blank" rel="noopener noreferrer">
                            <div className="flex space-x-2 items-center">
                                <Image
                                    src={LeetCodeLogo}
                                    height={25}
                                    width={25}
                                    alt="leetcode logo"
                                    className=""
                                    draggable={false}
                                />
                                <span className="font-bold text-white mt-1">LeetCode Profile</span>
                                <p className="text-sm text-blue-500">
                                    <FaExternalLinkAlt />
                                </p>
                            </div>
                        </a>
                        <a href="https://github.com/sadi-tanvir/LeetCode-Solutions.git" target="_blank" rel="noopener noreferrer">
                            <div className="flex space-x-2 items-center">
                                <FaGithub
                                    size="25px"
                                    color='white'
                                    className='bg-slate-600 rounded-full'
                                />
                                <span className="font-bold text-white mt-1">Github Repository</span>
                                <p className="text-sm text-blue-500">
                                    <FaExternalLinkAlt />
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>


            {/* display achievements */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
                    <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
                        <div className="w-full max-w-3xl mx-auto">
                            <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                {
                                    LeetCodeImages.map((image, index) => (
                                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                            <TimelineIcon></TimelineIcon>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-2 rounded flex justify-center items-center">
                                                <img src={image.url} className={image.classes} alt="" />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProblemSolvingPortfolioLayout;