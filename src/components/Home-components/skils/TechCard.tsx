import Image from 'next/image'
import React from 'react'

const TechCard = ({ imageUrl, name, className="w-6 sm:w-10" }: { imageUrl: any; name: string; className?: string; }) => {
    return (
        <div className='bg-gray-200 flex justify-evenly items-center px-3 py-2 rounded-md space-x-1'>
            <Image
                src={imageUrl}
                alt={name}
                className={`${className}`}
                draggable={false}
            />
            <span>{name}</span>
        </div>
    )
}

export default TechCard;