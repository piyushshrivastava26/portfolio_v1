import { ArrowUp } from 'lucide-react';

const Footer = () => {
    

    const scrollToTop = () => {
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        })
    }

    return (


        <footer className="py-12 px-6 md:px-20 lg:px-40 bg-black text-white font-mono border-t border-white/5">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="text-xl font-bold text-white group cursor-default">
                        &gt;_ piyush.dev
                    </div>

                    <p className="text-[12px] text-gray-400 uppercase tracking-widest">
                        © 2026 PIYUSH SHRIVASTAVA.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/piyushshrivastava26"
                        target="_blank"
                        className="text-gray-500 hover:text-green-500 transition-colors hover:scale-105"
                        title="GitHub"
                    >
                        <i className="fa-brands fa-github text-2xl"></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/piyush-shrivastava-58351825b/"
                        target="_blank"
                        className="text-gray-500 hover:text-blue-500 transition-colors hover:scale-105"
                        title="LinkedIn"
                    >
                        <i className="fa-brands fa-linkedin text-2xl"></i>
                    </a>

                    <a
                        href="mailto:piyushshrivastava22ec27@gmail.com"
                        className="text-gray-500 hover:text-red-400 transition-colors hover:scale-105"
                        title="Email"
                    >
                        <i className="fa-solid fa-envelope text-2xl group-hover:shadow-[0_0_15px_rgba(248,113,113,0.4)]"></i>
                    </a>

                    <a
                        href="https://x.com/man_who_builds"
                        className="text-gray-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                        title="Twitter"
                    >
                        <i className="fa-brands fa-x-twitter text-2xl"></i>
                    </a>
                </div>

                {/* back to top button */}
                <button
                    onClick={scrollToTop}
                    className="group flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-all uppercase tracking-tighter"
                >
                    Back to top
                    <div className="p-2 border border-white/10 rounded-full group-hover:border-white/30 group-hover:-translate-y-1 transition-all">
                        <ArrowUp size={14} />
                    </div>
                </button>

            </div>

        </footer>
    );
};

export default Footer;