// layout.js
import '@styles/globals.css';
import NavbarM from '@components/NavbarMenu';
import Main from '@components/Main';

const RootLayout = ({ children }) => {
    return (
        <>

            <main className='app'>
                <header className='header'>
                    <NavbarM />
                </header>
                <main className="style={{ position: 'relative' }}">
                    {children}
                </main>
            </main>
        </>
    );
}
export default RootLayout;
