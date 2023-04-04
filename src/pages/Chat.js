import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [fetchChatHistoryTrigger, setFetchChatHistoryTrigger] = useState(false);

    useEffect(() => {
        const fetchChatHistory = async () => {
            try {
                const response = await axios.get('/chat-history');
                console.log(response.data)
                if (Array.isArray(response.data)) {
                    setMessages(response.data);
                } else {
                    console.error('Error: chat history data is not an array');
                }
            } catch (error) {
                console.error('Error fetching chat history:', error);
            }
        };

        fetchChatHistory();
    }, [fetchChatHistoryTrigger]);


    const sendMessage = async () => {
        try {
            const response = await axios.post('/prompt', { prompt: input });
            console.log(response.data)
            const newMessage = {
                content: input,
                is_user: true,
            };
            setMessages([...messages, newMessage, response.data]);
            setInput('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <h1>Chat</h1>
            <div>
                {messages.map((message, index) => (
                    <div key={index} className={message.is_user ? 'user-message' : 'system-message'}>
                        {message.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
