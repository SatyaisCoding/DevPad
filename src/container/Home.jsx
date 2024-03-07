import React, { useState } from 'react';
import { HiChevronDoubleLeft } from "react-icons/hi";


const Home = () => {
    const [isSideMenu, setIsSideMenu] = useState(false);
    return (
        <>
            <div className={`w-2 ${isSideMenu ? "w-2" : "flex-[.2] xl:flex-[.2]"} min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-6 transition-all duration-200 ease-in-out`}>

                {/* Anchor section */}
                <div onClick={() => setIsSideMenu(!setIsSideMenu)}
                    className='w-8 h-8 bg-secondary rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer'></div>
                <HiChevronDoubleLeft className='text-white text-xl' />
                {/* logo */}



                {/* Start Coding */}



                {/* home navbar */}
            </div>
            <div></div>
        </>
    )
}

export default Home