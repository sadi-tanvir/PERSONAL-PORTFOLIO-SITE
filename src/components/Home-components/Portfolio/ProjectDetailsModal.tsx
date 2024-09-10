import React from "react";

type ProjectDetailsTypes = {
    title?: string;
    description: string;
};
type ProjectDetailsModalPropsTypes = {
    isProjectDetailsModalOpen: boolean;
    setIsProjectDetailsModalOpen: (value: boolean) => void;
    projectDetails: ProjectDetailsTypes[]
}


const ProjectDetailsModal = ({ isProjectDetailsModalOpen, setIsProjectDetailsModalOpen, projectDetails }: ProjectDetailsModalPropsTypes) => {
    return (
        <>
            {isProjectDetailsModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={() => setIsProjectDetailsModalOpen(false)}
                >
                    <div
                        className="relative bg-gray-800 rounded-lg shadow p-4 md:p-5 max-w-2xl w-full"
                        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
                    >
                        {/* Modal header */}
                        <div className="flex items-center justify-between border-b pb-4">
                            <h3 className="text-xl font-semibold text-white">Project Details</h3>
                            <button
                                onClick={() => setIsProjectDetailsModalOpen(false)}
                                className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5"
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="py-5">
                            {
                                projectDetails.length > 0 && projectDetails.map((elem: ProjectDetailsTypes, index) => (
                                    <div key={index}>
                                        <li className='flex'>
                                            <p className='text-lg'>
                                                {elem?.title ? <span className='font-bold text-xl mr-2'>{elem?.title}</span> : <span className="w-2 h-2 mr-2 mb-px inline-block bg-gray-300 rounded-full"></span>}
                                                {elem.description}
                                            </p>
                                        </li>
                                        {
                                            projectDetails.length - 1 !== index &&
                                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mb-[30px!important]" />
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        {/* <!-- Modal footer --> */}
                        <div className="flex items-center border-t border-gray-200 rounded-b">
                            <button onClick={() => setIsProjectDetailsModalOpen(false)} type="button" className="mt-5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProjectDetailsModal;