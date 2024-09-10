import React from 'react'

const Introduction = () => {

    return (
        <div className="w-full h-full flex items-center">
            <div className="text-white font-bold absolute left-[30px] sm:left-[120px] top-[120px] sm:top-[150px] md:left-[135px] xl:left-[200px]">
                <h4 className="text-[#2ed573] text-lg sm:text-xl xl:text-2xl">Hello! I am</h4>
                <h1 className="text-3xl sm:text-5xl xl:text-7xl mt-2 xl:mt-4 tracking-in-expand ">Tanvir Hossain Sadi</h1>
                <h2 className="text-[#2ed573] text-xl sm:text-3xl xl:text-5xl mt-4 xl:mt-6">Full Stack Developer</h2>
                <p className="mt-1 xl:mt-3 text-xs xl:text-md uppercase">
                    Web Developer
                    <span className="text-[#2ed573] text-lg px-1">/</span>
                    Programmer
                    <span className="text-[#2ed573] text-lg px-1">/</span>
                    Problem Solver
                </p>
                <div className='mt-5 xl:mt-10 flip-scale-down-diag-2'>
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1IbrPRTtASMHd6pWanC8-Sm2Vtk7go4gl/view?usp=drive_link"
                        className="bg-[#2ed573] inline-block py-2 sm:py-3 xl:py-4  px-6 sm:px-12 xl:px-14 rounded-md mt-5 cursor-pointer uppercase">
                        Get Resume
                    </a>
                    <a
                        href="#about"
                        className="border-4 border-[#2ed573] text-primary inline-block py-1 sm:py-2 xl:py-3 ml-5 px-6 sm:px-12 xl:px-14 rounded-md mt-5 cursor-pointer uppercase">
                        About Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Introduction;