import React from 'react'
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Card(props) {
    return (
        <div>
            <div class="mt-4 max-w-sm font-code">
                <div class="flex rounded-lg h-ful bg-[#212122ff] p-8 flex-col">
                    <div class="flex items-center mb-3">
                        <h2 class="text-white text-lg font-medium">{props.title}</h2>
                    </div>
                    <div class="flex flex-col justify-between flex-grow">
                        <p class="leading-relaxed text-base text-white">
                            {props.description}
                        </p>
                        <a href="#" class="mt-3 text-white inline-flex items-center hover:font-semibold">
                            Source <HiOutlineExternalLink className='mx-3'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
