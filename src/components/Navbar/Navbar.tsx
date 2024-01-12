import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between py-12 fixed top-0 left-0 right-0 text-white font-bold'>
            <div className="">Sadi</div>
            <ul className="flex justify-between">
                <li className='px-5 cursor-pointer'>
                    <Link href="/about">Home</Link>
                </li>
                <li className='px-5 cursor-pointer'>About</li>
                <li className='px-5 cursor-pointer'>Skills</li>
                <li className='px-5 cursor-pointer'>Portfolio</li>
                <li className='px-5 cursor-pointer'>Contact</li>
            </ul>
            <div  className="">
                icon
            </div>
        </div>
    )
}

export default Navbar