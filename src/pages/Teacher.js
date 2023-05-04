import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style.css'

const Teacher = () => {
    const [presets, setPresets] = useState([]);
    const [lessonName, setLessonName] = useState('');
    const [lessonID, setLessonID] = useState('');
    const [userInputValues, setUserInputValues] = useState([]);

    useEffect(() => {
        const fetchPresets = async () => {
            try {
                const response = await axios.get('/api/presets');
                setPresets(response.data);
                const initialUserInputValues = new Array(response.data.length).fill('');
                setUserInputValues(initialUserInputValues);
            } catch (error) {
                console.error('Error fetching presets:', error);
            }
        };

        fetchPresets();
    }, []);


    const createLesson = async () => {
        const presetsUpdated = presets.map((preset, index) => {
            if (preset.type === 2) {
                return { ...preset, value: preset.value.replace('%s', userInputValues[index]) };
            }
            return preset;
        });
        try {
            const response = await axios.post('/api/lesson', { presets: presetsUpdated, lessonName: lessonName });
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

    const handleInputChange = (index, field, value) => {
        const newPresets = [...presets];

        if (field === 'checked') {
            newPresets[index][field] = value;
            setPresets(newPresets);
        } else if (field === 'userValue') {
            const newUserInputValues = [...userInputValues];
            newUserInputValues[index] = value;
            setUserInputValues(newUserInputValues);
        }

        console.log(presets)
    };

    return (
        <section className="section teacher-section">
            <h2 className="section-title">Create a lesson as a Teacher</h2>
            <form className="lesson-form">
                <div className="lesson-form__nested">
                    <div>
                        <label htmlFor="lessonName" className="form-label">Lesson subject:</label>
                        <input
                            id="lessonName"
                            className="input-field"
                            type="text"
                            placeholder="Enter lesson subject"
                            value={lessonName}
                            onChange={(e) => setLessonName(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <label className="form-label">Configure AI chat:</label>
                    {presets.map((preset, index) => (
                        <div key={index} className="preset-container">
                            <div className="checkbox-container preset__checkbox-wrapper">
                                <input
                                    type="checkbox"
                                    id={`preset-${index}`}
                                    checked={preset.checked}
                                    onChange={(e) => handleInputChange(index, 'checked', e.target.checked)}
                                />
                                <label htmlFor={`preset-${index}`}>{preset.name}</label>
                            </div>
                            {preset.type === 2 && (
                                <div className="text-input-container">
                                    <input
                                        type="text"
                                        className="input-field"
                                        placeholder="Enter value"
                                        value={userInputValues[index]}
                                        onChange={(e) => handleInputChange(index, 'userValue', e.target.value)}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="button-container">
                        <button type="button" className="create-lesson-button" onClick={createLesson}>
                            Create Lesson
                        </button>
                    </div>
                </div>
            </form>
            {lessonID && (
                <p>
                    The lesson id is: {lessonID}
                    <br />
                    <b>or</b>
                    <br />
                    Please <b>save</b> this link and share with your students:
                    <br />
                    <Link to={`/student?lessonID=${lessonID}`}>
                        {`${window.location.origin}/student?lessonID=${lessonID}`}
                    </Link>
                </p>
            )}
        </section>
    );

};

export default Teacher;