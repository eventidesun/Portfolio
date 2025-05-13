import React from 'react';
const skills = [{
  name: 'Game Design',
  level: 95
}, {
  name: 'Unity',
  level: 90
}, {
  name: 'Unreal Engine',
  level: 85
}, {
  name: 'C#',
  level: 88
}, {
  name: 'C++',
  level: 80
}, {
  name: '3D Modelling',
  level: 75
}, {
  name: 'Animation',
  level: 70
}, {
  name: 'Python',
  level: 95
}, {
  name: 'Java',
  level: 95
}, {
  name: 'Web Development',
  level: 90
}];
export function Skills() {
  return <section id="skills" className="py-20 bg-gray-900/70 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My technical skills for creating immersive game experiences, from design
            concepts to technical implementation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => <div key={index} className="group">
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-200">{skill.name}</span>
                <span className="text-purple-400">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden relative">
                <div className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full relative" style={{
              width: `${skill.level}%`
            }}>
                  <div className="absolute top-0 left-0 h-full w-full bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['Unity', 'Unreal Engine', 'Blender', 'Godot', 'Affinity Photo', 'RenPy', 'Git', 'JIRA'].map((tool, index) => <div key={index} className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-900/50 hover:border-purple-500/50 transition-colors text-center">
                {tool}
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}