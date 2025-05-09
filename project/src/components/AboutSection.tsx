import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const AboutSection = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const timeline = [
    {
      id: 'education',
      title: 'Bachelor of Technology',
      date: '2022 - 2026',
      description: 'Graduated with distinction from Acropolis Institute of Technology and Research, Indore.',
      icon: <GraduationCap size={24} />,
    },
    {
      id: 'job1',
      title: 'Junior Developer',
      date: '2020 - 2021',
      description: 'Started my career in Technology, working on web applications using React and Node.js.',
      icon: <Briefcase size={24} />,
    },
    {
      id: 'job2',
      title: 'Full Stack Developer',
      date: '2023 - Present',
      description: 'Currently working as a full stack developer, building scalable applications with modern technologies.',
      icon: <Briefcase size={24} />,
    },
    {
  id: 'award',
  title: 'Hackathon Experiences',
  date: '2024–Present',
  description: [
    'Participated in SKITM Hackathon (2024) as a Full Stack Developer.',
    'Participated in HACKTU 6.0 Hackathon (2025) as a Backend Developer.'
  ],
  icon: <Award size={24} />,
}

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section 
      id="about" 
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg">
            I'm a passionate Full Stack Developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create seamless
            digital experiences that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="mb-4">
              I'm Sweta Raj Patel, a Full Stack Developer based in Indore, India. I have a passion for creating
              elegant, efficient, and user-friendly applications that provide real value.
            </p>
            <p className="mb-4">
              With over 3 years of professional experience, I've worked on various projects ranging from e-commerce
              platforms to data visualization dashboards and AI-powered applications.
            </p>
           
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-3">My Interests</h4>
              <div className="flex flex-wrap gap-3">
                {['Web Development', 'Machine Learning', 'UI/UX Design', 'Open Source',].map((interest, index) => (
                  <motion.span 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode 
                        ? 'bg-gray-600 text-white' 
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-500"></div>
            
            {timeline.map((item, index) => (
              <motion.div 
                key={item.id}
                variants={itemVariants}
                className="mb-8 relative pl-12"
              >
                <div className={`absolute left-0 p-2 rounded-full ${
                  darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-white text-indigo-600'
                }`}>
                  {item.icon}
                </div>
                
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      {item.date}
                    </span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;