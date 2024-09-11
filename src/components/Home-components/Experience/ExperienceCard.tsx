import Image from "next/image";
import NEDUBD_5_facebook from '/public/projects/nedubd/icons/facebook.png';
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import JobDescription from "./JobDescription";
import TimelineCircleIcon from "./TimelineCircleIcon";

type ExperienceCardTypes = {
    timelineColor: string;
    JobPositionName: string;
    companyName: string;
    duration: string;
    workPlace: string;
    facebookUrl: string;
    websiteUrl?: string;
    baitsJobDescription: string[];
}
const ExperienceCard = (props: ExperienceCardTypes) => {
    const { timelineColor, JobPositionName, companyName, duration, workPlace, facebookUrl, websiteUrl, baitsJobDescription } = props;
    return (
        <div className="relative w-full">
            <TimelineCircleIcon color={timelineColor}></TimelineCircleIcon>
            <div className="ml-6">
                <h2 className="font-bold text-gray-200 text-xl">{JobPositionName}</h2>
                <h4 className="font-bold text-gray-300 text-lg">{companyName}</h4>
                <div className="w-full flex items-center space-x-24 mb-5">
                    <span className="mt-1 block text-sm font-semibold text-[#2ed573] opacity-80">{duration}</span>
                    <span className="mt-1 block text-sm font-semibold text-[#2ed573] opacity-80">{workPlace}</span>
                </div>
                <div className="flex items-center space-x-10 mt-3 mb-5">
                    {
                        websiteUrl &&
                        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                            <div className="flex space-x-2 items-center">
                                <p className="text-2xl text-gray-300">
                                    <TbWorld />
                                </p>
                                <span className="font-bold text-white mt-1">Website</span>
                                <p className="text-sm text-blue-500">
                                    <FaExternalLinkAlt />
                                </p>
                            </div>
                        </a>
                    }
                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                        <div className="flex space-x-2 items-center">
                            <Image
                                src={NEDUBD_5_facebook}
                                className="h-6 w-auto rounded-md md:rounded-lg box-content cursor-pointer"
                                alt="Facebook"
                                width={20}
                                height={20}
                            />
                            <span className="font-bold text-white mt-1">Facebook Page</span>
                            <p className="text-sm text-blue-500">
                                <FaExternalLinkAlt />
                            </p>
                        </div>
                    </a>

                </div>

                {baitsJobDescription.map((description, index) => (
                    <JobDescription key={index}>{description}</JobDescription>
                ))}
            </div>
        </div>
    )
}

export default ExperienceCard