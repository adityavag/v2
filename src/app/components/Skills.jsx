export const next = require("../../../public/assets/skills/next.png");
export const tailwind = require("../../../public/assets/skills/tailwind.png");
export const sanity = require("../../../public/assets/skills/sanity.png");
export const spring = require("../../../public/assets/skills/spring.png");
export const java = require("../../../public/assets/skills/java.png");
export const react = require("../../../public/assets/skills/react.png");
export const mysql = require("../../../public/assets/skills/mysql.png");
export const github = require("../../../public/assets/skills/github.png");
export const html = require("../../../public/assets/skills/html.png");
export const js = require("../../../public/assets/skills/cpp.png");
export const cpp = require("../../../public/assets/skills/js.png");
export const postman = require("../../../public/assets/skills/postman.png");



import Image from 'next/image'

export default function Skills() {
  return (
    <div className=''>
        <div className="max-lg:grid max-lg:grid-cols-4 max-lg:gap-2 grid grid-cols-8 gap-2">
            {skills.map((skill, index) => ( 
                <div key={index} className="group relative inline-block  mt-4 mb-4 h-max w-max">
                    <Image src={skill.src} alt={skill.tag} width={40}/>
                </div>  
            ))}
        </div>
    </div>
  )
}

const skills = [
    {
        src: next
    },
    {
        src: tailwind
    },
    {
        src: sanity
    },
    {
        src: spring
    },
    {
        src: java
    },
    {
        src: react
    },
    {
        src: mysql
    },
    {
        src: github
    },
    {
        src: cpp
    },
    {
        src: html
    },
    {
        src: js
    },
    {
        src: postman
    }
]