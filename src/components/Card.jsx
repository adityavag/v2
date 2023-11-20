import React from 'react'
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Card(props) {
    return (
        <div>
            <div className="mt-4 max-w-sm font-code">
                <div className="flex rounded-lg bg-[#212122ff] p-8 flex-col">
                    <div className="flex items-center mb-3">
                        <h2 className="text-white text-lg font-semibold">{props.title}</h2>
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                        <p className="leading-relaxed text-base text-white">
                            {props.description}
                        </p>
                        <a href={props.link} className="mt-3 text-white inline-flex items-center hover:font-semibold">
                            Source <HiOutlineExternalLink className='mx-3' />
                        </a>
                        <div className="mt-2 space-x-2">
                            {props.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2"
                                >
                                    {tag}
                                </span>
                            ))}
                            {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{props.tags}</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
