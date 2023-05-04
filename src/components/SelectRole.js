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
            <h1>AI Learning & Teaching Assistant</h1>
            <p>Choose your role: <b>Teacher</b> or  <b>Student</b></p>
            <div className="role-selection-buttons">
                <button
                    className="role-selection-button"
                    onClick={() => handleRoleSelection('teacher')}
                >
                    Teacher
                </button>
                <button
                    className="role-selection-button"
                    onClick={() => handleRoleSelection('student')}
                >
                    Student
                </button>
            </div>
        </section>
    );
};

export default SelectRole;
