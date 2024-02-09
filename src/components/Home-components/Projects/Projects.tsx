import React from 'react';
import ProjectCard from './ProjectCard';
import { projectResourcesData } from "@/components/Home-components/Projects/projectData";


const Projects = () => {
    return (
        <div id='portfolio' className="w-[90%] sm:container mx-auto mt-24 mb-20">
            <h1 className='text-4xl text-gray-200 text-center font-bold uppercase'>Portfolio</h1>
            {
                projectResourcesData?.map((project: any) => (
                    <ProjectCard
                        key={project.projectId}
                        project={project}
                    />
                ))
            }
        </div>
    )
}

export default Projects