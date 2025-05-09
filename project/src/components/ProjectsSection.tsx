import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setFilter } from '../store/projectsSlice';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const dispatch = useDispatch();
  const { projects, filter } = useSelector((state: RootState) => state.projects);
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Get all unique technologies from projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  // Filter projects based on selected technology
  const filteredProjects = filter
    ? projects.filter(project => project.technologies.includes(filter))
    : projects;

  return (
    <section 
      id="projects" 
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Here are some of the projects I've worked on. Each project represents different
            challenges and solutions I've implemented.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch(setFilter(null))}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === null
                ? darkMode 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-indigo-500 text-white'
                : darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </motion.button>
          
          {allTechnologies.map((tech) => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(setFilter(tech))}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tech
                  ? darkMode 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-indigo-500 text-white'
                  : darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;