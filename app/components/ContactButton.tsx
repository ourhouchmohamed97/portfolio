"use client"
import React, { useState } from 'react';


export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('quick');
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showFormNotification, setShowFormNotification] = useState(false);


  const copyToClipboard = () => {
    navigator.clipboard.writeText('hello@gmail.com');
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 2000);
  };


  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowFormNotification(true);
    setTimeout(() => setShowFormNotification(false), 2000);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };


  return (
    <>
      <div className="flex items-center justify-center">
        <div className="text-center space-y-4">
          <button 
            onClick={() => setIsOpen(true)}
            className="group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-black/30 bg-black/20 py-[3px] pr-[3px] pl-2 font-medium text-base opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:border-white/10 dark:bg-white/10"
          >
            <span className="z-10 px-3 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
              Let's Connect
            </span>
            <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white"></span>
            <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-black p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5 dark:bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right text-white transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0 dark:text-black"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right -translate-x-5 absolute text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-black"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>


      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 dark:bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white dark:bg-black border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl max-w-lg w-full border animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative Bar */}
            <div className="flex justify-center pt-8 pb-10">
              <div className="w-32 h-1.5 rounded-full bg-gray-500 dark:via-gray-600"></div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-8 py-8">
              <a 
                href="https://github.com/ourhouchmohamed97/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 432 416"><path fill="currentColor" d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-ourhouch-616799293/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 432 432"><path fill="currentColor" d="M319 221.5q-8-10.5-30-10.5q-27 0-38 16t-11 45v146q0 5-3 8t-8 3h-76q-4 0-7.5-3t-3.5-8V148q0-4 3.5-7.5t7.5-3.5h74q4 0 6.5 2t3.5 6v5q1 2 1 7q28-27 76-27q53 0 83 27t30 79v182q0 5-3.5 8t-7.5 3h-78q-4 0-7.5-3t-3.5-8V254q0-22-8-32.5zM88 91.5Q73 107 51.5 107T15 91.5t-15-37T15 18T51.5 3T88 18t15 36.5t-15 37zm13 56.5v270q0 5-3.5 8t-7.5 3H14q-5 0-8-3t-3-8V148q0-4 3-7.5t8-3.5h76q4 0 7.5 3.5t3.5 7.5z"/></svg>
              </a>
              <a 
                href="https://www.instagram.com/ourhouch_mohamed/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0C8.74 0 8.333.015 7.053.072C5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053C.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384a5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913c.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071c1.17.055 1.805.249 2.227.415c.562.217.96.477 1.382.896c.419.42.679.819.896 1.381c.164.422.36 1.057.413 2.227c.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382a3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413c-1.274.057-1.649.07-4.859.07c-3.211 0-3.586-.015-4.859-.074c-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899a3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235c-.045-1.26-.061-1.649-.061-4.844c0-3.196.016-3.586.061-4.861c.061-1.17.255-1.814.42-2.234c.21-.57.479-.96.9-1.381c.419-.419.81-.689 1.379-.898c.42-.166 1.051-.361 2.221-.421c1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324a6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0a1.44 1.44 0 0 1 2.88 0z"/></svg>
              </a>
            </div>


            {/* Tabs */}
            <div className="flex gap-2 px-6 mb-4">
              <button
                onClick={() => setActiveTab('quick')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'quick' 
                    ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border border-gray-300 dark:border-white/20' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Quick Connect
              </button>
              <button
                onClick={() => setActiveTab('form')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'form' 
                    ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border border-gray-300 dark:border-white/20' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Fill a Form
              </button>
            </div>


            {/* Content */}
            <div className="px-6 pb-6">
              {activeTab === 'quick' && (
                <div className="space-y-4">
                  {/* Email Section with Gradient */}
                  <div className="text-center py-6">
                    <div className="inline-flex items-center justify-center gap-3 mb-3">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-full">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-gray-900 dark:text-white text-2xl font-semibold mb-1">Email</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-4"></div>
                    
                    {/* Email with Copy Button */}
                    <div className="bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 rounded-lg border px-4 py-4 max-w-sm mx-auto">
                      <div className="flex items-center justify-between gap-3">
                        <button
                          onClick={copyToClipboard}
                          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex-shrink-0"
                          title="Copy email"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                        <a 
                          href="mailto:hello@gmail.com"
                          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 text-lg font-medium transition-colors flex-1 text-center"
                        >
                          ourhouchmohamed97@gmail.com
                        </a>
                        <div className="w-5 flex-shrink-0"></div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">send me an email</p>
                    </div>
                  </div>


                  {/* Status Badge */}
                  <div className="bg-green-900/30 border border-green-600/50 rounded-lg px-4 py-3 text-center">
                    <span className="text-green-400 text-sm font-medium">
                      Currently available for new opportunities
                    </span>
                  </div>
                </div>
              )}


              {activeTab === 'form' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-50 dark:bg-white/5 border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your name"
                    />
                  </div>


                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2 pt-8">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-50 dark:bg-white/5 border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>


                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2 pt-8">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full bg-gray-50 dark:bg-white/5 border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>


                  {/* Submit Button */}
                  <div className="pt-8">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                  >
                    <span>Send Message</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                  </div>
                </form>
              )}
            </div>
          </div>


          {/* Copy Notification */}
          {showCopyNotification && (
            <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-top duration-300 z-[60]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Successfully copied my email!</span>
            </div>
          )}


          {/* Form Sent Notification */}
          {showFormNotification && (
            <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-top duration-300 z-[60]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Message sent successfully!</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
