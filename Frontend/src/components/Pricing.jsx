import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <section className="price py-5">
                <div className="container text-center">
                    <h1 className="display-4 mb-4">Pricing and Membership</h1>
                    <p className="lead mb-5">
                        We provide the ultimate workout experience. We believe that a healthy body promotes healthy lifestyles and by that extension a healthier mind.
                        We are riddled with bad food habits, hectic lifestyles, and extreme pollution all around us.
                        We have come up with a scientific approach to tackle all these issues and keep all of us healthy, both physically and mentally.
                    </p>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h2 className="card-title">₹ 3000 <small className="text-muted">/ month</small></h2>
                                    <h5 className="card-subtitle mb-3">Basic package</h5>
                                    <p className="card-text">
                                        For all those who want to live healthy and happy. Best suited for regular users.
                                    </p>
                                    <strong>What you get:</strong>
                                    <ul className="list-unstyled mt-3">
                                        <li><i className="bi bi-check-circle-fill text-success"></i> Cardio and Yoga</li>
                                        <li><i className="bi bi-check-circle-fill text-success"></i> Core strength enhancing exercises</li>
                                        <li><i className="bi bi-check-circle-fill text-success"></i> Crossfit exercises</li>
                                        <li><i className="bi bi-check-circle-fill text-success"></i> Nutritional guidance</li>
                                        <li><i className="bi bi-check-circle-fill text-success"></i> Personal Trainer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h2 className="card-title">₹ 6000 <small className="text-muted">/ month</small></h2>
                                    <h5 className="card-subtitle mb-3">Premium package</h5>
                                    <p className="card-text">
                                        Get unlimited access to our spa and massages. Get the best advice from nutritionists and personal trainers for optimum workout.
                                    </p>
                                    <strong>What you get:</strong>
                                    <ul className="list-unstyled mt-3">
                                        <li><i className="bi bi-check-circle-fill text-success"></i> Cardio</li>
                                        <li><i className="bi bi-check-circle-fill text-success"></i> Yoga</li>
                                        <li><i className="bi bi-check-circle-fill text-success"></i> Personal Trainer</li>
                                        <li><i className="bi bi-check-circle-fill text-success"></i> Spa & Therapeutic Massage</li>
                                        <li><i className="bi bi-check-circle-fill text-success"></i> Nutritional guidance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h2 className="card-title">₹ 10000 <small className="text-muted">/ month</small></h2>
                                    <h5 className="card-subtitle mb-3">Family package</h5>
                                    <p className="card-text">
                                        For a family of four or less, the best package for a wholesome family health investment.
                                    </p>
                                    <strong>What you get:</strong>
                                    <ul className="list-unstyled mt-3">
                                        <li><i className="bi bi-check-circle-fill text-success"></i> Cardio</li>
                                        <li><i className="bi bi-check-circle-fill text-success"></i> Yoga</li>
                                        <li><i className="bi bi-check-circle-fill text-success"></i> Personal Trainer</li>
                                        <li><i className="bi bi-check-circle-fill text-success"></i> Spa & Massage</li>
                                        <li><i className="bi bi-check-circle-fill text-success"></i> Nutritional guidance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
        </div>
    );
};

export default Pricing;
