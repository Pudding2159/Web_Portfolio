import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const ProjectItems = ({ title_1, title_2, backgraundImg, projectUrl }) => {
    return (
        <div className="relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl p-3 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
                 className="rounded-xl group-hover:opacity-10"
                 src={backgraundImg}
                 height={100}
                 width={500}
                 alt='/'
            />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
                <h3 className="text-2xl text-white tracking-wider text-center">{title_1}</h3>
                <p className="px-4 pt-0 text-white text-center">{title_2}</p>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                    <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More info</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectItems
