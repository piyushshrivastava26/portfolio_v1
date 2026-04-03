import { GraduationCap } from 'lucide-react';

const About = () => {
    
    
    return (
        <section id="about" className="py-24 px-6 md:px-20 lg:px-40 bg-black text-white font-mono">

            <div className="flex items-center gap-4 mb-16">
                
                <h2 className="text-3xl font-bold text-green-500">
                    <span className="text-gray-500 font-light">01.</span> My Journey
                </h2>
                <div className="h-[1px] bg-green-500/20 flex-1"></div>
            </div>

            {/* Journey */}
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-24">

                <div className="lg:col-span-2 space-y-6 text-gray-300 text-justify leading-relaxed text-lg">
                    <p>
                        Hello! I'm <span className="text-white font-semibold">Piyush Shrivastava</span>, a final-year <span className="text-white font-semibold">Electronics and Communication Engineering</span> student at MJP Rohilkhand University (Class of 2026). My background in hardware logic provides me with a unique perspective on low-level system efficiency, which I leverage to build high-performance web architectures.
                    </p>

                    <p>
                        As a <span className="text-white">Full-Stack Developer</span>, I build intuitive user interfaces using <span className='text-blue-400 font-semibold'>React</span>, <span className='text-yellow-400 font-semibold'>Javascript</span> and <span className='text-blue-400 font-semibold'>Typescript</span>. On the backend side, I engineer robust, production-ready systems with <span className='text-green-400 font-semibold'>NodeJS</span>, <span className='text-blue-400 font-semibold'>PostgreSQL</span>, and <span className='text-pink-400 font-semibold'>Prisma</span>, ensuring security and data integrity.
                    </p>

                    <p>
                        I am currently deep-diving into <span className="text-white font-semibold">System Design</span> concepts, focusing on <span className="text-orange-400 font-semibold">horizontal scaling</span>, <span className="text-cyan-400 font-semibold">load balancing</span>, and <span className="text-purple-400 font-semibold">database optimization</span>. My goal is to move beyond simple CRUD operations and design <span className="text-white font-semibold">scalable & distributed systems</span> that can handle real-world traffic and complexity.
                        I constantly challenge myself on solving technical bottlenecks and turning complex problems into <span className="text-sky-400 font-semibold">scalable & verifiable code</span>.
                    </p>

                </div>
            </div>

            

            {/* Schooling & College Timeline */}
            <div className="max-w-4xl mx-auto w-full mt-16">
                
                <h3 className="text-xl font-bold text-white mb-16 text-center flex items-center justify-center gap-3 opacity-80">
                    <GraduationCap className="text-green-500" size={24} />
                    <span>Education Background</span>
                </h3>

                {/* Timeline Container */}
                <div className="relative group/timeline">
                    
                    {/* vertical line */}
                    <div className="absolute left-[20px] md:left-[30px] top-10 bottom-10 w-[2px] bg-white/10 transition-all duration-500 group-hover/timeline:bg-white/20 group-hover/timeline:shadow-[0_0_15px_rgba(255,255,255,0.1)]"></div>

                    <div className="space-y-12">

                        {/* College */}
                        <div className="relative pl-14 md:pl-24 group">
                            
                            <div className="absolute left-[13px] md:left-[23px] top-10 w-4 h-4 rounded-full bg-zinc-800 border-2 border-white/20 transition-all duration-300 z-10 group-hover:bg-green-500 group-hover:border-green-400 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.8)]"></div>

                            <div className="p-8 bg-zinc-900/30 border border-white/10 rounded-xl transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]">

                                {/* For glow on top-right corner */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/10 blur-3xl rounded-full group-hover:bg-green-500/20 transition-all"></div>
                                
                                <div className="relative z-10">
                                    
                                    <div className="cursor-pointer flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                                        <h4 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">B.Tech in Electronics & Communication</h4>
                                        {/* <span className="bg-green-500/10 text-green-500 text-sm font-bold px-3 py-1 rounded border border-green-500/20 w-fit">6.52 CGPA</span> */}
                                    </div>
                                    <p className="text-gray-300 mb-6">MJP Rohilkhand University, Bareilly, UP</p>

                                    <ul className="space-y-2 text-sm text-gray-500">
                                        
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500/70 mt-0.5">▹</span>
                                            <span className='text-gray-400'><strong className="text-gray-300 font-medium">Timeline:</strong> Nov 2022 to May 2026</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500/70 mt-0.5">▹</span>
                                            <span className='text-gray-400'><strong className="text-gray-300 font-medium">Focus:</strong> Full Stack AI Development & Embedded Systems</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500/70 mt-0.5">▹</span>
                                            <span   ><strong className="text-gray-300 font-medium">Coursework:</strong> C | C++ | Analog & Digital Electronics | Computer Network | Analog & Digital Communicaton | Wireless Communication</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 12th */}
                        <div className="relative pl-14 md:pl-24 group">
                            
                            <div className="absolute left-[13px] md:left-[23px] top-10 w-4 h-4 rounded-full bg-zinc-800 border-2 border-white/20 transition-all duration-300 z-10 group-hover:bg-blue-500 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>

                            <div className="p-8 bg-zinc-900/30 border border-white/10 rounded-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] relative">
                                
                                {/* For glow on top-right corner */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-all"></div>

                                <div className="relative z-10">
                                    
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                                        <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Senior Secondary School (XII)</h4>
                                        {/* <span className="bg-blue-500/10 text-blue-500 text-sm font-bold px-3 py-1 rounded border border-blue-500/20 w-fit">Science</span> */}
                                    </div>
                                    <p className="text-gray-300 mb-6">Ramjas Sr Sec School No. 1, Daryaganj, Delhi</p>

                                    <ul className="space-y-2 text-sm text-gray-500">
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500/70 mt-0.5">▹</span>
                                            <span className='text-gray-400'><strong className="text-gray-300 font-medium">Stream:</strong> Physics | Chemistry | Mathematics | Engineering Graphics</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500/70 mt-0.5">▹</span>
                                            <span className='text-gray-400'><strong className="text-gray-300 font-medium">Foundation:</strong>  something to be write, will do it later on</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500/70 mt-0.5">▹</span>
                                            <span className='text-gray-400'><strong className="text-gray-300 font-medium">Status:</strong> Completed in 2022</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* // 10th  */}
                        <div className="relative pl-14 md:pl-24 group">
                            
                            <div className="absolute left-[13px] md:left-[23px] top-10 w-4 h-4 rounded-full bg-zinc-800 border-2 border-white/20 transition-all duration-300 z-10 group-hover:bg-purple-500 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>

                            <div className="p-8 bg-zinc-900/30 border border-white/10 rounded-xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] relative overflow-hidden">
                                
                                {/* For glow on top-right corner */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full group-hover:bg-purple-500/20 transition-all"></div>

                                <div className="relative z-10">

                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                                        <h4 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">Secondary School (X)</h4>
                                        {/* <span className="bg-purple-500/10 text-purple-500 text-sm font-bold px-3 py-1 rounded border border-purple-500/20 w-fit">81.5 %</span> */}
                                    </div>
                                    <p className="text-gray-300 mb-6">U V M Intermediate College, Fulwaria, Lacchi Deoria, UP</p>

                                    <ul className="space-y-2 text-sm text-gray-500">
                                        <li className="flex items-start gap-3">
                                            <span className="text-purple-500/70 mt-0.5">▹</span>
                                            <span className='text-gray-400'><strong className="text-gray-300 font-medium">Focus:</strong> Foundational Science and Mathematics</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-purple-500/70 mt-0.5">▹</span>
                                            <span className='text-gray-400'><strong className="text-gray-300 font-medium">Status:</strong> Completed in 2020</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;