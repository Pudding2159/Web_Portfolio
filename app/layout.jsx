import '@styles/globals.css';
import Nav from 'components/Nav';
import NavbarM from 'components/NavbarMenu'; 
import Main from "components/Main"; 
import About from "components/About"
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import Contact from 'components/Contact';
// import Scroller from 'components/Scroller'

export const metadata = {
    title: "MY Profile",
    description: 'my test portfolio'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <NavbarM /> 
        
                

                <main className='app'>
                    <Main /> 
                    {/* <About/> */}
                    {/* <Skills/> */}
                    {/* <Projects/> */}
                    {/* <Contact/> */}
                    {/* <Nav/> */}
                    {/* {children} */}
                </main>
                {/* <Scroller/> */}
                

            </body>
        </html>
    );
}

export default RootLayout;
