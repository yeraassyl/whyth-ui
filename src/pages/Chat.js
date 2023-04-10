import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../style.css'

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    // const [fetchChatHistoryTrigger, setFetchChatHistoryTrigger] = useState(false);

    // useEffect(() => {
    //     const fetchChatHistory = async () => {
    //         try {
    //             const response = await axios.get('/chat-history');
    //             console.log(response.data)
    //             if (Array.isArray(response.data)) {
    //                 setMessages(response.data);
    //             } else {
    //                 console.error('Error: chat history data is not an array');
    //             }
    //         } catch (error) {
    //             console.error('Error fetching chat history:', error);
    //         }
    //     };
    //
    //     fetchChatHistory();
    // }, [fetchChatHistoryTrigger]);


    const sendMessage = async () => {
        try {
            const response = await axios.post('/prompt', {prompt: input});
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
        <div className="chat">
            <div className="chat-window">
                <div className="chat-header">
                    <div className="chat-header-title">
                        <div className="chat-header-title-main">
                            Lesson name/Topic
                        </div>
                    </div>
                </div>
                <div className="chat-area">
                    <div className="message-ai">
                        <div className="message-container">
                            <div className="message-avatar"></div>
                            <div className="message-item">
                                <div className="markdown-body">
                                    <p>AI message content</p>
                                </div>
                            </div>
                            <div className="message-actions">
                                <div className="message-actions-date">
                                    12:34 AM
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-user">
                        <div className="message-container">
                            <div className="message-avatar"></div>
                            <div className="message-item">
                                <div className="markdown-body">
                                    <p>User message content</p>
                                </div>
                            </div>
                            <div className="message-actions">12:34 PM</div>
                        </div>
                    </div>
                </div>
                <div className="input-area">
                    <div className="input-area-inner">
                        <textarea className="input-field-chat" spellCheck="false" placeholder="Enter something"
                                  rows="3"></textarea>
                        <button className="button-icon input-send clickable">
                            <div className="button-icon-icon">
                                <svg></svg>
                            </div>
                            <div className="button-icon-text">
                                Send
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Chat;
