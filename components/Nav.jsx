"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
    signIn, segnOut,
    suseSession, getProviders, signOut
} from 'next-auth/react';



const Nav = () => {
    const isUserLoggedIn = true;
    const[Provider,setProvider] = useState(null);
    const[toggleDropdown,setToggleDropdown] = useState(false);

    useEffect(() => {
        const setProvider = async() => {
        const response = await getProviders();
        setProvider(response);
    
        }
    setProvider();
    },[] )
    
    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center" >
                <Image
                    src="/assets/images/logo2.png"
                    alt='Logo'
                    width={150}
                    height={150}
                    className="object-contain"
                />
            </Link>

            <div className="sm:flex hidden">
                {isUserLoggedIn ? (<div className="flex gap-3 md:gap-5" >
                    <Link href="/create-prompt"
                        className="black_btn">
                        Create post
                    </Link>
                    <button type="button" onClick={signOut} className="outline_btn">
                        Sing Out
                    </button>
                    <Link href="/profile">
                        <Image
                            src="/assets/images/logo.svg"
                            width={37}
                            height={37}
                            className= "rounded-full"
                            alt= "profile"
                        />
                    </Link>
                </div>
                ) :(
                <>
                {Provider &&
                Object.values(Provider).map((Provider)=> (
                    <button
                    type = "button"
                    key = {Provider.name}
                    onClick={() => signIn(Provider.id)}
                    className = 'black_btn'
                    >
                        Sing in
                    </button>
                
            
                ))}
                </>)}
            </div>

        {/* Mobile navigation */}
        <div className= "sm:hidden flex relative">
            {isUserLoggedIn ?
            (
                <div className= "flex">
                    <Image
                            src="/assets/images/logo.svg"
                            width={37}
                            height={37}
                            className= "rounded-full"
                            alt= "profile"
                            onClick={() => setToggleDropdown((prev) => !prev)}
                        />



                {toggleDropdown && (
                    <div>
                       <Link
                       href= "/profile"
                       className = "dropdown_link"
                       onClick= {() => setToggleDropdown(false)} 
                       >
                        My profile
                       </Link>  
                    
                       <Link
                       href= "/create-promt"
                       className = "dropdown_link"
                       onClick= {() => setToggleDropdown(false)} 
                       >
                        Create promt
                       </Link>  

                       <button
                        type = "button" 
                        onClick = {() => 
                            {
                                setToggleDropdown(false);
                                singOut();


                            }}  
                            className = "mt-5 w-full black-btn" 
                        
                       >
                        Sing Out

                       </button>

                    </div>
                    
                )}
                </div>
            ): 
            (
                <>
                {Provider &&
                Object.values(Provider).map((Provider)=> (
                    <button
                    type = "button"
                    key = {Provider.name}
                    onClick={() => signIn(Provider.id)}
                    className = 'black_btn'
                    >
                        Sing in
                    </button>
                
            
                ))}
                </>
            )}  
            

        </div>



        </nav>
    )
}

export default Nav



