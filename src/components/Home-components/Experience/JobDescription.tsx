import { GoDotFill } from "react-icons/go";

const JobDescription = ({ children }: { children: string }) => {
    return (
        <p className="mt-2 max-w-screen-sm text-lg text-gray-300 flex">
            <GoDotFill className="mr-2" />
            {children}
        </p>
    )
}

export default JobDescription