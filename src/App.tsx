import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronUp, ExternalLink, Mail, Phone, User, FileText } from 'lucide-react';
import pic from './pic.jpeg';
import pro from './pro.jpeg';
import chat from './chat.png';
import chatImg from './chat.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + 150;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'HTML,CSS,JS', percentage: 80, color: '#E34F26', icon: '🌐' },
    { name: 'Linux,OS', percentage: 90, color: '#1572B6', icon: '💻' },
    { name: 'Git & GitHub', percentage: 80, color: '#F7DF1E', icon: '🔶' },
    { name: 'Python', percentage: 70, color: '#3776AB', icon: '🐍' },
    { name: 'Problem Solving', percentage: 60, color: '#0EA5E9', icon: '🧩' }
  ];

  const profiles = [
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/amrutha2006',
      icon: '👩‍💻',
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/jandyalaamrutha/',
      icon: '💻',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amrutha-jandyala-056a132a1/',
      icon: '💼',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Amruthajandyala',
      icon: '🚀',
      color: 'from-gray-400 to-gray-600'
    }
  ];

  const projects = [
    {
      title: 'Shell with C',
      description : "To design and implement a custom Linux Shell in C that demonstrates core operating system concepts such as command parsing, process creation (fork/exec), I/O redirection, and piping. This project highlights hands-on experience with system calls, process management, and user-space programming, bridging the gap between OS theory and practical implementation.",
      image: chatImg,
      link: 'https://github.com/Amruthajandyala/os-project',
      tech: ['Shell', 'C', 'Commands']
    },
    {
      title: 'Emoji Generator',
      description: 'A dynamic Emoji Generator built using HTML, CSS, and JavaScript! An interactive tool that allows users to generate a variety of emojis by simply clicking a button.',
      image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: 'https://github.com/Amruthajandyala/EMOJI-GENERATOR',
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Interactive Quiz',
      description: 'An interactive quiz designed to enhance user engagement and provide a fun learning experience! Dynamically calculates the score and percentage based on user responses.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '#',
      tech: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-700' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-cyan-400">Portfolio</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 hover:text-cyan-400 ${
                    activeSection === item ? 'text-cyan-400' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 bg-slate-800 rounded-lg mt-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-2 capitalize transition-colors duration-300 hover:text-cyan-400 hover:bg-slate-700 ${
                    activeSection === item ? 'text-cyan-400 bg-slate-700' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">Hello, It's Me</h3>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Amrutha Jandyala</h1>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                And I'm a <span className="text-cyan-400">Software Engineer</span>
              </h3>
              
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50"
              >
                <FileText size={20} />
                Resume
              </a>
            </div>
            
            <div className="flex-1 order-1 lg:order-2 max-w-md">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-400/20">
                  <img
                    src={pro}
                    alt="Amrutha Jandyala"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="relative max-w-md mx-auto">
                  <img
                  src={pic}
                  alt="About me"
                  className="w-full h-full object-cover"
                  />
                </div>
              </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-cyan-400">Me</span>
              </h2>
              <h3 className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-6">Software Engineer</h3>
              <p className="text-lg leading-relaxed mb-8 text-gray-300">
               I’m a multi-skilled IT professional with aspiration in  Frontend development, DevOps, and Networking. I build responsive UIs, automate deployments, manage scalable infrastructure, and ensure secure, high-performance networks using tools like AWS, React, Docker, Kubernetes, and core networking protocols. I bridge the gap between code, infrastructure, and connectivity.  </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50"
              >
                <Mail size={20} />
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Technical Skills */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                My <span className="text-cyan-400">Skills</span>
              </h2>
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-lg font-semibold">{skill.name}</span>
                      <span className="ml-auto text-cyan-400 font-bold">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.percentage}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coding Profiles */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                My <span className="text-cyan-400">Profiles</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {profiles.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className={`bg-gradient-to-br ${profile.color} p-6 rounded-xl transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                      <div className="text-center text-white">
                        <div className="text-4xl mb-3">{profile.icon}</div>
                        <h3 className="text-xl font-bold">{profile.name}</h3>
                        <ExternalLink className="mx-auto mt-2 group-hover:scale-110 transition-transform" size={20} />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Latest <span className="text-cyan-400">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Contact <span className="text-cyan-400">Me!</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="access_key" value="10925e9c-6fa6-433c-8a1c-2f0b54ecbe31" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Email Subject"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                />
              </div>
              
              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
              ></textarea>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2023 Amrutha Jandyala. All rights reserved.
            </p>
            <button
              onClick={() => scrollToSection('home')}
              className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 p-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50"
            >
              <ChevronUp size={24} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;