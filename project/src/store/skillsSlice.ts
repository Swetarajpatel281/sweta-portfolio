import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Skill } from '../types';
import { Code, Database, Wrench } from 'lucide-react';

interface SkillsState {
  skills: Skill[];
  filter: 'all' | 'frontend' | 'backend' | 'tools';
}

const initialState: SkillsState = {
  skills: [
    { name: 'React', icon: 'react', category: 'frontend' },
    { name: 'JavaScript', icon: 'javascript', category: 'frontend' },
    { name: 'TypeScript', icon: 'typescript', category: 'frontend' },
    { name: 'HTML5', icon: 'html', category: 'frontend' },
    { name: 'CSS3', icon: 'css', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend' },
    { name: 'Node.js', icon: 'node', category: 'backend' },
    { name: 'Express', icon: 'express', category: 'backend' },
    { name: 'MongoDB', icon: 'mongodb', category: 'backend' },
    { name: 'PostgreSQL', icon: 'postgresql', category: 'backend' },
    { name: 'Python', icon: 'python', category: 'backend' },
    { name: 'Git', icon: 'git', category: 'tools' },
    { name: 'Docker', icon: 'docker', category: 'tools' },
    { name: 'AWS', icon: 'aws', category: 'tools' },
    { name: 'Three.js', icon: 'threejs', category: 'frontend' },
  ],
  filter: 'all',
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<'all' | 'frontend' | 'backend' | 'tools'>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = skillsSlice.actions;
export default skillsSlice.reducer;