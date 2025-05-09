import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { FileDown } from 'lucide-react';

const ResumeSection = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Python', level: 65 },
  ];

  return (
    <section 
      id="resume" 
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Resume</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Here's a summary of my professional experience and skills.
            Download my full resume for more details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">Professional Experience</span>
              <div className={`h-px flex-grow ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
            </h3>

            <div className="space-y-8">
              {/* Experience Item 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">Full Stack Developer</h4>
                  <span className={`text-sm px-2 py-1 rounded ${
                    darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}>2024 - Present</span>
                </div>
                <h5 className={`text-lg mb-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Student</h5>
                <ul className={`list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                  <li>Developed and maintained multiple web applications using React, Node.js, and MongoDB</li>
                  <li>Implemented responsive designs and optimized application performance</li>
                  <li>Collaborated with cross-functional teams to deliver high-quality products</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </motion.div>

              {/* Experience Item 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold">Junior Developer</h4>
                  <span className={`text-sm px-2 py-1 rounded ${
                    darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}>2022 - 2026</span>
                </div>
                <h5 className={`text-lg mb-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Student</h5>
                <ul className={`list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                  <li>Assisted in developing frontend components using React and CSS frameworks</li>
                  <li>Participated in agile development processes and sprint planning</li>
                  <li>Fixed bugs and implemented new features for existing applications</li>
                  <li>Gained experience with version control systems and CI/CD pipelines</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Education & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Education */}
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">Education</span>
              <div className={`h-px flex-grow ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
            </h3>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-10`}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold">Bachelor of Technology</h4>
                <span className={`text-sm px-2 py-1 rounded ${
                  darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                }`}>2022 - 2026</span>
              </div>
              <h5 className={`text-lg mb-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                Acropolis Institute of Technology and Research
              </h5>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Graduated with distinction, specializing in web technologies and software development.
                Completed Projects like "AI-Powered Sign Language Recognition Systems".
              </p>
            </motion.div>

            {/* Skills */}
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">Core Skills</span>
              <div className={`h-px flex-grow ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
            </h3>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
            >
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                        className="h-full rounded-full bg-indigo-500"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <motion.a
             href="/Sweta-resume.pdf"
             download={true}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center px-6 py-3 rounded-full font-medium ${
              darkMode 
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                : 'bg-indigo-500 hover:bg-indigo-600 text-white'
            } transition-colors`}
          >
            <FileDown size={20} className="mr-2" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;