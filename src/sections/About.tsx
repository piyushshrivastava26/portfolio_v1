import { GraduationCap } from 'lucide-react';

const EDUCATION_DATA = [
    {
        id: 1,
        degree: "B.Tech in Electronics & Communication",
        institution: "MJP Rohilkhand University, Bareilly, UP",
        details: [
            { label: "Timeline", value: "Nov 2022 - May 2026" },
            { label: "Focus", value: "Full Stack AI & Embedded Systems" },
            { label: "Coursework", value: "C++ | Computer Networks | Analog & Digital Communication | Mobile Communication" }
        ],
        color: "group-hover:bg-green-500",
        Textcolor: "group-hover:text-green-500",
        shadow: "group-hover:shadow-[0_0_15px_rgba(34,197,94,0.8)]",
        border: "group-hover:border-green-500/50"
    },
    {
        id: 2,
        degree: "Senior Secondary School (XII)",
        institution: "Ramjas Sr Sec School No. 1, Delhi",
        details: [
            { label: "Stream", value: "PCM | Engineering Graphics" },
            { label: "Status", value: "Completed in 2022" }
        ],
        color: "group-hover:bg-blue-500",
        Textcolor: "group-hover:text-blue-500",
        shadow: "group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]",
        border: "group-hover:border-blue-500/50"
    },
    {
        id: 3,
        degree: "Secondary School (X)",
        institution: "U V M Intermediate College, Deoria, UP",
        details: [
            { label: "Focus", value: "Foundational Science & Maths" },
            { label: "Status", value: "Completed in 2020" }
        ],
        color: "group-hover:bg-purple-500",
        Textcolor: "group-hover:text-purple-500",
        shadow: "group-hover:shadow-[0_0_15px_rgba(168,85,247,0.8)]",
        border: "group-hover:border-purple-500/50"
    }
]

const About = () => {
    
    
    return (
        <section id="about" className="py-24 px-6 md:px-20 lg:px-36 xl:px-40 bg-black text-white font-mono">

            <div className="flex items-center gap-4 mb-8 md:mb-14">
                
                <h2 className="text-3xl font-bold text-green-500">
                    <span className="text-gray-500 font-light">01.</span> About-Me
                </h2>
                <div className="h-[1px] bg-green-500/20 flex-1"></div>
            </div>

            {/* Journey */}
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-24">

                <div className="lg:col-span-2 space-y-4 text-gray-300 text-justify leading-relaxed max-md:text-sm text-[16x] md:text-lg">
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
            <h3 className="text-xl md:text-2xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3 opacity-80">
                <GraduationCap className="text-green-500" size={28} />
                <span>Education Background</span>
            </h3>

            <div className="relative timeline/group">
                <div className="hidden xl:block absolute left-[10px] lg:left-[30px] top-0 bottom-0 w-[2px] bg-white/10" />

                <div className="space-y-6 md:space-y-12">

                    {EDUCATION_DATA.map((edu) => (
                        <div key={edu.id} className="relative xl:pl-24 group">
                            
                            <div className={`hidden xl:block absolute left-[3px] lg:left-[23px] top-6 lg:top-10 w-3 lg:w-4 h-3 lg:h-4 rounded-full bg-zinc-800 border-2 border-white/20 z-10 transition-all duration-300 ${edu.color} ${edu.shadow}`} />

                            <div className={`p-4 md:p-8 bg-zinc-900/30 border border-white/10 rounded-xl transition-all duration-300 ${edu.border} hover:shadow-[0_0_20px_rgba(255,255,255,0.02)]`}>
                                
                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-1">
                                    <h4 className={`text-xl md:text-2xl font-bold text-white ${edu.Textcolor} transition-colors`}>
                                        {edu.degree}
                                    </h4>
                                    <p className="text-sm md:text-sm text-gray-400 font-mono">
                                        {edu.details.find(d => d.label === 'Status' || d.label === 'Timeline')?.value}
                                    </p>
                                </div>

                                <p className="text-gray-400 text-sm md:text-base mb-4">{edu.institution}</p>

                                <ul className="space-y-1">
                                    {edu.details.map((detail, index) => (
                                        <li key={index} className="flex items-start gap-2 text-xs md:text-sm">
                                            <span className="text-green-500/70 mt-1">▹</span>
                                            <span className="text-gray-500">
                                                <strong className="text-gray-300 font-medium">{detail.label}:</strong> {detail.value}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

                    
    
        // <div className="absolute left-[13px] md:left-[23px] top-10 w-4 h-4 rounded-full bg-zinc-800 border-2 border-white/20 transition-all duration-300 z-10 group-hover:bg-green-500 group-hover:border-green-400 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.8)]"></div>
        // <div className="absolute left-[13px] md:left-[23px] top-10 w-4 h-4 rounded-full bg-zinc-800 border-2 border-white/20 transition-all duration-300 z-10 group-hover:bg-blue-500 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
        // <div className="absolute left-[13px] md:left-[23px] top-10 w-4 h-4 rounded-full bg-zinc-800 border-2 border-white/20 transition-all duration-300 z-10 group-hover:bg-purple-500 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>