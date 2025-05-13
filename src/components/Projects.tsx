import React, { useState } from 'react';
import { ExternalLinkIcon, ChevronRightIcon, ChevronLeftIcon } from 'lucide-react';
const projects = [{
  id: 1,
  title: 'Minesweeper',
  description: 'A simple version of minesweeper I made to practice C++. The game follows the classic Minesweeper rules, where the player must uncover all the safe cells without clicking on a mine.',
  image: '/assets/minesweeper.png',
  tags: ['C++', 'Qt'],
  link: 'https://github.com/eventidesun/Minesweeper',
  target: '_blank'
}, {
  id: 2,
  title: "Word Rain",
  description: 'Words fall from the top of the screen and you have to type them before they reach the bottom to earn points. Miss three words and it\'s game over! You can then choose to restart and collect points again!',
  image: '/assets/word-rain.png',
  tags: ['HTML', 'CSS', 'Vanilla Javascript'],
  link: 'https://github.com/eventidesun/Word-Rain',
  target: '_blank'
}, {
  id: 3,
  title: 'Dice Rolling Simulator',
  description: 'A simple dice rolling simulator made for fun, and practice in HTML, CSS, and Javascript.',
  image: '/assets/dice-rolling-simulator.png',
  tags: ['HTML', 'CSS', 'Vanilla Javascript'],
  link: 'https://github.com/eventidesun/Dice-Rolling-Simulator',
  target: '_blank'
}

//   {
//   id: 4,
//   title: 'Ancient Spirits',
//   description: 'Puzzle adventure game where players control elemental spirits to solve ancient mysteries.',
//   image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
//   tags: ['Custom Engine', 'OpenGL', 'Puzzle Design'],
//   link: '#'
// }
];
export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextProject = () => {
    setCurrentIndex(prevIndex => prevIndex === projects.length - 1 ? 0 : prevIndex + 1);
  };
  const prevProject = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? projects.length - 1 : prevIndex - 1);
  };
  return <section id="projects" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my latest game development projects, featuring immersive
            worlds, innovative mechanics, and captivating storytelling.
          </p>
        </div>
        <div className="relative px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => <div key={project.id} className={`transform transition-all duration-500 ${index >= currentIndex && index < currentIndex + 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 hidden md:block'}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-900/50 hover:border-purple-500/50 transition-all group">
                  <div className="relative h-60 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => <span key={i} className="px-3 py-1 bg-purple-900/40 text-purple-200 rounded-full text-xs">
                          {tag}
                        </span>)}
                    </div>
                    <a href={project.link} className="inline-flex items-center text-purple-400 hover:text-purple-300">
                      View Project{' '}
                      <ExternalLinkIcon size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>)}
          </div>
          <div className="flex justify-center mt-10">
            <button onClick={prevProject} className="mx-2 p-2 rounded-full bg-gray-800 hover:bg-purple-900/50 transition-colors" aria-label="Previous projects">
              <ChevronLeftIcon size={24} />
            </button>
            {projects.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2.5 h-2.5 mx-1 rounded-full transition-colors ${index === currentIndex ? 'bg-purple-500' : 'bg-gray-600 hover:bg-gray-400'}`} aria-label={`Go to project ${index + 1}`} />)}
            <button onClick={nextProject} className="mx-2 p-2 rounded-full bg-gray-800 hover:bg-purple-900/50 transition-colors" aria-label="Next projects">
              <ChevronRightIcon size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>;
}