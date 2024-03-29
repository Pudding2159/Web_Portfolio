'use client'
import React from 'react';
import '@styles/Main.css';
import '@styles/light_style.css';

import Scroller from 'components/Scroller'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsHouseAdd } from 'react-icons/bs';
import { easeOut, motion as m } from "framer-motion"

const Main = () => {
    return (
        <div className = "flex flex-col" >
        <m.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full h-screen flex justify-center items-center"
            transition={{ duration: 0.1, ease: "easeOut" }}>
            <div className="flex flex-col md:flex-row justify-center items-center text-center max-w-[1100px] mx-auto">
                <div>
                    {/* Текстовый контент */}
                    <p className='uppercase text-sm tracking-widest text-[#B7B7B7] text-center p-3'>Let's work together</p>

                    {/* Для крупного текста используйте классы размера текста, подобранные под ваш дизайн */}
                    <h1 className='text-6xl text-[#B1BDC9] text-center sm:hidden font-face-my69'>
                        HI THERE, I'M <span className="text-[#d2d2d2]">MYKYTA</span>
                    </h1>
                    {/* Текст для экранов начиная с sm и выше */}
                    <h1 className='hidden sm:block lg:text-9xl text-[#B1BDC9] text-center font-face-my69'>
                        HI THERE, I'M <span className=" key-tag whitespace-nowrap">MYKYTA MAKHORIN</span>
                    </h1>
                    {/* <h1 class="key-tag"><span>nIKITA</span></h1> */}

                    {/* Для меньшего текста аналогично */}
                    <h2 className='xs:text-2xl lg:text-4xl text-[#B1BDC9] text-center font-extralight'>
                        Student of <span className="text-[#B7B7B7]">The Technical University of Košice </span>
                        and a <span className="text-[#B7B7B7]">Junior</span> programmer.
                    </h2>

                    <div className="flex items-center justify-between max-w-[630px] m-auto py-4">
                        <div className='flex items-center justify-between my-4 w-full sm:w-[100%]'>
                            <a href="https://www.linkedin.com/in/mykyta-makhorin-3991a8204/" target="_blank" rel="noopener noreferrer">
                                <div
                                    className='rounded-full shadow-lg shadow-gray-400 pt-6 cursor-pointer hover:scale-105 ease-in duration-300 w-12 h-12 flex items-center justify-center'
                                    style={{ backgroundColor: 'white' }}
                                > <FaLinkedinIn style={{ position: 'relative', top: '-10px', left: '0px' }} />
                                </div>
                            </a>

                            <a href="https://github.com/Pudding2159" target="_blank" rel="noopener noreferrer">
                                <div
                                    className='rounded-full shadow-lg shadow-gray-400 pt-6 cursor-pointer hover:scale-105 ease-in duration-300 w-12 h-12 flex items-center justify-center'
                                    style={{ backgroundColor: 'white' }}
                                > <FaGithub style={{ position: 'relative', top: '-10px', left: '0px' }} />
                                </div>
                            </a>

                            <a href="mailto:nikitos2159@gmail.com" target="_blank" rel="noopener noreferrer">
                                <div
                                    className='rounded-full shadow-lg shadow-gray-400 pt-6 cursor-pointer hover:scale-105 ease-in duration-300 w-12 h-12 flex items-center justify-center'
                                    style={{ backgroundColor: 'white' }}
                                > <AiOutlineMail style={{ position: 'relative', top: '-10px', left: '0px' }} />
                                </div>
                            </a>

                            <a href="https://web-portfolio-pearl-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <div
                                    className='rounded-full shadow-lg shadow-gray-400 pt-6 cursor-pointer hover:scale-105 ease-in duration-300 w-12 h-12 flex items-center justify-center'
                                    style={{ backgroundColor: 'white' }}
                                > <BsFillPersonLinesFill style={{ position: 'relative', top: '-10px', left: '0px' }} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <Scroller />
            <script>
                console.log(document.visibilityState);
            </script>
        </m.div>

        </div>
    );
};

export default Main;
