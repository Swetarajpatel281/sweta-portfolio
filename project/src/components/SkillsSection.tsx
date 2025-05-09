import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setFilter } from '../store/skillsSlice';
import { Code, Database, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const dispatch = useDispatch();
  const { skills, filter } = useSelector((state: RootState) => state.skills);
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  const getIconComponent = (iconName: string) => {
    // This is a placeholder. In a real app, you'd import actual SVG icons
    // or use a library like react-icons
    switch (iconName) {
      case 'react':
        return <Code size={24} />;
      case 'node':
      case 'express':
      case 'mongodb':
      case 'postgresql':
      case 'python':
        return <Database size={24} />;
      default:
        return <Wrench size={24} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section 
      id="skills" 
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg">
            I've worked with a variety of technologies and tools throughout my career.
            Here are some of the key skills I've developed.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['all', 'frontend', 'backend', 'tools'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(setFilter(category as any))}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? darkMode 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-indigo-500 text-white'
                  : darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`flex flex-col items-center justify-center p-6 rounded-lg ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              } transition-colors shadow-md`}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${
                darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
              }`}>
                {getIconComponent(skill.icon)}
              </div>
              <h3 className="text-lg font-medium text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;