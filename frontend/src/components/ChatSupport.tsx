import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

interface QuickPrompt {
  id: string;
  text: string;
}

interface BotResponse {
  response: string;
  category: string;
  confidence: number;
  status: string;
}

export const FloatingChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! 👋 I\'m LUPP Bot. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showPrompts, setShowPrompts] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_URL || ' http://10.12.115.211:1500';

  const quickPrompts: QuickPrompt[] = [
    { id: '1', text: 'How do I get started?' },
    { id: '2', text: 'What are your fees?' },
    { id: '3', text: 'How do I make a payment?' },
    { id: '4', text: 'Is it safe?' },
  ];

  const fetchBotResponse = async (userInput: string): Promise<BotResponse | null> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch bot response');
      }

      const data: BotResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching bot response:', error);
      return null;
    }
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setShowPrompts(false);
    setIsLoading(true);

    // Fetch bot response from API
    const botResponse = await fetchBotResponse(text);

    if (botResponse) {
      setTimeout(() => {
        const botMessage: Message = {
          id: Date.now().toString(),
          text: botResponse.response,
          sender: 'bot',
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, 500);
    } else {
      // Fallback response if API fails
      setTimeout(() => {
        const botMessage: Message = {
          id: Date.now().toString(),
          text: 'Sorry, I\'m having trouble connecting to the server. Please try again later or contact our support team at support@lupp.live',
          sender: 'bot',
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, 500);
    }
  };

  const handlePromptClick = (promptText: string) => {
    handleSendMessage(promptText);
  };

  return (
    <>
      {/* Floating Button - Hidden on Mobile when chat is open */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-6 right-6 z-40 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white p-4 rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center group hover:-translate-y-1"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold">1</span>
        </button>
      )}

      {/* Close Button Overlay - Always available on all screens */}
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="fixed top-6 right-6 z-50 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white p-2 rounded-lg transition-colors duration-200 md:hidden"
          aria-label="Close chat"
        >
          <X className="w-6 h-6" />
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed md:bottom-24 md:right-6 md:w-96 md:border border-slate-200 dark:border-slate-800 md:rounded-2xl md:max-h-150 md:animate-in md:fade-in md:slide-in-from-bottom-4 inset-0 md:inset-auto z-40 w-full h-full md:h-auto bg-white dark:bg-slate-900 shadow-2xl overflow-hidden flex flex-col duration-300">
          {/* Header */}
          <div className="bg-linear-to-r from-cyan-500 to-blue-600 p-5 text-white flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">LUPP Bot</h3>
              <p className="text-sm text-cyan-100">Always here to help</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hidden md:block text-white hover:bg-cyan-600/50 p-2 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-global-bg-primary">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-br-none'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <span className={`text-xs mt-1 block ${msg.sender === 'user' ? 'text-cyan-100' : 'text-slate-500 dark:text-slate-400'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-4 py-3 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Prompts */}
            {showPrompts && messages.length <= 1 && (
              <div className="mt-6 space-y-3">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">Quick prompts</p>
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt.id}
                    onClick={() => handlePromptClick(prompt.text)}
                    className="w-full text-left text-sm bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-200 p-3 rounded-lg transition-colors duration-200 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 dark:hover:border-cyan-500/50"
                  >
                    {prompt.text}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !isLoading) {
                    handleSendMessage(inputValue);
                  }
                }}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-slate-200 dark:border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                disabled={isLoading || !inputValue.trim()}
                className="bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white p-2 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
        }
        .animate-bounce {
          animation: bounce 1.4s infinite;
        }
        .delay-100 {
          animation-delay: 0.2s;
        }
        .delay-200 {
          animation-delay: 0.4s;
        }
      `}</style>
    </>
  );
};

export default FloatingChatWidget;