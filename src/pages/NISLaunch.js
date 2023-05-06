import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const NISLaunchPage = () => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        fetch('/nislaunch.md')
            .then((response) => response.text())
            .then((text) => setMarkdownContent(text));
    }, []);

    return (
        <div className="notion-content">
            <ReactMarkdown children={markdownContent} />
        </div>
    );};

export default NISLaunchPage;