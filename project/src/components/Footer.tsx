import { useSelector } from 'react-redux';
import { RootState } from '../store';
// import { Heart } from 'lucide-react';

const Footer = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Sweta Raj Patel</h3>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Full Stack Developer
            </p>
          </div> */}
{/*           
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
              href="#home" 
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
            >
              About
            </a>
            <a 
              href="#projects" 
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
            >
              Contact
            </a>
          </div> */}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              © {currentYear} Sweta Raj Patel. All rights reserved.
            </p>
            
            {/* <p className="flex items-center mt-4 md:mt-0">
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Made with</span>
              <Heart size={16} className="mx-1 text-red-500" />
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>using React, Three.js & Framer Motion</span>
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;