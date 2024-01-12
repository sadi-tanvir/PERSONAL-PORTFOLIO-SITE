'use client'
import React from 'react';
import NotFoundImg from '@/../public/pageNotFound.png';
import { useRouter } from 'next/navigation';

const NotFound = () => {
    const router = useRouter()

    return (
        <div className='w-screen h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${NotFoundImg.src})` }}>
            <button onClick={() => router.push("/")} className="bg-red-500 px-16 py-3 rounded-lg text-white font-bold mt-64">Back To Home</button>
        </div>
    );
};

export default NotFound;
