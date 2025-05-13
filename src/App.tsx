import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';

export function App() {
    return (
        <div className="app-container relative min-h-screen w-full bg-gray-900 text-gray-100 overflow-x-hidden">
            <ParticleBackground />

            <div className="content-wrapper relative z-10 flex flex-col">
                <Header />

                <main className="main-content flex-1 scroll-smooth">
                    <Home />
                    <About />
                    <Projects />
                    <Skills />
                    <Contact />
                </main>

                <Footer />
            </div>
        </div>
    );
}
