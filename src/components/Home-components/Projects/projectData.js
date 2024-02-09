// Modern Ecommerce
import PP1 from "/public/projects/modern-ecommerce/1.png";
import PP2 from "/public/projects/modern-ecommerce/2.png";
import PP3 from "/public/projects/modern-ecommerce/3.png";
import PP4 from "/public/projects/modern-ecommerce/4.png";
// Sadi Eshop
import P_2_1 from "@/../public/projects/sadi-eshop/1.png";
import P_2_2 from "@/../public/projects/sadi-eshop/2.png";
import P_2_3 from "@/../public/projects/sadi-eshop/3.png";
import P_2_4 from "@/../public/projects/sadi-eshop/4.png";

import { SiJsonwebtokens, SiNextdotjs } from "react-icons/si";
import { SiApollographql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa";

export const projectResourcesData = [
    {
        projectId: 1,
        projectName: "Modern Ecommerce",
        projectLiveLink: "https://modern-ecommerce-app.vercel.app",
        frontendRepositoryLInk: "https://github.com/sadi-tanvir/Modern-ECommerce-Client",
        backendRepositoryLInk: "https://github.com/sadi-tanvir/Modern-ECommerce-Server",
        projectDetailsLink: "https://github.com/sadi-tanvir/Modern-ECommerce-Client?tab=readme-ov-file#modern-ecommerce---a-revolution-in-shopping",
        frontendTechnologies: [
            {
                id: 1,
                icon: <SiNextdotjs className='text-slate-100' />
            },
            {
                id: 2,
                icon: <SiTypescript className='text-blue-600' />,
            },
            {
                id: 3,
                icon: <TbBrandRedux className='text-purple-700' />,
            },
            {
                id: 4,
                icon: <SiApollographql className='text-teal-500' />,
            },
            {
                id: 5,
                icon: <SiTailwindcss className='text-cyan-600' />,
            },
        ],
        backendTechnologies: [
            {
                id: 1,
                icon: <GrGraphQl className='text-pink-700' />,
            },
            {
                id: 2,
                icon: <SiApollographql className='text-teal-500' />,
            },
            {
                id: 3,
                icon: <SiExpress className='text-gray-200' />,
            },
            {
                id: 4,
                icon: <SiMongodb className='text-green-400' />,
            },
            {
                id: 5,
                icon: <SiMongoose className='text-red-600 text-4xl' />,
            },
        ],
        sliderImages: [PP1, PP2, PP3, PP4]
    },

    {
        projectId: 2,
        projectName: "E-Shop",
        projectLiveLink: "https://sadi-e-shop.vercel.app",
        frontendRepositoryLInk: "https://github.com/sadi-tanvir/Sadi-EShop",
        projectDetailsLink: "https://github.com/sadi-tanvir/Sadi-EShop#sadi-eshop",
        frontendTechnologies: [
            {
                id: 1,
                icon: <SiNextdotjs className='text-slate-100' />,
            },
            {
                id: 2,
                icon: <TbBrandRedux className='text-purple-700' />,
            },
            {
                id: 3,
                icon: <SiTailwindcss className='text-cyan-600' />,
            }
        ],
        backendTechnologies: [
            {
                id: 1,
                icon: <SiNextdotjs className='text-slate-100' />,
            },
            {
                id: 2,
                icon: <SiMongodb className='text-green-400' />,
            },
            {
                id: 3,
                icon: <SiMongoose className='text-red-600 text-4xl' />,
            },
            {
                id: 4,
                icon: <SiJsonwebtokens className='text-red-300' />,
            },
            {
                id: 5,
                icon: <FaCcStripe className='text-blue-400' />,
            },
        ],
        sliderImages: [P_2_1, P_2_2, P_2_3, P_2_4]
    },
]


