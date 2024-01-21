import React from 'react'

const Introduction = () => {
    return (
        <div className="w-full h-full  flex items-center">
            <div className="text-white font-bold absolute left-[50px] top-[120px] sm:left-[120px] sm:top-[150px]">
                <h4 className="text-[#2ed573] text-lg sm:text-xl">Hello! I am</h4>
                <h1 className="text-3xl sm:text-5xl mt-2">Tanvir Hossain Sadi</h1>
                <h2 className="text-[#2ed573] text-xl sm:text-3xl mt-4">Full Stack Developer</h2>
                <p className="mt-1 text-xs">
                    Web Developer
                    <span className="text-[#2ed573] text-lg px-1">/</span>
                    Programmer
                    <span className="text-[#2ed573] text-lg px-1">/</span>
                    Problem Solver
                </p>
                <a
                    target="_blank"
                    href="https://drive.google.com/file/d/18_yrojrNo-bj6iL-qJkxCxxK3LYfHA0e/view?usp=sharing"
                    className="bg-[#2ed573] inline-block py-2 sm:py-3  px-6 sm:px-12 rounded-md mt-5 cursor-pointer">
                    Get Resume
                </a>
                <a
                    href="#about"
                    className="border-4 border-[#2ed573] text-primary inline-block py-1 sm:py-2 ml-5 px-6 sm:px-12 rounded-md mt-5 cursor-pointer">
                    About Me
                </a>
            </div>
        </div>
    );
};

export default Introduction;