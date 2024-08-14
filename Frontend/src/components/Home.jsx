import React from 'react'
import Navbar from './Navbar';
import vid from '../assets/NewIntro5.mp4';
import hero from '../assets/floor.jpg';
import Footer from './Footer';
import { FaAngleDown } from 'react-icons/fa';
import AboutHome from './AboutHome';

import AllBranchesUser from '../screens/common/AllBranchesUser';

const Home = () => {
    return (
        <main>
            <Navbar />
            <header className="header-section" onContextMenu={e => e.preventDefault()}>
                <video autoPlay playsInline muted loop className="hero-video">
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video. Sorry for the inconvenience.
                </video>
                

            </header>
            <div className="container">
                <AllBranchesUser/>
            </div>
            {/* <div id="about">
                <AboutHome />
            </div> */}
            {/* <Footer /> */}
        </main>
    )
}

export default Home
