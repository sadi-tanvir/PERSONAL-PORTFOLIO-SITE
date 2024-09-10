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

// store-management
import P_3_1 from "@/../public/projects/store-management/1.png";
import P_3_2 from "@/../public/projects/store-management/2.png";
import P_3_3 from "@/../public/projects/store-management/3.png";
import P_3_4 from "@/../public/projects/store-management/4.png";

// poultry farm management
import P_4_1 from "@/../public/projects/poultry-farm-management/1.png";
import P_4_2 from "@/../public/projects/poultry-farm-management/2.png";
import P_4_3 from "@/../public/projects/poultry-farm-management/3.png";
import P_4_4 from "@/../public/projects/poultry-farm-management/4.png";

// laravel online shopping
import P_55_1 from "@/../public/projects/laravel-online-shopping/1.png";
import P_55_2 from "@/../public/projects/laravel-online-shopping/2.png";
import P_55_3 from "@/../public/projects/laravel-online-shopping/3.png";
import P_55_4 from "@/../public/projects/laravel-online-shopping/4.png";


// Real-Time Chat Application
import P_5_1 from "@/../public/projects/realtime-chat-app/1.png";
import P_5_2 from "@/../public/projects/realtime-chat-app/2.png";
import P_5_3 from "@/../public/projects/realtime-chat-app/3.png";
import P_5_4 from "@/../public/projects/realtime-chat-app/4.png";

// Voice Recognition and Language Translator
import P_6_1 from "@/../public/projects/voice-recognition-translator/1.png";

// Draggable Image Gallery
import P_7_1 from "@/../public/projects/draggable-image-gallery/1.png";




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
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

