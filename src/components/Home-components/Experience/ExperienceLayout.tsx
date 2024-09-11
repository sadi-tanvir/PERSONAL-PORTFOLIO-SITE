import Image from "next/image";
import NEDUBD_5_facebook from '/public/projects/nedubd/icons/facebook.png';
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import Description from "./JobDescription";
import TimelineCircleIcon from "./TimelineCircleIcon";
import ExperienceCard from "./ExperienceCard";

const ExperienceLayout = () => {

    const baitsJobDescription = [
        "Build web applications using TypeScript, React.js, Next.js, and Laravel to enhance user experience.",
        "Improve performance by optimizing APIs and databases, reducing load times.",
        "Solve complex challenges to innovate SaaS solutions and boost client satisfaction.",
        "Mentor junior developers to maintain high standards in code quality."
    ]
    const diginieItDescription = [
        "Built and maintained web applications with MongoDB, Express.js, React.js, and Node.js.",
        "Supported API development and backend optimization.",
        "Collaborated on front-end tasks and debugging with senior developers."
    ]

    return (
        <div id='experience' className='w-[90%] sm:container mx-auto mt-24 bg-gray-800 py-16  rounded-xl shadow-xl'>
            < div className="flex flex-col items-center justify-center px-6" >
                <div className='text-center lg:w-[500px] mx-auto'>
                    <h1 className='text-4xl text-gray-200 font-bold uppercase border-b'>My Experience</h1>
                </div>


                <div className="space-y-16 border-l-2 border-dashed mt-10">

                    <ExperienceCard
                        timelineColor="#2ed573"
                        JobPositionName="Full Stack Developer"
                        companyName="Bangladesh Associate of IT Solution (BAITS)"
                        duration="April 2023 - Present"
                        workPlace="Onsite"
                        baitsJobDescription={baitsJobDescription}
                        websiteUrl="https://baitsbd.com"
                        facebookUrl="https://www.facebook.com/baitsbd"
                    />
                    <ExperienceCard
                        timelineColor="gray"
                        JobPositionName="MERN Stack Developer (Intern)"
                        companyName="Diginie It"
                        duration="Oct 2022 - March 2023"
                        workPlace="Remote"
                        baitsJobDescription={diginieItDescription}
                        // websiteUrl="https://baitsbd.com"
                        facebookUrl="https://www.facebook.com/profile.php?id=100093376013537"
                    />
                </div>
            </div>
        </div >
    )
}

export default ExperienceLayout;