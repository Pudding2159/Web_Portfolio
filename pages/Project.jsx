'use client'
import '@styles/globals.css';
import React from 'react';
import '@styles/Project.css';
import '@styles/light_style.css';
import Scroller from 'components/Scroller'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsHouseAdd } from 'react-icons/bs';
import { easeOut, motion as m } from "framer-motion"
import NavbarM from '@components/NavbarMenu';
import ProjectItems from 'components/ProjectItems'
import Tello from 'public/assets/images/Tello.jpg'
import Bagging_algoritm from 'public/assets/images/NN.png'
import Unity from 'public/assets/images/Unity.gif'

function Main() {
    return (
        <div className = "flex flex-col text-center mt-80">
            <m.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-row sm:mt-40 md:mt-80"
                transition={{ duration: 0.1, ease: "easeOut" }}>
                <div className="navbar-container">
                    <NavbarM />
                </div>
                <div className="flex md:flex-row justify-start text-left w-full mx-auto">
                    <div>
                        {/* Текстовый контент */}

                        <p className='uppercase text-sm tracking-widest text-[#ffffffb7] text-left p-3 ml-14 '>Let's work together</p>

                        <h1 className='text-6xl text-[#B1BDC9] text-center sm:hidden font-face-my69'>
                            MY <span className="text-[#d2d2d2] whitespace-nowrap">PROJECTS.</span>
                        </h1>

                        <h1 className='hidden sm:block lg:text-9xl text-[#B1BDC9] font-face-my69 underline-full-width'>
                            MY <span className=" key-tag whitespace-nowrap">PROJECTS.</span>
                        </h1 >



                    </div>
                </div>

            </m.div>

            
            {/* Project element */}

            <div className="w-full flex flex-col items-center mt-8">

                <ProjectItems
                    title_1='Drone-Face-Tracking-and-Photo-Classification-with-Tello'
                    title_2='PyTorch'
                    backgraundImg={Tello}
                    projectUrl='https://github.com/Pudding2159/Drone-Face-Tracking-and-Photo-Classification-with-Tello'
                />


                <ProjectItems
                    title_1='Simple Unity Game' 
                    title_2='Welcome to my Unity game project'
                    backgraundImg={Unity}
                    projectUrl='https://github.com/Pudding2159/Unity-2D-Simple-Mobile-Game'
                />

                <ProjectItems
                    title_1='Bagging Algorithm for Neural-Networks' s
                    title_2='Sklearn'
                    backgraundImg={Bagging_algoritm}
                    projectUrl='https://github.com/Pudding2159/Bagging-Algorithm-for-Neural-Networks'
                />

            </div>
        </div>
    );
};

export default Main;
