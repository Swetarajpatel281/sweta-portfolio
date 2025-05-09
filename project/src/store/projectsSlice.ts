import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Project } from '../types';

interface ProjectsState {
  projects: Project[];
  filter: string | null;
}

const initialState: ProjectsState = {
  projects: [
    {
      id: '1',
      title: 'Sign Language Converter',
      description: 'An application that converts sign language gestures to text using machine learning and computer vision.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'React'],
      image: 'https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      github: 'https://github.com/swetarajpatel/sign-language-converter',
    },
    {
      id: '2',
      title: 'E-Learning Platform',
      description: 'A comprehensive e-learning platform with course management, video streaming, and interactive quizzes.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS'],
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://e-learning-platform.swetarajpatel.com',
      github: 'https://github.com/swetarajpatel/e-learning-platform',
    },
    {
      id: '3',
      title: 'Smart Home Dashboard',
      description: 'An IoT dashboard for monitoring and controlling smart home devices with real-time data visualization.',
      technologies: ['React', 'Node.js', 'Socket.io', 'Chart.js', 'MQTT'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      github: 'https://github.com/swetarajpatel/smart-home-dashboard',
    },
  ],
  filter: null,
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string | null>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = projectsSlice.actions;
export default projectsSlice.reducer;