import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ChatbotPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Chatbot
          </h1>
          
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            {/* Chatbox Header */}
            <div className="bg-blue-600 dark:bg-blue-700 text-white p-4">
              <h2 className="text-xl font-semibold">Portfolio Assistant</h2>
              <p className="text-sm text-blue-100">Ask me anything about this portfolio</p>
            </div>
            
            {/* Chat Messages Area - Placeholder */}
            <div className="h-96 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
              <div className="flex flex-col space-y-4">
                {/* Bot Message */}
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    B
                  </div>
                  <div className="ml-2 py-2 px-4 bg-blue-100 dark:bg-blue-900 rounded-lg max-w-xs sm:max-w-md">
                    <p className="text-gray-800 dark:text-gray-200">
                      Hello! I&apos;m the portfolio assistant. How can I help you today?
                    </p>
                  </div>
                </div>
                
                {/* User Message - Example */}
                <div className="flex items-start justify-end">
                  <div className="mr-2 py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-lg max-w-xs sm:max-w-md">
                    <p className="text-gray-800 dark:text-gray-200">
                      Can you tell me about the skills used in this portfolio?
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300 font-bold">
                    U
                  </div>
                </div>
                
                {/* Bot Response */}
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    B
                  </div>
                  <div className="ml-2 py-2 px-4 bg-blue-100 dark:bg-blue-900 rounded-lg max-w-xs sm:max-w-md">
                    <p className="text-gray-800 dark:text-gray-200">
                      This portfolio showcases skills in Next.js, TypeScript, React, Three.js, Tailwind CSS, and more. It features responsive design, dark mode, internationalization, and integration with GitHub APIs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chat Input - Placeholder */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <input 
                  type="text" 
                  placeholder="Type your message here..." 
                  className="flex-grow py-2 px-4 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  disabled
                />
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-r-md transition-colors disabled:opacity-50"
                  disabled
                  aria-label="Send message"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-center mt-2 text-gray-500 dark:text-gray-400">
                This is a placeholder chatbot UI. Functionality coming soon!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 