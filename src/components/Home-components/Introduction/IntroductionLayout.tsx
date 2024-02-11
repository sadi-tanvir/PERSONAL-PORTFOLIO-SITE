import React from 'react'
import ParticlesBg from './ParticlesBg'
import Introduction from './Introduction'

const IntroductionLayout = () => {
    return (
        <section id="home" className={`w-full h-[80vh] bg-[url(/HeaderBG.jpg)] bg-cover bg-fixed bg-no-repeat`}>
            <ParticlesBg></ParticlesBg>
            <Introduction></Introduction>
        </section>
    )
}

export default IntroductionLayout