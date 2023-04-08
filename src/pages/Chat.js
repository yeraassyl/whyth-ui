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
                    <div className="message-container ai">
                        <div className="message-bubble">AI message content</div>
                        <span className="timestamp">12:34 PM</span>
                    </div>
                    <div className="message-container user">
                        <div className="message-bubble">User message content</div>
                        <span className="timestamp">12:35 PM</span>
                    </div>
                </div>
                <div className="input-area">
                    <textarea className="input-field-chat" rows="3"></textarea>
                    <button className="help-button">Help</button>
                    <button className="input-button">Send</button>
                </div>
            </div>
        </div>
    );

};

export default Chat;
