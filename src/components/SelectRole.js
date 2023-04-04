import React from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <h1>Select Your Role</h1>
            <button onClick={() => handleRoleSelection('teacher')}>Teacher</button>
            <button onClick={() => handleRoleSelection('student')}>Student</button>
        </div>
    );
};

export default SelectRole;
