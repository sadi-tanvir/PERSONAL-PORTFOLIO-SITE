import React from 'react'

const TimelineCircleIcon = ({ color }: { color: string; }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} className="absolute -mt-1 z-10 -ml-3.5 h-7 w-7 rounded-full">
            <circle cx="12" cy="12" r="9.75" fill={color} />
            <path fill="white" fillRule="evenodd" d="M15.61 10.186a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
        </svg>
    )
}

export default TimelineCircleIcon