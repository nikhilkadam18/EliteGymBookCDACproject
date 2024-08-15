import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpertCard = ({name, img, qualification, experience, gender, type, slug}) => {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={img} className="card-img" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"><small className="text-muted">{qualification}</small></p>
                        <p className="card-text"><small className="text-muted">Experience: {experience} yrs</small></p>
                        <p className="card-text">
                            {name} has a <em>{qualification}</em> degree and an assorted experience in the fitness industry for <strong>{experience}</strong> years. {gender === 'female' ? "She" : "He"} {type === 'nut' ? 'work involves optimizing the calorie in-take and enhancing the metabolism which ensures a healthy body and a sharper mind.' : 'is highly skilled and motivating when it comes to being a personal trainer.'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertCard;
