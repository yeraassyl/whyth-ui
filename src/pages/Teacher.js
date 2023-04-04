import React, { useState } from 'react';
import axios from 'axios';

const Teacher = () => {
    const [preset, setPreset] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');

    const createLesson = async () => {
        try {
            const response = await axios.post('/lesson', { preset });
            setGeneratedLink(response.data.link);
        } catch (error) {
            console.error('Error creating lesson:', error);
        }
    };

    return (
        <div>
            <h1>Teacher</h1>
            <input
                type="text"
                value={preset}
                onChange={(e) => setPreset(e.target.value)}
                placeholder="Enter preset"
            />
            <button onClick={createLesson}>Create Lesson</button>
            {generatedLink && <p>Generated Link: {generatedLink}</p>}
        </div>
    );
};

export default Teacher;