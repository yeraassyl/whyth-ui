import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style.css'

const Teacher = () => {
    const [preset, setPreset] = useState('');
    const [lessonID, setLessonID] = useState('');

    const createLesson = async () => {
        try {
            const response = await axios.post('/api/lesson', {preset});
            if (response.status === 500) {
                console.error('Error creating a lesson: ' + response.data);
                alert('Seems like it\'s not working right now, try again later.');
            } else if (response.status === 400) {
                console.log("No you can't")
            } else {
                setLessonID(response.data.lesson_id);
            }
        } catch (error) {
            console.error('Error creating lesson: ' + error);
            alert('Seems like it\'s not working right now, try again later.');
        }
    };

    return (
        <section className="section">
            <h2 className="section-title">Start a new lesson</h2>
            <p>Enter the subject for the lesson and create a new lesson:</p>
            <input
                className="input-field"
                type="text"
                placeholder="Enter lesson subject"
                value={preset}
                onChange={(e) => setPreset(e.target.value)}
            />
            <button className="create-lesson-button" onClick={createLesson}>
                Create Lesson
            </button>
            {lessonID && (
                <p>
                    The lesson id is: {lessonID}
                    <br/>
                    <center>or</center>
                    <br/>
                    Share this link with your students:
                    <br/>
                    <Link to={`/student?lessonID=${lessonID}`}>
                        {`${window.location.origin}/student?lessonID=${lessonID}`}
                    </Link>
                </p>
            )}
        </section>
    );

};

export default Teacher;