export const projectResourcesData = [

    {
        projectId: 3,
        projectCategory: 'ReactAndNext',
        isAuthenticate: true,
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
                icon: <SiTypescript className='text-blue-600 rounded' />,
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
                icon: <SiTypescript className='text-blue-600 rounded' />,
            },
            {
                id: 2,
                icon: <GrGraphQl className='text-pink-700' />,
            },
            {
                id: 3,
                icon: <SiApollographql className='text-teal-500' />,
            },
            {
                id: 4,
                icon: <SiExpress className='text-gray-200' />,
            },
            {
                id: 5,
                icon: <SiMongodb className='text-green-400' />,
            },
            {
                id: 6,
                icon: <SiMongoose className='text-red-600 text-4xl' />,
            },
        ],
        sliderImages: [PP1, PP2, PP3, PP4]
    },

    {
        projectId: 4,
        projectCategory: 'ReactAndNext',
        isAuthenticate: true,
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

    {
        projectId: 5,
        projectCategory: 'ReactAndNext',
        isAuthenticate: true,
        projectName: "Store Management",
        projectLiveLink: "https://storemanagementsite.netlify.app/",
        frontendRepositoryLInk: "https://github.com/sadi-tanvir/store-management-client",
        backendRepositoryLInk: "https://github.com/sadi-tanvir/store-management-server",
        projectDetailsLink: "https://github.com/sadi-tanvir/store-management-client#store-management-application",
        frontendTechnologies: [
            {
                id: 1,
                icon: <SiTypescript className='text-blue-600 rounded' />,
            },
            {
                id: 2,
                icon: <FaReact className='text-cyan-500' />,
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
            {
                id: 5,
                icon: <FaSass className='text-pink-600' />,
            },
        ],
        backendTechnologies: [
            {
                id: 1,
                icon: <SiTypescript className='text-blue-600 rounded' />,
            },
            {
                id: 2,
                icon: <GrGraphQl className='text-pink-700' />,
            },
            {
                id: 3,
                icon: <SiApollographql className='text-teal-500' />,
            },
            {
                id: 4,
                icon: <SiMongodb className='text-green-400' />,
            },
            {
                id: 5,
                icon: <SiMongoose className='text-red-600 text-4xl' />,
            },
            {
                id: 6,
                icon: <SiExpress className='text-gray-200' />,
            },
            {
                id: 7,
                icon: <SiJsonwebtokens className='text-red-300' />,
            },
            {
                id: 8,
                icon: <FaCcStripe className='text-blue-400' />,
            },
        ],
        sliderImages: [P_3_1, P_3_2, P_3_3, P_3_4]
    },

    {
        projectId: 6,
        projectCategory: 'ReactAndNext',
        isAuthenticate: true,
        projectName: "Poultry Farm Management",
        projectLiveLink: "https://farm-management0.netlify.app/",
        frontendRepositoryLInk: "https://github.com/sadi-tanvir/broiler_farm_management_frontend",
        backendRepositoryLInk: "https://github.com/sadi-tanvir/broiler_farm_management_backend",
        projectDetailsLink: "https://github.com/sadi-tanvir/broiler_farm_management_frontend?tab=readme-ov-file#poultry-farm-management",
        frontendTechnologies: [
            {
                id: 1,
                icon: <FaReact className='text-cyan-500' />,
            },
            {
                id: 2,
                icon: <TbBrandRedux className='text-purple-700' />,
            },
            {
                id: 3,
                icon: <FaBootstrap className='text-purple-600' />,
            },
            {
                id: 4,
                icon: <FaSass className='text-pink-600' />,
            },
        ],
        backendTechnologies: [
            {
                id: 1,
                icon: <SiExpress className='text-gray-200' />,
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
        ],
        sliderImages: [P_4_1, P_4_2, P_4_3, P_4_4]
    },

    {
        projectId: 7,
        projectCategory: 'laravel',
        isAuthenticate: false,
        projectName: "Laravel-Online-Shopping",
        projectLiveLink: "https://drive.google.com/file/d/13s0KYijD1tGx_39bSylO5Ku7Y-tS0yNH/view?usp=drive_link",
        frontendRepositoryLInk: "https://github.com/sadi-tanvir/Laravel-online-shopping-mangement.git",
        projectDetailsLink: "#",
        additionalNameOfTechnology: "Technologies",
        frontendTechnologies: [
            {
                id: 1,
                icon: <FaPhp className='text-blue-500' />,
            },
            {
                id: 2,
                icon: <FaLaravel className='text-red-600' />,
            },
            {
                id: 3,
                icon: <SiMysql className='text-cyan-500' />,
            }
        ],
        sliderImages: [P_55_1, P_55_2, P_55_3, P_55_4]
    },

    {
        projectId: 8,
        projectCategory: 'ReactAndNext',
        isAuthenticate: true,
        projectName: "Realtime Chat Application",
        projectLiveLink: "https://sadi-chat-app.netlify.app/",
        frontendRepositoryLInk: "https://github.com/sadi-tanvir/realtime-chat-application-client",
        backendRepositoryLInk: "https://github.com/sadi-tanvir/realtime-chat-application-server",
        projectDetailsLink: "https://github.com/sadi-tanvir/realtime-chat-application-client#real-time-chat-application",
        frontendTechnologies: [
            {
                id: 1,
                icon: <FaReact className='text-cyan-500' />,
            },
            {
                id: 2,
                icon: <TbBrandRedux className='text-purple-700' />,
            },
            {
                id: 3,
                icon: <SiSocketdotio className='' />,
            },
            {
                id: 4,
                icon: <SiTailwindcss className='text-cyan-600' />,
            },
        ],
        backendTechnologies: [
            {
                id: 1,
                icon: <SiSocketdotio className='' />,
            },
            {
                id: 2,
                icon: <SiExpress className='text-gray-200' />,
            },
            {
                id: 3,
                icon: <SiMongodb className='text-green-400' />,
            },
            {
                id: 4,
                icon: <SiMongoose className='text-red-600 text-4xl' />,
            },
            {
                id: 5,
                icon: <SiJsonwebtokens className='text-red-300' />,
            },
        ],
        sliderImages: [P_5_1, P_5_2, P_5_3, P_5_4]
    },

    {
        projectId: 9,
        projectCategory: 'javascript',
        isAuthenticate: false,
        projectName: "Voice Recognition and Language Translator",
        projectLiveLink: "https://sadi-tanvir.github.io/Voice-Recognition-and-Language-Translator/",
        frontendRepositoryLInk: "https://github.com/sadi-tanvir/Voice-Recognition-and-Language-Translator",
        projectDetailsLink: "https://github.com/sadi-tanvir/Voice-Recognition-and-Language-Translator#voice-recognition-and-language-translator",
        frontendTechnologies: [
            {
                id: 1,
                icon: <RiJavascriptFill className='text-yellow-500' />,
            },
            {
                id: 2,
                icon: <FaHtml5 className='text-orange-500' />,
            },
            {
                id: 3,
                icon: <IoLogoCss3 className='text-blue-500' />,
            },
        ],
        backendTechnologies: [],
        sliderImages: [P_6_1]
    },
    {
        projectId: 10,
        projectCategory: 'ReactAndNext',
        isAuthenticate: false,
        projectName: "Draggable Image Gallery",
        projectLiveLink: "https://image-gallery20.netlify.app/",
        frontendRepositoryLInk: "https://github.com/sadi-tanvir/Image-Gallery",
        projectDetailsLink: "https://github.com/sadi-tanvir/Image-Gallery#image-gallery-app",
        frontendTechnologies: [
            {
                id: 1,
                icon: <SiTypescript className='text-blue-600 rounded' />,
            },
            {
                id: 2,
                icon: <FaReact className='text-cyan-500' />,
            },
            {
                id: 3,
                icon: <SiTailwindcss className='text-cyan-600' />,
            },
        ],
        backendTechnologies: [],
        sliderImages: [P_7_1]
    }
];


