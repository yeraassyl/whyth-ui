import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css'

const SelectRole = () => {
    const navigate = useNavigate();

    const handleRoleSelection = (role) => {
        if (role === 'teacher') {
            navigate('/teacher');
        } else {
            navigate('/student');
        }
    };

    return (
        // <div className="container">
        //     <h1>Select Your Role</h1>
        //     <button className="primary-btn" onClick={() => handleRoleSelection('teacher')}>
        //         Teacher
        //     </button>
        //     <button className="primary-btn" onClick={() => handleRoleSelection('student')}>
        //         Student
        //     </button>
        // </div>
        <section className="hero">
            <h1>AI Teaching Assistant</h1>
            <p><b>Join</b> a lesson or <b>Start</b> one:</p>
            <div className="role-selection-buttons">
                <button
                    className="role-selection-button"
                    onClick={() => handleRoleSelection('student')}
                >
                    Join
                </button>
                <button
                    className="role-selection-button"
                    onClick={() => handleRoleSelection('teacher')}
                >
                    Start
                </button>
            </div>
        </section>
    );
};

export default SelectRole;
