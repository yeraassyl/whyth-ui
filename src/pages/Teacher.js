import React, {useState} from 'react';
import axios from 'axios';
import '../style.css'

const Teacher = () => {
    const [preset, setPreset] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');

    const createLesson = async () => {
        try {
            const response = await axios.post('/lesson', {preset});
            setGeneratedLink(response.data.link);
        } catch (error) {
            console.error('Error creating lesson:', error);
        }
    };

    return (
        <section className="section">
            <h2 className="section-title">Teacher Section</h2>
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
            {generatedLink && (
                <p>
                    Share this link with your students: <a href={generatedLink}>{generatedLink}</a>
                </p>
            )}
        </section>
    );

};

export default Teacher;