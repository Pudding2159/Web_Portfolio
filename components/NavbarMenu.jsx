"use client"

import Image from 'next/image';
import React, {useState} from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {BsFillPersonLinesFill, BsHouseAdd} from 'react-icons/bs'
const NavbarM = () => {

    const[nav,setNav] =  useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed w-full h-30 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image
                    src="/assets/images/logo2.png"
                    alt='/'
                    width={150}
                    height={150}
                />

                <div className="py-5 flex-col">
                    <ul className='hidden md:flex' >
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                Home
                            </li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                Skills
                            </li>
                        </Link><Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                Contect
                            </li>
                        </Link><Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                Project
                            </li>
                        </Link>
                    </ul>
                    <div className="absolute top-6 right-0 m-10">
                        <div onClick = {handleNav} >
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>
                </div>
            </div>


            <div className= {nav ? 'fixed left-0 top-0 w-full bg-black/70' : ''} >
                <div className= { nav 
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#040a0f] p-10 ease-in duration-500' 
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                } >

                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image
                                src="/assets/images/logo2.png"
                                width={150}
                                height={150}
                                alt="/"
                            />
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer" >

                                <AiOutlineClose />
                            </div>
                        </div>

                        <div className="border-b border-gray-300 my-4" >
                            <p className="w-[85%] md:w-[90%] py-4" >Lest build somesing legendery</p>
                        </div>

                    </div >
                    <div>
                        <ul>
                            <Link href='/'>
                                <li className='py-4 text-sm'>
                                    Home
                                </li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>
                                    Home
                                </li>
                            </Link> <Link href='/'>
                                <li className='py-4 text-sm '>
                                    Home
                                </li>
                            </Link> <Link href='/'>
                                <li className='py-4 text-sm'>
                                    Home
                                </li>
                            </Link>
                        </ul>
                        <div className="pt-40" >

                            <p className="uppercase tracking-widest text-[#5651e5]" >
                                Let's connect
                            </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[40%]'>
                                <div
                                    className='rounded-full shadow-lg shadow-gray-400 pt-3 cursor-pointer hover:scale-105 ease-in duration-300 w-10 h-10 flex items-center justify-center'
                                > <FaLinkedinIn style={{ position: 'relative', top: '-4px', left: '-1px' }} />
                                </div>
                                <div
                                    className='rounded-full shadow-lg shadow-gray-400 pt-3 cursor-pointer hover:scale-105 ease-in duration-300 w-10 h-10 flex items-center justify-center'
                                > <FaGithub style={{ position: 'relative', top: '-4px', left: '-1px' }} />
                                </div>
                                <div
                                    className='rounded-full shadow-lg shadow-gray-400 pt-3 cursor-pointer hover:scale-105 ease-in duration-300 w-10 h-10 flex items-center justify-center'
                                > <AiOutlineMail style={{ position: 'relative', top: '-4px', left: '-1px' }} />
                                </div>
                                <div
                                    className='rounded-full shadow-lg shadow-gray-400 pt-3 cursor-pointer hover:scale-105 ease-in duration-300 w-10 h-10 flex items-center justify-center'
                                > <BsFillPersonLinesFill style={{ position: 'relative', top: '-4px', left: '-1px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div>

    );
};

export default NavbarM;
