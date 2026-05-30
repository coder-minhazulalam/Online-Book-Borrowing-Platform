import Navbar from '@/Components/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <header>
            <Navbar/>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};

export default layout;