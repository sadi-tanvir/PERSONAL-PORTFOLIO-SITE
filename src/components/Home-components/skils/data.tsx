import NextJs from "@/../public/Technoloy/next_js.png";
import ReactJs from "@/../public/Technoloy/react_js.png";
import JavaScript from "@/../public/Technoloy/javascript_icon.png";
import TypeScript from "@/../public/Technoloy/typescript.png";
import ReduxJs from "@/../public/Technoloy/redux.png";
import TailwindCss from "@/../public/Technoloy/tailwind.png";
import Bootstrap from "@/../public/Technoloy/bootstrap.png";
import Sass from "@/../public/Technoloy/sass.png";
import ApolloClient from "@/../public/Technoloy/apollo_client2.png";
import GraphQl from "@/../public/Technoloy/graphQL.png";
import NodeJs from "@/../public/Technoloy/NodeJs.png";
import ExpressJs from "@/../public/Technoloy/express.png";
import MongoDB from "@/../public/Technoloy/mongodb.png";
import Prisma from "@/../public/Technoloy/prisma.png";
import Mongoose from "@/../public/Technoloy/mongoose.png";
import MySQL from "@/../public/Technoloy/mysql.png";
import Firebase from "@/../public/Technoloy/firebase.png";
import Docker from "@/../public/Technoloy/docker.png";
import PHP from "@/../public/Technoloy/php.png";
import Laravel from "@/../public/Technoloy/laravel.png";
import Redis from "@/../public/Technoloy/redis.png";


interface TechnologyList {
    id: number,
    url: any,
    name: string,
    className?: string;
}

export const technologies: TechnologyList[] = [
    {
        id: 1,
        url: JavaScript,
        name: 'JavaScript'
    },
    {
        id: 2,
        url: TypeScript,
        name: 'TypeScript'
    },
    {
        id: 3,
        url: NextJs,
        name: 'Next.js'
    },
    {
        id: 4,
        url: ReactJs,
        name: 'React.js'
    },
    {
        id: 5,
        url: ReduxJs,
        name: 'Redux'
    },
    {
        id: 6,
        url: NodeJs,
        name: 'Node.js',
    },
    {
        id: 7,
        url: PHP,
        name: 'PHP',
    },
    {
        id: 8,
        url: Laravel,
        name: 'Laravel',
    },
    {
        id: 9,
        url: MySQL,
        name: '',
        className: "w-full"
    },
    {
        id: 10,
        url: GraphQl,
        name: 'GraphQL',
    },
    {
        id: 11,
        url: ApolloClient,
        name: '',
        className: "w-full"
    },
    
    {
        id: 12,
        url: ExpressJs,
        name: 'Express.js',
    },
    {
        id: 13,
        url: MongoDB,
        name: 'MongoDB',
    },
    {
        id: 14,
        url: Prisma,
        name: 'Prisma',
    },
    {
        id: 15,
        url: Mongoose,
        name: 'Mongoose',
    },
    {
        id: 16,
        url: TailwindCss,
        name: 'Tailwind'
    },
    {
        id: 17,
        url: Sass,
        name: 'Sass'
    },
    {
        id: 18,
        url: Firebase,
        name: 'Firebase'
    },
    {
        id: 20,
        url: Redis,
        name: 'Redis'
    },
    {
        id: 19,
        url: Docker,
        name: 'Docker'
    },
]