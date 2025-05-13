import { GamepadIcon, CodeIcon, PaletteIcon } from 'lucide-react';

export function About() {
  return (
      <section id="about" className="about-section relative py-20 bg-gray-900/70">
        <div className="about-content container relative z-10 mx-auto px-4">

          {/* Section Heading */}
          <div className="about-heading text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">
              About Me
            </span>
            </h2>
            <div className="divider mx-auto h-1 w-24 bg-purple-500" />
          </div>

          {/* Main Layout */}
          <div className="about-grid flex flex-col md:flex-row gap-8 items-center">

            {/* Left: My portrait */}
            <div className="profile-image md:w-1/2 relative">
              <div className="image-border absolute -top-4 -left-4 w-full h-full border-2 border-purple-500 rounded-lg" />
              <img
                  src="/assets/me.jpg"
                  alt="My picture"
                  className="rounded-lg w-full object-cover h-85 md:h-96"
              />
            </div>

            {/* Right: Description */}
            <div className="about-description md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Game Developer</h3>
              <p className="text-gray-300 mb-6">
                I'm a Computer Science and Math student at Western University with a strong
                interest in video game development and 3D modelling.
              </p>
              <p className="text-gray-300 mb-8">
                My current academic focus includes Topology and Homotopy Type Theory, which I'm exploring for their
                applications in advanced graphics and spatial reasoning in games.
              </p>

              {/* Skills Grid */}
              <div className="skills-grid grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: <GamepadIcon className="text-purple-400 mb-2" size={28} />, title: "Game Design", desc: "Creating engaging player experiences and mechanics" },
                  { icon: <CodeIcon className="text-purple-400 mb-2" size={28} />, title: "Development", desc: "Proficient in Unity, Unreal, and custom engines" },
                  { icon: <PaletteIcon className="text-purple-400 mb-2" size={28} />, title: "3D Modelling", desc: "Creating stunning assets and environments" }
                ].map(({ icon, title, desc }, i) => (
                    <div
                        key={i}
                        className="skill-card bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-purple-900/50 hover:border-purple-500/50 transition-colors"
                    >
                      {icon}
                      <h4 className="font-bold mb-1">{title}</h4>
                      <p className="text-sm text-gray-400">{desc}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
