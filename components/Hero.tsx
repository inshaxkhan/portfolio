import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import ShimmerButton from './ui/ShimmerButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="green"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="red"
                />
                <Spotlight className="left-96 top-28 h-[80vh] w-[50vw]" fill="white" />
            </div>

            <div
                className="h-screen w-full bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
                absolute top-0 left-0 flex items-center justify-center"
            >
                {/* Radial gradient for the container to give a faded look */}
                <div
                    // chnage the bg to bg-black-100, so it matches the bg color and will blend in
                    className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-200
                     [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-center text-black-100 max-w-80'>
                    
                    </h2>
                    <TextGenerateEffect words='Crafting digital experiences with JavaScript & React.' className='text-center text-[40px] md:text-5xl lg:text-6xl'/>
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-green-500'>
                        Hi I&apos;m Insha, A Web Developer 
                    </p>
                    <a href="#about">
                        <ShimmerButton title="Show my work" icon={<FaLocationArrow/>} position='right'/>
                    </a>
                </div>
            </div>
            

        </div>
    )
}

export default Hero;