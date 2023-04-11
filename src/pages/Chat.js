import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const chatAreaRef = useRef();

    useEffect(() => {
        const fetchChatHistory = async () => {
            const response = await axios.get('/chat-history');
            setMessages(response.data);
        };

        fetchChatHistory();
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        setLoading(true);
        const message = {
            content: inputValue, role: 1,
        };
        const loaderMessage = {
            content: 'kek', role: 2, isLoading: true
        };
        setMessages([...messages, message, loaderMessage]);
        setInputValue('');

        const response = await axios.post('/prompt', {prompt: inputValue});
        const aiMessage = response.data;
        setMessages([...messages, message, aiMessage]);
        setLoading(false);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSendClick = () => {
        if (inputValue.trim()) {
            if (!loading) {
                sendMessage();
            } else {
                alert('One message at a time, pls wait response from AI');
            }
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendClick();
        }
    };

    const scrollToBottom = () => {
        if (chatAreaRef.current) {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
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
                <div className="chat-area" ref={chatAreaRef}>
                    {messages
                        .filter((message) => message.role !== 0)
                        .map((message, index) => (
                            <div key={index} className={`message-${message.role === 1 ? 'user' : 'ai'}`}>
                                <div className="message-container">
                                    <div className="message-avatar"></div>
                                    <div className="message-item">
                                        <div className="markdown-body">
                                            <p>{message.isLoading ? (
                                                    <svg width="30" height="14" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#fff"><circle cx="15" cy="15" r="15" fill="var(--primary, red)"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fillOpacity="0.3" fill="var(--primary, red)"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15" fill="var(--primary, red)"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle></svg>                                                ) :
                                                message.content
                                            }</p>
                                        </div>
                                    </div>
                                    <div className="message-actions">
                                        <div className="message-actions-date">
                                            12:34 AM
                                        </div>
                                    </div>
                                </div>
                            </div>))
                    }
                </div>
                <div className="input-area">
                    <div className="input-area-inner">
                        <textarea
                            className="input-field-chat"
                            spellCheck="false"
                            placeholder="Enter something"
                            rows="3"
                            value={inputValue}
                            onChange={handleInputChange}
                            onFocus={scrollToBottom}
                            onKeyDown={handleKeyDown}
                            ref={inputRef}></textarea>
                        <button
                            className="button-icon input-send clickable"
                            onClick={handleSendClick}
                            disabled={loading}>
                            <div className="button-icon-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                     width="16" height="16" fill="none">
                                    <defs>
                                        <path id="send-white_svg__a" d="M0 0h16v16H0z"></path>
                                    </defs>
                                    <g>
                                        <mask id="send-white_svg__b" fill="#fff">
                                            <use xlinkHref="#send-white_svg__a"></use>
                                        </mask>
                                        <g mask="url(#send-white_svg__b)">
                                            <path transform="translate(1.333 2)"
                                                  d="M0 4.71 6.67 6l1.67 6.67L12.67 0 0 4.71Z" style={{
                                                stroke: "rgb(255, 255, 255)",
                                                strokeWidth: 1.33333,
                                                strokeOpacity: 1,
                                                strokeDasharray: "0, 0"
                                            }}></path>
                                            <path transform="translate(8.003 6.117)" d="M0 1.89 1.89 0" style={{
                                                stroke: "rgb(255, 255, 255)",
                                                strokeWidth: 1.33333,
                                                strokeOpacity: 1,
                                                strokeDasharray: "0, 0"
                                            }}></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="button-icon-text">Send</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>);

};

export default Chat;

