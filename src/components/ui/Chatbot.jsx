import React, { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import './style.css';
import chatIcon from '../../assets/chat-icon.png';
import headerRobot from '../../assets/header-robot.png';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            text: "Hi There,\nHow can I help you today?",
            isHtml: false
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);



    const chatBodyRef = useRef(null);
    const dragControls = useDragControls();

    // Auto-scroll to bottom
    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages, isTyping, isOpen]);

    // Initialize Session ID
    useEffect(() => {
        if (!localStorage.getItem('chatSessionId')) {
            const sessionId = 'session-' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('chatSessionId', sessionId);
        }
    }, []);


    // --- Message Processing Logic ---
    const handleSendMessage = async (textOverride) => {
        const text = textOverride || inputValue.trim();
        if (!text) return;

        setMessages(prev => [...prev, { id: Date.now(), type: 'user', text }]);
        setInputValue("");
        setIsTyping(true);

        try {
            const sessionId = localStorage.getItem('chatSessionId');
            const response = await fetch(
                'https://n8n.lasak.in/webhook/4a477212-2205-4040-834b-1bd68eb62889/chat',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ sessionId, message: text, chatInput: text })
                }
            );

            const data = await response.json();
            processBotResponse(data);
        } catch (err) {
            handleError(err);
        } finally {
            setIsTyping(false);
        }
    };

    const processBotResponse = (data) => {
        let botText = "Sorry, I didn’t understand that.";
        if (typeof data === "string") {
            botText = data;
        } else if (data.output || data.response || data.text || data.answer) {
            botText = data.output || data.response || data.text || data.answer;
        } else if (Array.isArray(data)) {
            const item = data[0]?.json;
            botText = item?.output || item?.response || item?.text || JSON.stringify(item);
        }
        setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botText }]);
    };

    const handleError = (err) => {
        setMessages(prev => [...prev, {
            id: Date.now() + 1,
            type: 'bot',
            text: `Error: ${err.message || "Server is not responding."}`
        }]);
    };

    const handleKeyDown = (e) => { if (e.key === 'Enter') handleSendMessage(); };

    const handleQuickAction = (type) => {
        let botText = type === "Services"
            ? "**Mechanical Services**\n- Reverse Engineering\n- Retro Fitting\n- New Product Development\n- 3D Modeling \n- Analysis \n- Patent Drawing\n\n \n**IT Services**\n- Web Development\n- Digital Marketing\n- UI/UX Design"
            : "- Lasak CRM\n- Process Automation (AI Powered)\n- Lasak Appetite";

        setMessages(prev => [...prev, { id: Date.now(), type: "bot", text: botText }]);
    };

    const renderMessageContent = (text) => ({ __html: marked.parse(text) });

    return (
        <>
            {/* Only show toggle button when chat is closed */}
            {!isOpen && (
                <motion.button
                    className="chat-toggle-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    style={{ position: "fixed", bottom: "20px", right: "20px", width: "65px", height: "65px", borderRadius: "50%", backgroundColor: "#ffffff", border: "none", cursor: "pointer", zIndex: 10000, display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
                >
                    <img src={chatIcon} alt="Chat" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    <div className="status-dot-pulse"></div>
                </motion.button>
            )}

            <AnimatePresence>
                {isOpen && (

                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}

                        className="chat-container"
                    >
                        <div className="chat-header">
                            <motion.img
                                src={headerRobot}
                                alt="Assistant"
                                className="header-robot-img"
                                drag
                                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                dragElastic={0.8}
                            />
                            <div className="header-top"><div className="window-controls"><button onClick={() => setIsOpen(false)} className="close-chat-btn">✕</button></div></div>
                            <div className="brand-wrapper">
                                <div className="avatar-container"><div className="avatar-circle"><img src={chatIcon} alt="Arun" className="avatar-img" /></div><div className="status-dot"></div></div>
                                <h2 className="brand-name">I'm Sakthi</h2>
                                <p className="brand-subtitle">How can I help you today?</p>
                            </div>
                        </div>

                        <div className="chat-body" ref={chatBodyRef}>
                            <div className="date-divider">Today, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>

                            {messages.map((msg) => (
                                <div key={msg.id} className={`message-wrapper ${msg.type}`}>
                                    {msg.type === 'bot' && (
                                        <div className="message-avatar">
                                            <div className="content-avatar"><img src={chatIcon} alt="Bot" className="message-avatar-img" /></div>
                                        </div>
                                    )}
                                    <div className="message-content">
                                        {msg.type === 'bot' ? (
                                            <div className="bubble" dangerouslySetInnerHTML={renderMessageContent(msg.text)} />
                                        ) : (
                                            <div className="bubble">{msg.text}</div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="message-wrapper bot">
                                    <div className="message-avatar"><div className="content-avatar"><img src={chatIcon} alt="Typing" className="message-avatar-img" /></div></div>
                                    <div className="message-content"><div className="bubble typing-indicator"><span></span><span></span><span></span></div></div>
                                </div>
                            )}

                            <div className="quick-actions">
                                <button className="action-chip" onClick={() => handleQuickAction("Services")}>Services</button>
                                <button className="action-chip" onClick={() => handleQuickAction("Products")}>Products</button>
                            </div>
                        </div>

                        <div className="chat-footer">
                            <div className="input-container">
                                <input
                                    type="text"
                                    placeholder="Ask anything..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                                <button className="send-btn" onClick={() => handleSendMessage()} disabled={!inputValue.trim()}>
                                    ➤
                                </button>
                            </div>
                            <div className="powered-by">Powered by Lasak</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;