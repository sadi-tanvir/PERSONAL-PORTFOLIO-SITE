'use client'
import React, { memo, useEffect, useState } from 'react'
import Image from 'next/image';
import classes from "./Projects.module.css";
import ExternalLinkBtn from './ExternelLinkBtn';


interface ProjectDataTypes {
    projectId: number;
    projectName: string;
    projectLiveLink: string;
    frontendRepositoryLInk: string;
    backendRepositoryLInk?: string;
    projectDetailsLink?: string;
    frontendTechnologies: {
        id: number;
        icon: React.ReactNode;
    }[];
    backendTechnologies: {
        id: number;
        icon: React.ReactNode;
    }[];
    sliderImages: string[];
};

const ProjectCard = ({ project }: { project: ProjectDataTypes }) => {
    // states
    const [currentSlider, setCurrentSlider] = useState(0);

    const { projectId, projectName, projectLiveLink, frontendRepositoryLInk, backendRepositoryLInk, projectDetailsLink, frontendTechnologies, backendTechnologies, sliderImages } = project;

    // slider loop
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);


    return (
        <div className="container  rounded-xl bg-gray-800 shadow-2xl my-10  pb-5">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* slider start */}
                <div className={`w-auto flex flex-col ${projectId % 2 === 0 ? "md:order-2" : "md:order-1"} justify-center items-center transform -translate-y-4 px-10 md:px-0`}>
                    <div className="h-auto transform duration-1000 ease-linear rounded-xl border-4 border-[#1f2937]">
                        <Image
                            src={sliderImages[currentSlider]}
                            alt="slider"
                            className=' rounded-xl h-52'
                        />
                    </div>
                    {/* slider container */}
                    <div className="grid grid-cols-4 gap-2 items-center px-3">
                        {/* sliderImages */}
                        {sliderImages.map((slide: any, index: number) => (
                            <Image
                                key={index}
                                onClick={() => setCurrentSlider(index)}
                                src={slide} className={`h-10 w-auto ${currentSlider === index ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                                alt={"image"} />
                        ))}
                    </div>
                </div>
                {/* slider end */}

                <div className={`flex-col text-gray-300 md:col-span-2 ${projectId % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    <p className={`${projectId % 2 === 0 ? "md:ml-5" : "md:ml-0"} pt-4 text-2xl font-bold ml-5 text-center md:text-start text-priamry uppercase`}>{projectName}</p>
                    <hr className={classes.hr_text} data-content="" />

                    {/* technology part */}
                    <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-0 px-4 my-2 text-md ">
                        {/* front-end technology */}
                        <div className={`sm:mr-auto ${projectId % 2 === 0 ? "md:ml-1" : ""}`}>
                            <span className="font-bold">FRONT-END TECHNOLOGIES</span>
                            <span className="font-bold"></span>
                            <div className='flex flex-wrap gap-3 items-center mt-4 mb-5'>
                                {
                                    frontendTechnologies.map((technology: any) => <p key={technology.id} className='text-3xl'>{technology.icon}</p>)
                                }
                            </div>
                        </div>

                        {/* back-end technology */}
                        <div className='sm:ml-auto sm:mr-10'>
                            <span className="font-bold">BACK-END TECHNOLOGIES</span>
                            <span className="font-bold"></span>
                            <div className='flex flex-wrap gap-3 items-center mt-4 mb-5'>
                                {
                                    backendTechnologies.map((technology: any) => <p key={technology.id} className='text-3xl'>{technology.icon}</p>)
                                }
                            </div>
                        </div>
                    </div>

                    {/* project links  */}
                    <div className={`text-xs mt-10  ${projectId % 2 === 0 ? "md:ml-2" : ""} flex flex-wrap justify-center md:justify-start`}>
                        <ExternalLinkBtn link={projectLiveLink}>
                            Live Website
                        </ExternalLinkBtn>

                        {
                            frontendRepositoryLInk && backendRepositoryLInk ?
                                <>
                                    <ExternalLinkBtn link={frontendRepositoryLInk}>
                                        Frontend-codes
                                    </ExternalLinkBtn>
                                    <ExternalLinkBtn link={backendRepositoryLInk}>
                                        Backend-codes
                                    </ExternalLinkBtn>
                                </> :
                                <ExternalLinkBtn link={frontendRepositoryLInk}>
                                    Github Codes
                                </ExternalLinkBtn>
                        }


                        {
                            projectDetailsLink &&
                            <ExternalLinkBtn link={projectDetailsLink}>
                                Project Details
                            </ExternalLinkBtn>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ProjectCard);