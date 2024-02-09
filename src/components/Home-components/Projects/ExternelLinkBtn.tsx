import React from 'react'

const ExternalLinkBtn = ({ link, children }: { link: string; children: string; }) => {
    return (
        <a
            className="uppercase border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
            href={link}
            target='_blank'
        >
            {children}
        </a>
    )
}

export default ExternalLinkBtn;