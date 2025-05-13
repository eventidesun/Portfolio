import {MailIcon, PhoneIcon, MapPinIcon, GithubIcon, LinkedinIcon, InstagramIcon} from 'lucide-react';

export function Contact() {
  return <section id="contact" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-purple-900/10 to-gray-900"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interested in collaborating on a game project or hiring me for your
            team? Let's connect and discuss how we can create something amazing
            together.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
          <div className="md:w-1/2 bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-purple-900/50">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            <p className="mb-6 text-gray-300 text-sm bg-purple-900/20 border border-purple-700/30 p-4 rounded-md">
              This section is still under construction, but feel free to reach out via email or connect with me on
              LinkedIn in the meantime!
            </p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input type="text" id="name"
                       className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                       placeholder="Your name"/>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input type="email" id="email"
                       className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                       placeholder="your.email@example.com"/>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input type="text" id="subject"
                       className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                       placeholder="What is this regarding?"/>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea id="message" rows={5}
                          className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                          placeholder="Your message here..."/>
              </div>
              <button type="submit"
                      className="w-full py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-md transition-colors text-lg font-medium">
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-purple-900/50 mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
              <div className="flex items-start">
                  <MailIcon className="text-purple-400 mr-4 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">
                      gudimellavaishnavi@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="text-purple-400 mr-4 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-300">+1 (226) 236-6312</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="text-purple-400 mr-4 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-300">London, ON, Canada</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-purple-900/50">
              <h3 className="text-xl font-bold mb-6">Connect</h3>
              <div className="flex gap-4">
                <a href="https://github.com/eventidesun" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-purple-700 rounded-full transition-colors">
                  <GithubIcon size={24} />
                </a>
                <a href="https://www.instagram.com/vaneeshnavaa/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-purple-700 rounded-full transition-colors">
                  <InstagramIcon size={24} />
                </a>
                <a href="https://www.linkedin.com/in/vaishnavi-gudimella/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-purple-700 rounded-full transition-colors">
                  <LinkedinIcon size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}