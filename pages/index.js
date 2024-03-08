import React from 'react';
import { Link } from 'react-scroll';
import Main from '@components/Main';
import NavbarM from '@components/NavbarMenu';
import Contact from '@components/Contact_';
import '@styles/globals.css';
import RootLayout from '@app/layout';
import About from '@components/About';
import Test_1 from '@components/Test_1';


export function Home() {
    return (
        <RootLayout>
            <main>
                <Main />
                {/* <About/>     */}
            </main>
        </RootLayout>
    );
}

export default Home;