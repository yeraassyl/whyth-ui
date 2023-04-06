import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style.css'

const Student = () => {
    const [username, setUsername] = useState('');
    const [lessonID, setLessonID] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/session', { lesson_id: lessonID, username });
            const { session_id } = response.data;
            if (session_id) {
                navigate('/chat');
            }
        } catch (error) {
            console.error('Error creating session:', error);
        }
    };

    return (
        <section className="section">
            <h2 className="section-title">Student Section</h2>
            <p>Enter the lesson ID or link provided by your teacher and your username.</p>
            <form onSubmit={handleSubmit}>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="input-field"
                    type="text"
                    placeholder="Enter lesson ID"
                    value={lessonID}
                    onChange={(e) => setLessonID(e.target.value)}
                />
                <button className="input-button" type="submit">
                    Join Lesson
                </button>
            </form>
        </section>
    );

};

export default Student;
