import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        <div>
            <h1>Student</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Lesson ID:
                    <input type="text" value={lessonID} onChange={(e) => setLessonID(e.target.value)} />
                </label>
                <button type="submit">Join Lesson</button>
            </form>
        </div>
    );
};

export default Student;
