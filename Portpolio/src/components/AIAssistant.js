import React, { useState, useEffect, useRef } from 'react';

const AIAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    // Add initial message
    setTimeout(() => {
      addMessage("Hello! I'm your AI assistant. Ask me anything!", false);
    }, 1000);
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (text, isUser) => {
    setMessages(prevMessages => [...prevMessages, { text, isUser }]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue.trim();
    addMessage(userMessage, true);
    setInputValue('');
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage })
      });
      
      const data = await response.json();
      addMessage(data.response, false);
    } catch (error) {
      console.error('Error calling GPT API:', error);
      addMessage("Sorry, I encountered an error. Please try again.", false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="page-section">
      <div className="section-content">
        <h2>AI Assistant</h2>
        <p>Ask me anything using the power of GPT!</p>
        
        <div className="chat-container">
          <div id="chat-messages" ref={chatMessagesRef}>
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.isUser ? 'user-message' : 'ai-message'}`}
              >
                {message.text}
              </div>
            ))}
            {isLoading && (
              <div className="message ai-message">Thinking...</div>
            )}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your question..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant; 