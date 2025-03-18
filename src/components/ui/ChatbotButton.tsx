'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const ChatbotButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      content: 'Hello, I am the Architect. I created the Matrix. I have been waiting for you.' 
    },
    { 
      type: 'bot', 
      content: 'Ask me anything about this portfolio, or perhaps... about the nature of your reality.' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Toggle chat window
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Matrix code rain effect for the button
  const [codeChars, setCodeChars] = useState<string[]>([]);
  
  useEffect(() => {
    // Generate random Matrix code characters
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$+-*/=%\\&|<>[]{}';
    const randomChars = Array.from({length: 15}, () => chars[Math.floor(Math.random() * chars.length)]);
    setCodeChars(randomChars);
    
    // Periodically update the characters
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * randomChars.length);
      randomChars[index] = chars[Math.floor(Math.random() * chars.length)];
      setCodeChars([...randomChars]);
    }, 300);
    
    return () => clearInterval(interval);
  }, []);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages([...messages, { type: 'user', content: inputValue }]);
    
    // Clear input
    setInputValue('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Matrix-themed responses
    const matrixResponses = [
      "The Matrix is everywhere. It is all around us.",
      "Unfortunately, no one can be told what the Matrix is. You have to see it for yourself.",
      "You take the blue pill, the story ends. You take the red pill, you stay in wonderland, and I show you how deep the rabbit hole goes.",
      "What you know you can&apos;t explain, but you feel it. You&apos;ve felt it your entire life.",
      "I can only show you the door. You&apos;re the one that has to walk through it.",
      "This portfolio is built with React, TypeScript, Three.js, and Tailwind CSS.",
      "Reality is simply electrical signals interpreted by your brain.",
      "There is a difference between knowing the path and walking the path.",
      "Do you believe in fate, Neo?",
      "Welcome to the real world."
    ];
    
    // Simulate delayed response
    setTimeout(() => {
      const randomResponse = matrixResponses[Math.floor(Math.random() * matrixResponses.length)];
      setMessages(prev => [...prev, { type: 'bot', content: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chatbot Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: 'spring', 
          stiffness: 260, 
          damping: 20,
          delay: 1
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -5, 5, -3, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={toggleChat}
          className="relative flex items-center justify-center w-16 h-16 bg-matrix-black border-2 border-matrix-green text-matrix-green rounded-full shadow-matrix hover:shadow-matrix-lg transition-all duration-300 focus:outline-none overflow-hidden"
          aria-label="Toggle Matrix Terminal"
        >
          <div className="absolute inset-0 overflow-hidden opacity-30">
            {codeChars.map((char, i) => (
              <motion.span 
                key={i}
                className="absolute text-xs"
                initial={{ y: -20, opacity: 0 }}
                animate={{ 
                  y: [null, 20], 
                  opacity: [0, 1, 0],
                  left: `${(i / codeChars.length) * 100}%` 
                }}
                transition={{ 
                  duration: 1 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "linear"
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="w-7 h-7 relative z-10"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 10h.01" />
            <path d="M12 10h.01" />
            <path d="M16 10h.01" />
          </svg>
          
          {/* Pulse effect */}
          <motion.div 
            className="absolute inset-0 rounded-full"
            animate={{ 
              boxShadow: ['0 0 0 0 rgba(0, 255, 65, 0.4)', '0 0 0 10px rgba(0, 255, 65, 0)'],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              repeatType: 'loop',
            }}
          />
        </button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-80 md:w-96 bg-matrix-darkest border border-matrix-green shadow-matrix rounded-sm overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Chat Header */}
            <div className="bg-matrix-darker border-b border-matrix-green text-matrix-green p-4 flex justify-between items-center">
              <div>
                <h3 className="font-matrix text-shadow-matrix">Matrix Terminal</h3>
                <p className="text-xs text-matrix-green-faded">The Matrix has you...</p>
              </div>
              <button 
                onClick={toggleChat}
                className="text-matrix-green hover:text-matrix-green-light focus:outline-none"
                aria-label="Close chat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Matrix Code Rain Effect Top */}
            <div className="h-6 relative overflow-hidden bg-matrix-black">
              <div className="absolute inset-0">
                {Array.from({length: 20}).map((_, i) => (
                  <motion.span 
                    key={i}
                    className="absolute text-xs text-matrix-green"
                    style={{ left: `${i * 5}%` }}
                    initial={{ y: -20 }}
                    animate={{ y: 20 }}
                    transition={{ 
                      duration: 1 + Math.random(),
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "linear"
                    }}
                  >
                    {String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="h-80 p-4 overflow-y-auto bg-matrix-black font-mono">
              <div className="flex flex-col space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex items-start ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.type === 'bot' && (
                      <div className="w-8 h-8 rounded-full bg-matrix-dark border border-matrix-green flex items-center justify-center text-matrix-green font-bold shrink-0 mr-2">
                        M
                      </div>
                    )}
                    
                    <div className={`py-2 px-4 max-w-xs ${msg.type === 'user' 
                      ? 'bg-matrix-darker border border-matrix-green-dark text-matrix-green ml-2' 
                      : 'bg-matrix-terminal border border-matrix-green text-matrix-green'}`}>
                      <p className="text-sm">
                        {msg.content}
                      </p>
                    </div>
                    
                    {msg.type === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-matrix-darker border border-matrix-green-dark flex items-center justify-center text-matrix-green font-bold shrink-0 ml-2">
                        N
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-matrix-dark border border-matrix-green flex items-center justify-center text-matrix-green font-bold shrink-0 mr-2">
                      M
                    </div>
                    <div className="py-2 px-4 bg-matrix-terminal border border-matrix-green">
                      <div className="flex space-x-1">
                        <motion.div 
                          className="w-1 h-1 bg-matrix-green rounded-full"
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.div 
                          className="w-1 h-1 bg-matrix-green rounded-full"
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                        />
                        <motion.div 
                          className="w-1 h-1 bg-matrix-green rounded-full"
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-matrix-green bg-matrix-black">
              <div className="flex items-center">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter the Matrix..." 
                  className="flex-grow py-2 px-4 bg-matrix-terminal border border-matrix-green text-matrix-green placeholder-matrix-green-faded rounded-none focus:outline-none focus:ring-1 focus:ring-matrix-green focus:border-matrix-green text-sm"
                />
                <button 
                  type="submit"
                  className="bg-matrix-darker hover:bg-matrix-dark border border-matrix-green text-matrix-green hover:text-matrix-green-light py-2 px-4 transition-colors"
                  aria-label="Send message"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-center mt-2 text-matrix-green-faded">
                [System: The Matrix simulation is active]
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotButton; 