import React from 'react'
import { FaJava, FaDocker } from "react-icons/fa";
import { SiSpringboot, SiGraphql, SiReact, SiGit, SiJquery, SiElectron, SiTailwindcss, SiJavascript, SiMysql, SiBootstrap } from "react-icons/si";
export default function Skill() {
    return (
        <div className='text-4xl grid grid-cols-12 max-lg:grid max-lg:grid-cols-6'>
            <SiJavascript className='text-[#EFD81D] max-lg:my-4' />
            <FaJava className='text-[#ed272c] max-lg:my-4' />
            <SiBootstrap className='text-[#7710F1] max-lg:my-4' />
            <SiTailwindcss className='text-[#38BDF8] max-lg:my-4' />
            <SiElectron className='text-[#9FEAF9] max-lg:my-4' />
            <SiJquery className='text-[#78CFF5] max-lg:my-4' />
            <SiReact className='text-[#149ECA] max-lg:my-4' />
            <SiSpringboot className='text-[#6CB52D] max-lg:my-4' />
            <SiGraphql className='text-[#F6009B] max-lg:my-4' />
            <SiMysql className='text-[#00618a] max-lg:my-4' />
            <FaDocker className='text-[#1072d8] max-lg:my-4' />
            <SiGit className='text-[#E84D31] max-lg:my-4' />
        </div>
    )
}
