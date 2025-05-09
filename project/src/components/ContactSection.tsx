import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const ContactSection = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out to me using the form below or through my social media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${
                  darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                } mr-4`}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:swetarajpatel2803@gmail.com" 
                    className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  >
                    swetarajpatel2803@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${
                  darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                } mr-4`}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <a 
                    href="tel:+919876543210" 
                    className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${
                  darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                } mr-4`}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Location</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Indore, Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/sweta-raj-patel-705314259" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`p-3 rounded-full ${
                  darkMode ? 'bg-gray-700 text-indigo-400 hover:bg-gray-600' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                } transition-colors`}
              >
                <Linkedin size={24} />
              </motion.a>
              
              <motion.a
                href="https://github.com/swetarajpatel281" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`p-3 rounded-full ${
                  darkMode ? 'bg-gray-700 text-indigo-400 hover:bg-gray-600' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                } transition-colors`}
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                href="https://twitter.com/swetarajpatel28" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`p-3 rounded-full ${
                  darkMode ? 'bg-gray-700 text-indigo-400 hover:bg-gray-600' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                } transition-colors`}
              >
                <Twitter size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-lg ${
                  darkMode ? 'bg-green-800' : 'bg-green-100'
                } mb-6`}
              >
                <h4 className={`text-lg font-semibold mb-1 ${
                  darkMode ? 'text-white' : 'text-green-800'
                }`}>
                  Message Sent!
                </h4>
                <p className={darkMode ? 'text-green-200' : 'text-green-700'}>
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                        darkMode 
                          ? 'bg-gray-700 text-white focus:ring-indigo-500 border-gray-600' 
                          : 'bg-gray-100 text-gray-900 focus:ring-indigo-500 border-gray-300'
                      } border`}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                        darkMode 
                          ? 'bg-gray-700 text-white focus:ring-indigo-500 border-gray-600' 
                          : 'bg-gray-100 text-gray-900 focus:ring-indigo-500 border-gray-300'
                      } border`}
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="subject" 
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                      darkMode 
                        ? 'bg-gray-700 text-white focus:ring-indigo-500 border-gray-600' 
                        : 'bg-gray-100 text-gray-900 focus:ring-indigo-500 border-gray-300'
                    } border`}
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                      darkMode 
                        ? 'bg-gray-700 text-white focus:ring-indigo-500 border-gray-600' 
                        : 'bg-gray-100 text-gray-900 focus:ring-indigo-500 border-gray-300'
                    } border`}
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium ${
                    darkMode 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                      : 'bg-indigo-500 hover:bg-indigo-600 text-white'
                  } transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;