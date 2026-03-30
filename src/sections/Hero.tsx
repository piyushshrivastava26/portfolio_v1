import { Mail, FileText, Terminal, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-between px-6 md:px-60 py-60 bg-black text-white font-mono overflow-hidden">
            
            {/* left side */}
            <div className='flex flex-col justify-center'>
                <div className="flex items-center justify-start gap-2 mb-4">
                    
                    <span className="relative flex h-3 w-2 items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    
                    <span className="text-xs text-green-500 uppercase tracking-widest">
                    ALL_SYSTEMS_OPERATIONAL
                    </span>

                </div>


                <div className="flex items-center gap-2 text-gray-400 text-xs mb-4 ml-2 md:ml-6">
                    <MapPin size={14} />
                    <span>STATIONED_AT: Ghaziabad, India | UTC+5:30</span>
                </div>

            
                <div className="mb-8 font-mono">
                    <h1 className="text-5xl md:text-6xl font-bold text-green-500 mb-2">
                            Piyush Shrivastava
                    </h1>
                    <p className="text-xl md:text-2xl text-white">
                            Full Stack AI Engineer & Embedded Systems Enthusiast
                    </p>
                </div>

            
                <p className="max-w-xl text-gray-400 leading-relaxed mb-10">
                    Just a laptop, Wi-Fi, and an unhealthy urge to ship stuff. 
                    Turning coffee into code, and chaos into commits.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                    <button className="flex items-center gap-2  text-green-400 bg-transparent border border-green-500/50 hover:bg-green-500/20 px-6 py-2 hover:shadow-[0_0_15px_rgba(74,222,128,0.5)] border-green-400 duration-300 rounded transition-all">
                        <Mail size={18} /> Contact
                    </button>
                    <button className="flex items-center gap-2 text-blue-400 bg-transparent border border-blue-500/50 hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] border-blue-400 duration-300 px-6 py-2 rounded transition-all">
                        <FileText size={18} /> Resume
                    </button>
                    <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] duration-300 text-white px-6 py-2 rounded transition-all">
                        <Terminal size={18} /> Launch Terminal
                    </button>
                </div>
            </div>


            {/* Right Side */}
            <div className="lg:flex gap-4 pr-20 pb-20">
                <div className="w-48 h-64 bg-gray-800 border-2 border-white -rotate-6 overflow-hidden rounded">
                    <img src="" alt="Piyush's Photo" className="object-cover w-full h-full" />
                </div>
                
                <div className="w-48 h-64 bg-gray-800 border-2 border-white rotate-6 translate-y-12 overflow-hidden rounded">
                    <img src="" alt="Piyush's Photo" className="object-cover w-full h-full" />
                </div>
            </div>

        </section>
    );
};

export default Hero;