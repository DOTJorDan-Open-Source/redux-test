"use client"; 

import { useSelector, useDispatch } from 'react-redux';
import { toggleViewMode } from '../../lib/features/uiSlice';

export default function ProjectsPage() {
  
  const viewMode = useSelector((state) => state.ui.viewMode);
  const dispatch = useDispatch();

  const myProjects = [
    { id: 1, name: 'Oqood', desc: 'Mobile application architecture and deployment' },
    { id: 2, name: 'University DB Project', desc: 'Data management system without a traditional database' },
    { id: 3, name: 'Portfolio', desc: 'Minimalist UI layout with Next.js and Redux' },
  ];

  return (
    <div className="p-8 space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Projects</h1>
        
        {/**/}
        <button 
          onClick={() => dispatch(toggleViewMode())}
          className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded transition"
        >
          Switch to {viewMode === 'grid' ? 'List' : 'Grid'} View
        </button>
      </div>

      {/*  Redux state */}
      <div className={viewMode === 'grid' ? "grid grid-cols-2 gap-6" : "space-y-4"}>
        {myProjects.map((proj) => (
          <div key={proj.id} className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-medium text-gray-900">{proj.name}</h2>
            <p className="text-gray-600 mt-2 leading-relaxed">{proj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}