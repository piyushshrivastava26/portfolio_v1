import { Terminal, Database, Cpu, Wrench, Wallpaper } from 'lucide-react';


const Skills = () => {
    
    
    return (
        <section id="skills" className="py-24 px-6 md:px-20 lg:px-40 bg-black text-white font-mono">

            {/* 02. Tech Arena */}
            <div className="flex items-center gap-4 mb-14">
                <h2 className="text-3xl font-bold text-green-500">
                    <span className="text-gray-500 font-light">02.</span> Tech Arsenal
                </h2>
                <div className="h-[1px] bg-green-500/20 flex-1"></div>
            </div>


            <div className="max-w-6xl mx-auto w-full">

                {/* Skills Grid */}
                <div className="md:grid-cols-2 gap-6">

                    {/* Languages */}
                    <div className="mb-10 group p-6 bg-zinc-900/30 border border-white/10 rounded-xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] relative">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full group-hover:bg-purple-500/20 transition-all"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                                <Terminal className="text-purple-400" size={24} />
                                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Programming Languages</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-md text-sm hover:bg-purple-500/20 cursor-default">C</span>
                                <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-md text-sm hover:bg-purple-500/20 cursor-default">C++ (DSA)</span>
                                <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-md text-sm hover:bg-purple-500/20 cursor-default">Python</span>
                                <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-md text-sm hover:bg-purple-500/20 cursor-default">JavaScript</span>
                                <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-md text-sm hover:bg-purple-500/20 cursor-default">TypeScript</span>
                            </div>
                        </div>
                    </div>

                    {/* Frontend */}
                    <div className="mb-10 group p-6 bg-zinc-900/30 border border-white/10 rounded-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] relative">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-all"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                                <Wallpaper className="text-blue-400" size={24} />
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Frontend Development</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">HTML5</span>
                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">CSS3</span>
                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">Javascript(ES6+) | DOM Manipulation</span>
                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">React.js</span>
                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">React Redux</span>
                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">React Toolkit</span>
                                {/* <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">Next.js</span> */}
                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">Tailwind CSS</span>
                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">GSAP</span>
                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">Framer Motion</span>
                            </div>
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="mb-10 group p-6 bg-zinc-900/30 border border-white/10 rounded-xl transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] relative">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/10 blur-3xl rounded-full group-hover:bg-green-500/20 transition-all"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                                <Database className="text-green-400" size={24} />
                                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">Backend Development</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">Node.js</span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">Express.js</span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">RESTful APIs</span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">NoSQL (MongoDB)</span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">SQL (PostgreSQL)</span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">ORM (Prisma)</span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">Redis</span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">JWT Auth</span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">OAuth</span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">socket.io</span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">WebRTC</span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">gPRC</span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">RestAPI </span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">GraphQL </span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">Docker</span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">Nginx</span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">Amazon Web Services (S3, EC2)</span>
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm hover:bg-green-500/20 cursor-default">PM2 Process Manager</span>
                            </div>
                        </div>
                    </div>

                    {/* Embedded & IoT */}
                    <div className="mb-10 group p-6 bg-zinc-900/30 border border-white/10 rounded-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] relative">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-all"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                                <Cpu className="text-blue-400" size={24} />
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Embedded & IoT</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">Linux | Ubuntu</span>
                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">Shell Scripting</span>
                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">Arduino UNO</span>
                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">8086 Microprocessor</span>
                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">8051 Microcontroller</span>
                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">ESP32 Microprocessor</span>
                                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-md text-sm hover:bg-blue-500/20 cursor-default">MATLAB | Simulink</span>
                            </div>
                        </div>
                    </div>

                    {/* Tools & Environment */}
                    <div className="mb-10 group p-6 bg-zinc-900/30 border border-white/10 rounded-xl transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] relative">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full group-hover:bg-orange-500/20 transition-all"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                                <Wrench className="text-orange-400" size={24} />
                                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">Tools & OS</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-md text-sm hover:bg-orange-500/20 cursor-default">VS Code </span>
                                {/* <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-md text-sm hover:bg-orange-500/20 cursor-default">Vim</span> */}
                                <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-md text-sm hover:bg-orange-500/20 cursor-default">Git | GitHub</span>
                                <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-md text-sm hover:bg-orange-500/20 cursor-default">Postman | Bruno</span>
                                <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-md text-sm hover:bg-orange-500/20 cursor-default">Arduino IDE</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;