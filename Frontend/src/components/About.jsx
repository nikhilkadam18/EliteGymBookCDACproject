import React, { useState, useContext } from 'react';
import Navbar from './Navbar';
import { TrainerContext } from '../context/TrainerContext';
import ExpertCard from './ExpertCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    const [...trainers] = useContext(TrainerContext);
    const [gym] = useState(trainers.filter(item => item.type === 'gym'));
    const [nut] = useState(trainers.filter(item => item.type === 'nut'));

    return (
        <main>
            <Navbar />
            <div className="container my-5">
                <section className="mb-5">
                    <h1 className="text-center mb-4">About Us</h1>
                    <p className="lead text-center">
                    Welcome to EliteGymBook, your go-to platform for discovering and booking the best gyms in your area.
                    </p>
                    <p className="lead text-center">
                    Whether you're a fitness enthusiast or a gym owner, our easy-to-use web application connects you with top-rated gyms, allowing you to search, compare, and secure memberships with just a few clicks.
                    </p>
                    <p className="lead text-center">
                    At EliteGymBook, we believe in making fitness accessible and convenient for everyone, helping you achieve your health goals while gym owners grow their business.
                    </p>
                </section>
                
                
            </div>
        </main>
    );
};

export default About;
