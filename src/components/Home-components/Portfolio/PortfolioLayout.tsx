'use client'
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectResourcesData } from "./projectData";
import NEDUBD_Project from './NEDUBD_Project';


const PortfolioLayout = () => {
    const [filteredProjects, setFilteredProjects] = useState<any>([])

    const [btnTrack, setBtnTrack] = useState({
        all: true,
        ReactAndNext: false,
        laravel: false,
        javascript: false,
    })


    useEffect(() => {
        if (btnTrack.all) {
            setFilteredProjects(projectResourcesData)
        } else if (btnTrack.ReactAndNext) {
            const filterReactNext = projectResourcesData.filter((project) => project.projectCategory === "ReactAndNext");
            setFilteredProjects(filterReactNext);
        } else if (btnTrack.laravel) {
            const filterLaravel = projectResourcesData.filter((project) => project.projectCategory === "laravel");
            setFilteredProjects(filterLaravel);
        }
        else if (btnTrack.javascript) {
            const filterJavascript = projectResourcesData.filter((project) => project.projectCategory === "javascript");
            setFilteredProjects(filterJavascript);
        }
    }, [btnTrack])

    return (
        <div id='portfolio' className="w-[90%] sm:container mx-auto mt-32 mb-20">
            <div className='w-full mb-12 flex flex-col md:flex-row items-center md:justify-between border-b pb-3'>
                <h1 className='text-4xl text-gray-200 text-center font-bold mb-7 md:mb-0 uppercase'>Portfolio</h1>
                <div className='w-fit px-2 py-2 bg-gray-700 rounded-full mx-auto md:mx-0'>
                    <button
                        onClick={() => setBtnTrack({ all: true, ReactAndNext: false, laravel: false, javascript: false })}
                        className={`${btnTrack.all ? "bg-[#2ed573]" : "text-white"} py-[7px] md:py-[10px] px-6 md:px-8 rounded-full transition-all ease-in-out duration-200`}>
                        All
                    </button>
                    <button
                        onClick={() => setBtnTrack({ all: false, ReactAndNext: true, laravel: false, javascript: false })}
                        className={`${btnTrack.ReactAndNext ? "bg-[#2ed573]" : "text-white"} py-[7px] md:py-[10px] px-5 md:px-8 rounded-full transition-all ease-in-out  duration-200`}>
                        React.js | Next.js
                    </button>
                    <button
                        onClick={() => setBtnTrack({ all: false, ReactAndNext: false, laravel: true, javascript: false })}
                        className={`${btnTrack.laravel ? "bg-[#2ed573]" : "text-white"} py-[7px] md:py-[10px] px-5 md:px-8 rounded-full transition-all ease-in-out duration-200`}>
                        Laravel
                    </button>
                    <button
                        onClick={() => setBtnTrack({ all: false, ReactAndNext: false, laravel: false, javascript: true })}
                        className={`${btnTrack.javascript ? "bg-[#2ed573]" : "text-white"} py-[7px] md:py-[10px] px-5 md:px-8 rounded-full transition-all ease-in-out duration-200`}>
                        Javascript
                    </button>
                </div>
            </div>
            <div className='space-y-16'>
                <NEDUBD_Project />
                {
                    filteredProjects?.map((project: any) => (
                        <ProjectCard
                            key={project.projectId}
                            project={project}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default PortfolioLayout;