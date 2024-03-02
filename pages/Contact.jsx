'use client'
import React from 'react';
import '@styles/globals.css';
import NavbarM from '@components/NavbarMenu';

function Contact(){
    return(
        
        
        <div className = "flex">

            <div className="navbar-container">
                    <NavbarM />
                </div>
            
            <div className = "flex flex-row">
                Contact
            </div>

            <div className = 'flex flex-col'>
                <div>1</div> 
                <div>2</div> 
                <div>3</div> 
                <div>4</div> 
            </div>
        
        </div>

    )

}
export default Contact;