'use client';

import React, { memo, useEffect, useState } from 'react';
import Image from 'next/image';
import { FaReact, FaExternalLinkAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";
import classes from './Projects.module.css';
import ExternalLinkBtn from './ExternelLinkBtn';

// Images of BAMS
import BAMS_1 from '/public/projects/BAMS/1.png';
import BAMS_2 from '/public/projects/BAMS/2.png';
import BAMS_3 from '/public/projects/BAMS/3.png';
import BAMS_4 from '/public/projects/BAMS/4.png';
import MessageModal from './MessageModal';
import ProjectDetailsModal from './ProjectDetailsModal';

// Modal management
const ProjectCard = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const [isMessageModalOpen, setIsMessageModalOpen] = useState<boolean>(false);
    const [isProjectDetailsModalOpen, setIsProjectDetailsModalOpen] = useState<boolean>(false);
    const sliderImages = [BAMS_1, BAMS_2, BAMS_3, BAMS_4];

    // slider loop
    useEffect(() => {
        const intervalId = setInterval(
            () => setCurrentSlider(currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1),
            5000
        );
        return () => clearInterval(intervalId);
    }, [currentSlider, sliderImages.length]);

    return (
        <div className="container rounded-xl bg-gray-800 shadow-2xl pb-5">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* slider start */}
                <div className="w-auto flex flex-col md:order-2 justify-center items-center transform -translate-y-4 px-2 sm:px-10 md:px-0">
                    <div id="imageMagnifyer" className="h-auto transform duration-1000 ease-linear rounded-xl border-4 border-[#1f2937]">
                        <Image src={sliderImages[currentSlider]} alt="slider" className="rounded-xl h-52" width={900} height={500} />
                    </div>
                    {/* slider container */}
                    {sliderImages.length === 4 && (
                        <div className="grid grid-cols-4 gap-2 items-center px-3">
                            {/* sliderImages */}
                            {sliderImages.map((slide: any, index: number) => (
                                <Image
                                    key={index}
                                    onClick={() => setCurrentSlider(index)}
                                    src={slide}
                                    className={`h-10 w-auto ${currentSlider === index ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                                    alt="image"
                                    width={900}
                                    height={500}
                                />
                            ))}
                        </div>
                    )}
                </div>
                {/* slider end */}

                <div className="flex-col text-gray-300 md:col-span-2 md:order-1">
                    <p className="pt-4 md:ml-5 text-2xl font-bold ml-5 text-center md:text-start text-priamry uppercase">
                        Baits Accounting Management System (BAMS)
                    </p>
                    <hr className={classes.hr_text} data-content="" />

                    {/* technology part */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-0 px-4 my-2 text-md">
                        {/* front-end technology */}
                        <div className="sm:mr-auto md:ml-1">
                            <p className="font-bold text-center sm:text-start">TECHNOLOGIES</p>
                            <span className="font-bold"></span>
                            <div className="flex flex-wrap gap-3 justify-center sm:justify-start items-center mt-4 mb-5">
                                <p className="text-3xl">
                                    <FaReact className='text-cyan-500' />
                                </p>
                                <p className="text-3xl">
                                    <SiExpress className='text-gray-200' />
                                </p>
                                <p className="text-3xl">
                                    <SiMysql className="text-cyan-500" />
                                </p>
                                <p className="text-3xl">
                                    <SiTailwindcss className='text-cyan-600' />
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* project test credentials */}
                    <div className="w-full flex justify-center md:justify-start items-center pl-5">
                        <div className="text-center md:text-start">
                            <h3 className="underline font-semibold text-[#2ed573]">Test Credentials</h3>
                            <p className='flex items-center space-x-2'>
                                <strong>Website:</strong>
                                <a className=" text-blue-500 flex items-center" href="https://saas.bamsbd.com">
                                    https://saas.bamsbd.com
                                    {/* <FaExternalLinkAlt className='ml-2' /> */}
                                </a>
                            </p>
                            <p className="text-sm">
                                <strong>Email:</strong> tanvir@gmail.com
                            </p>
                            <p className="text-sm">
                                <strong>Pass:</strong> 123456
                            </p>
                        </div>
                    </div>

                    {/* project links */}
                    <div className="text-xs mt-10 md:ml-2 flex flex-wrap justify-center md:justify-start">
                        <ExternalLinkBtn link={"https://saas.bamsbd.com"}>Live Website</ExternalLinkBtn>

                        {/* message modal    */}
                        <ExternalLinkBtn onClick={() => setIsMessageModalOpen(!isMessageModalOpen)}>Source Code</ExternalLinkBtn>
                        <MessageModal
                            isMessageModalOpen={isMessageModalOpen}
                            setIsMessageModalOpen={setIsMessageModalOpen}
                        />


                        {/* message modal    */}
                        <ExternalLinkBtn onClick={() => setIsProjectDetailsModalOpen(!isProjectDetailsModalOpen)}>Project Details</ExternalLinkBtn>
                        <ProjectDetailsModal
                            isProjectDetailsModalOpen={isProjectDetailsModalOpen}
                            setIsProjectDetailsModalOpen={setIsProjectDetailsModalOpen}
                            projectDetails={[
                                {
                                    description: "Tracks expenses, income, payables, and receivables with comprehensive ledger and sub-ledger management."
                                },
                                {
                                    description: "Manages inventory, product purchases, and sales with integrated POS functionality."
                                },
                                {
                                    description: "Supports the creation of financial documents such as challans, quotations, bills, and reports."
                                },
                                {
                                    description: "Streamlines financial operations through contra transaction handling (e.g., bank to cash, cash to bank)."
                                },
                            ]}
                        >
                        </ProjectDetailsModal>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default memo(ProjectCard);