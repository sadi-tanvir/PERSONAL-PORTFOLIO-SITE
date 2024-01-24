import React from 'react';
import ModernEcommerceProject from './ModernEcommerceProject';
import SadiE_ShopProject from './SadiE_ShopProject';


const Projects = () => {
    return (
        <div id='portfolio' className="mt-24 mb-20 container mx-auto">
            <h1 className='text-4xl text-gray-200 text-center font-bold'>Portfolio</h1>
            
            <ModernEcommerceProject />
            <SadiE_ShopProject />
        </div>
    )
}

export default Projects