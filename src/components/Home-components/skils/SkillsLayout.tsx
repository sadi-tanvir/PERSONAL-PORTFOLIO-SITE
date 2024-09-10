import React from 'react';
import TechCard from './TechCard';
import { technologies } from "./data"

const SkillsLayout = () => {
    return (
        <div id='skills' className='w-[90%] sm:container mx-auto mt-24 bg-gray-800 py-16  rounded-xl shadow-xl'>
            <div className='text-center lg:w-[500px] mx-auto'>
                <h1 className='text-4xl text-gray-200 font-bold uppercase border-b'>My Skills</h1>
                <p className='text-gray-300 my-2 text-wrap px-2 sm:px-0'>I am comfortable with the following technologies and I always like to learn something new.</p>
            </div>

            <div className='max-w-[1400px] grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7  gap-3 sm:gap-5 md:gap-16 mt-10 mx-auto px-3'>
                {
                    technologies.map((tech) => (
                        <TechCard
                            key={tech.id}
                            imageUrl={tech.url}
                            name={tech.name}
                            className={tech.className}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default SkillsLayout;