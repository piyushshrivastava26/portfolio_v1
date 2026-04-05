import { ArrowUpRight, ExternalLink  } from 'lucide-react';
import GithubIcon from '../components/common/GithubIcon';


const projectsData = [
    // {
    //     id: 1,
    //     title: 'IoT Network Traffic Anomaly Detection',
    //     description: 'Hardware and software integration to monitor network traffic in real time and detect anomalies using machine learning models.',
    //     techStack: ['Python', 'ESP32', 'Machine Learning', 'C++'],
    //     image: '/api/placeholder/600/400',
    //     liveLink: '#',
    //     githubLink: '#',
    //     glowColor: 'green'
    // },
    {
        id: 2,
        title: 'POS Master: Restaurant Management System',
        description: 'A full-stack restaurant POS system built to handle orders, tables, payments and invoice printing exclusively managed by the owner.',
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT Auth', ' Redux Toolkit', 'Tanstack Query', 'Payment Integration'],
        image: 'https://github.com/piyushshrivastava26/POS-Master/raw/main/client/public/preview_2.png',
        liveLink: 'https://pos-master-client.onrender.com/',
        githubLink: 'https://github.com/piyushshrivastava26/POS-Master',
    },
    {
        id: 3,
        title: 'OrganizeIt',
        description: 'A full stack productivity application allowing users to seamlessly organize tasks, set priorities, and track progress.',
        techStack: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Tailwind CSS', 'JWT Auth'],
        image: 'https://github.com/DigitalTrailblazer/OrganizeIt-/raw/main/frontend/src/assets/dashboard.png',
        liveLink: 'https://organizeit-frontend-7r3t.onrender.com/',
        githubLink: 'https://github.com/piyushshrivastava26/OrganizeItf',
    },
    // {
    //     id: 4,
    //     title: 'Railway Interlocking Simulation',
    //     description: 'Simulated a safe and efficient railway interlocking system to prevent conflicting train movements on shared tracks.',
    //     techStack: ['MATLAB', 'Simulink', 'Control Systems'],
    //     image: '/api/placeholder/600/400',
    //     liveLink: '#',
    //     githubLink: '#',
    //     glowColor: 'orange'
    // }
]

const Projects = () => {


    return (
        <section id="projects" className="py-24 px-6 md:px-20 lg:px-40 bg-black text-white font-mono">
            
            <div className="flex items-center gap-4 mb-8 md:mb-14">
                <h2 className="text-3xl font-bold text-green-500">
                    <span className="text-gray-500 font-light">03.</span> Project's
                </h2>
                <div className="h-[1px] bg-green-500/20 flex-1"></div>
            </div>
            
            <div className="max-w-6xl mx-auto w-full">

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="group flex flex-col bg-zinc-900/30 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                        >
                            {/* GIF Container */}
                            <div className="relative w-full aspect-video bg-zinc-800 overflow-hidden border-b border-white/10">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                
                            </div>

                            {/* Card Content */}
                            <div className="p-2 md:p-4 flex flex-col flex-1">

                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors line-clamp-1">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-xs md:text-sm mb-2 md:mb-6 line-clamp-2 md:leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                
                                <div className="flex flex-wrap gap-1 mb-2 md:mb-6">
                                    
                                    {project.techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Live link & GIthub */}
                                <div className="flex items-center justify-between gap-4 mt-auto pt-2 md:pt-4 border-t border-white/10">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-xs md:text-sm font-bold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition-colors active:scale-95"
                                    >
                                        <ExternalLink size={16} /> Go Live 
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-xs md:text-sm font-bold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition-colors active:scale-95"
                                    >
                                        <GithubIcon size={17}/> Github 
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Explore More on GitHub */}
            <div className="mt-14 md:mt-20 flex flex-col items-center justify-center gap-2">

                <a
                    href="https://github.com/piyushshrivastava26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-3 px-5 py-2 bg-zinc-900/50 border border-white/10 rounded-full text-white font-bold transition-all duration-300 hover:border-white/30 hover:bg-zinc-800 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] active:scale-95"
                >
                    <GithubIcon size={20} />

                    <span className="text-sm md:text-lg tracking-tight">Explore More on GitHub</span>

                    <ArrowUpRight size={18} />
                </a>
            </div>
        </section>
    )
}

export default Projects;