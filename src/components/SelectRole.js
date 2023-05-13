import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../style.css'

const SelectRole = () => {
    const navigate = useNavigate();
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        fetch('/overview.md')
            .then((response) => response.text())
            .then((text) => setMarkdownContent(text));
    }, []);

    const handleRoleSelection = (role) => {
        if (role === 'teacher') {
            navigate('/teacher');
        } else {
            navigate('/student');
        }
    };

    return (
        <section>
            <div className="hero">
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
            </div>
            <div className="notion-content">
                <ReactMarkdown children={markdownContent} />
            </div>
        </section>
    );
};

export default SelectRole;
