import React from 'react';
import ModernEcommerceProject from './ModernEcommerceProject';
import SadiE_ShopProject from './SadiE_ShopProject';


const Projects = () => {
    return (
        <div className="mt-32 mb-20 container mx-auto">
            <h1 className='text-4xl text-gray-200 text-center font-bold'>Projects</h1>
            
            <ModernEcommerceProject />
            <SadiE_ShopProject />
        </div>
    )
}

export default Projects