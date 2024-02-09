'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import classes from "./Projects.module.css";
import PP1 from "@/../public/projects/modern-ecommerce/1.png";
import PP2 from "@/../public/projects/modern-ecommerce/2.png";
import PP3 from "@/../public/projects/modern-ecommerce/3.png";
import PP4 from "@/../public/projects/modern-ecommerce/4.png";
import { SiNextdotjs } from "react-icons/si";
import { SiApollographql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import ExternalLinkBtn from './ExternelLinkBtn';

const projectResourcesData = [
    {
        projectId: 1,
        projectName: "Modern Ecommerce",
        projectLiveLink: "https://modern-ecommerce-app.vercel.app",
        frontendRepositoryLInk: "https://github.com/sadi-tanvir/Modern-ECommerce-Client",
        backendRepositoryLInk: "https://github.com/sadi-tanvir/Modern-ECommerce-Server",
        projectDetailsLink: "https://github.com/sadi-tanvir/Modern-ECommerce-Client?tab=readme-ov-file#modern-ecommerce---a-revolution-in-shopping",
        frontendTechnologies: [
            {
                id: 1,
                icon: <SiNextdotjs className='text-slate-100' />
            },
            {
                id: 2,
                icon: <SiTypescript className='text-blue-600' />,
            },
            {
                id: 3,
                icon: <TbBrandRedux className='text-purple-700' />,
            },
            {
                id: 4,
                icon: <SiApollographql className='text-teal-500' />,
            },
            {
                id: 5,
                icon: <SiTailwindcss className='text-cyan-600' />,
            },
        ],

        backendTechnologies: [
            {
                id: 1,
                icon: <GrGraphQl className='text-pink-700' />,
            },
            {
                id: 2,
                icon: <SiApollographql className='text-teal-500' />,
            },
            {
                id: 3,
                icon: <SiExpress className='text-gray-200' />,
            },
            {
                id: 4,
                icon: <SiMongodb className='text-green-400' />,
            },
            {
                id: 5,
                icon: <SiMongoose className='text-red-600 text-4xl' />,
            },
        ],
        sliderImages: [PP1, PP2, PP3, PP4]
    },
]


const ModernEcommerceProject = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    // slider images
    const sliderImages = [PP1, PP2, PP3, PP4]

    // front-end technology lists
    const frontendTechnologies = [
        {
            id: 1,
            icon: <SiNextdotjs className='text-slate-100' />
        },
        {
            id: 2,
            icon: <SiTypescript className='text-blue-600' />,
        },
        {
            id: 3,
            icon: <TbBrandRedux className='text-purple-700' />,
        },
        {
            id: 4,
            icon: <SiApollographql className='text-teal-500' />,
        },
        {
            id: 5,
            icon: <SiTailwindcss className='text-cyan-600' />,
        },
    ]

    // back-end technology lists
    const backendTechnologies = [
        {
            id: 1,
            icon: <GrGraphQl className='text-pink-700' />,
        },
        {
            id: 2,
            icon: <SiApollographql className='text-teal-500' />,
        },
        {
            id: 3,
            icon: <SiExpress className='text-gray-200' />,
        },
        {
            id: 4,
            icon: <SiMongodb className='text-green-400' />,
        },
        {
            id: 5,
            icon: <SiMongoose className='text-red-600 text-4xl' />,
        },
    ]

    // slider loop
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);


    return (
        <div className="container rounded-md bg-gray-800 shadow-2xl my-10  pb-5">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* slider start */}
                <div className="w-auto flex flex-col justify-center items-center transform -translate-y-4 px-10 md:px-0">
                    <div className="h-auto transform duration-1000 ease-linear rounded-xl border-4 border-[#1f2937]">
                        <Image
                            src={sliderImages[currentSlider]}
                            alt="slider"
                            className='rounded-lg h-52'
                        />
                    </div>
                    {/* slider container */}
                    <div className="grid grid-cols-4 gap-2 items-center px-3">
                        {/* sliderImages */}
                        {sliderImages.map((slide, index) => (
                            <Image
                                key={index}
                                onClick={() => setCurrentSlider(index)}
                                src={slide} className={`h-10 w-auto ${currentSlider === index ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                                alt={"image"} />
                        ))}
                    </div>
                </div>
                {/* slider end */}

                <div className="flex-col text-gray-300 md:col-span-2">
                    <p className="pt-4 text-2xl font-bold ml-5 md:ml-0 text-center sm:text-start">Modern Ecommerce</p>
                    <hr className={classes.hr_text} data-content="" />

                    {/* technology part */}
                    <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-0 px-4 my-2 text-md ">
                        {/* front-end technology */}
                        <div className='sm:mr-auto'>
                            <span className="font-bold">Front-End Technologies</span>
                            <span className="font-bold"></span>
                            <div className='flex flex-wrap gap-3 items-center mt-4 mb-5'>
                                {
                                    frontendTechnologies.map((technology) => <p key={technology.id} className='text-3xl'>{technology.icon}</p>)
                                }
                            </div>
                        </div>

                        {/* back-end technology */}
                        <div className='sm:ml-auto sm:mr-10'>
                            <span className="font-bold">Back-End Technologies</span>
                            <span className="font-bold"></span>
                            <div className='flex flex-wrap gap-3 items-center mt-4 mb-5'>
                                {
                                    backendTechnologies.map((technology) => <p key={technology.id} className='text-3xl'>{technology.icon}</p>)
                                }
                            </div>
                        </div>
                    </div>

                    {/* project links  */}
                    <div className="text-xs mt-10 flex flex-wrap justify-center md:justify-start">
                        <ExternalLinkBtn link="https://modern-ecommerce-app.vercel.app">
                            Live Website
                        </ExternalLinkBtn>

                        <ExternalLinkBtn link="https://github.com/sadi-tanvir/Modern-ECommerce-Client">
                            Frontend-code
                        </ExternalLinkBtn>

                        <ExternalLinkBtn link="https://github.com/sadi-tanvir/Modern-ECommerce-Server">
                            Backend-code
                        </ExternalLinkBtn>

                        <ExternalLinkBtn link="https://github.com/sadi-tanvir/Modern-ECommerce-Client?tab=readme-ov-file#modern-ecommerce---a-revolution-in-shopping">
                            Project Details
                        </ExternalLinkBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernEcommerceProject;