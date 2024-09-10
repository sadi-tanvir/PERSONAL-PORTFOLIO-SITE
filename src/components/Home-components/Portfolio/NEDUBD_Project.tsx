'use client';

import React, { memo, useEffect, useState } from 'react';
import Image from 'next/image';
import { FaPhp, FaLaravel, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';
import classes from './Projects.module.css';
import ExternalLinkBtn from './ExternelLinkBtn';

// Images of NEDUBD
import NEDUBD_1 from '/public/projects/nedubd/1.png';
import NEDUBD_2 from '/public/projects/nedubd/2.png';
import NEDUBD_3 from '/public/projects/nedubd/3.png';
import NEDUBD_4 from '/public/projects/nedubd/4.png';
import NEDUBD_5_facebook from '/public/projects/nedubd/icons/facebook.png';
import MessageModal from './MessageModal';
import ProjectDetails from './ProjectDetailsModal';
import ProjectDetailsModal from './ProjectDetailsModal';

// Modal management
const ProjectCard = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const [isMessageModalOpen, setIsMessageModalOpen] = useState<boolean>(false);
    const [isProjectDetailsModalOpen, setIsProjectDetailsModalOpen] = useState<boolean>(false);
    const sliderImages = [NEDUBD_1, NEDUBD_2, NEDUBD_3, NEDUBD_4];

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
                <div className="w-auto flex flex-col md:order-1 justify-center items-center transform -translate-y-4 px-2 sm:px-10 md:px-0">
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

                <div className="flex-col text-gray-300 md:col-span-2 md:order-2">
                    <p className="md:ml-0 pt-4 text-2xl font-bold ml-5 text-center md:text-start text-priamry uppercase">
                        National Education Bangladesh (NEDUBD)
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
                                    <FaPhp className="text-blue-500" />
                                </p>
                                <p className="text-3xl">
                                    <FaLaravel className="text-red-600" />
                                </p>
                                <p className="text-3xl">
                                    <SiMysql className="text-cyan-500" />
                                </p>
                                <p className="text-3xl">
                                    <RiJavascriptFill className="text-yellow-500" />
                                </p>
                            </div>
                        </div>

                        {/* back-end technology */}
                        <div className="sm:ml-auto sm:mr-10">
                            <p className="font-bold text-center sm:text-start">Additional Information</p>
                            <span className="font-bold"></span>
                            <a href="https://www.facebook.com/NEDUBD/" target="_blank" rel="noopener noreferrer">
                                <div className="flex space-x-2 items-center mt-5">
                                    <Image
                                        src={NEDUBD_5_facebook}
                                        className="h-7 w-auto rounded-md md:rounded-lg box-content cursor-pointer"
                                        alt="Facebook"
                                        width={30}
                                        height={30}
                                    />
                                    <span className="font-bold">Facebook Page</span>
                                    <p className="text-sm text-blue-500">
                                        <FaExternalLinkAlt />
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* project test credentials */}
                    <div className="w-full flex justify-center md:justify-start items-center pl-5">
                        <div className="text-center md:text-start">
                            <h3 className="underline font-semibold text-[#2ed573]">Test Credentials</h3>
                            <p className='flex items-center space-x-2'>
                                <strong>Website:</strong>
                                <a className=" text-blue-500 flex items-center" href="https://cms.nedubd.com">
                                    https://cms.nedubd.com
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
                        <ExternalLinkBtn link={"https://cms.nedubd.com"}>Live Website</ExternalLinkBtn>

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
                                    title: "Student Management:",
                                    description: "Streamlined student onboarding with bulk addition via Excel, class and exam management, mark entry, and SMS notifications. Integrated QR code functionality for secure exam result verification."
                                },
                                {
                                    title: "Student Accounts:",
                                    description: "Efficiently manage fee collection, waivers, and customized fee reports. Automate SMS notifications for fee payments and due reminders. QR code scanning for verifying fee authenticity."
                                },
                                {
                                    title: "Attendance Management:",
                                    description: "Supports both automatic and manual attendance recording through attendance devices, ensuring accurate record-keeping."
                                },
                                {
                                    title: "Staff Management:",
                                    description: "Manage staff/teacher information with bulk addition via Excel or manual entry, including salary processing and attendance management using attendance devices."
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