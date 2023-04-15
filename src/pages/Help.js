import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const HelpPage = () => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        fetch('/help.md')
            .then((response) => response.text())
            .then((text) => setMarkdownContent(text));
    }, []);

    return (
        <div className="notion-content">
            <ReactMarkdown children={markdownContent} />
        </div>
    );};

export default HelpPage;