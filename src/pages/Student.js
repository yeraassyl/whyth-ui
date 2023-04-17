import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';
import '../style.css'

const Student = () => {
    const [username, setUsername] = useState('');
    const [lessonID, setLessonID] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const lessonIDFromURL = searchParams.get('lessonID');
        if (lessonIDFromURL) {
            setLessonID(lessonIDFromURL);
        }
    }, [location]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/session', {lesson_id: lessonID, username});
            if (response.status === 500) {
                console.error('Error creating session:', response.data);
                alert('Error creating session');
            } else if (response.status === 400) {
                console.log("No you can't")
            } else {
                navigate('/chat');
            }
        } catch (error) {
            console.error('Error creating session:', error);
            alert('Error creating session');
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
                <button className="create-lesson-button" type="submit">
                    Join Lesson
                </button>
            </form>
        </section>
    );

};

export default Student;
