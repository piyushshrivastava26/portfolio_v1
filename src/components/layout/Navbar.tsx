const Navbar = () => {
    
    return (
        <>
            <nav className="w-full h-14 bg-black text-green-400 flex items-center justify-between px-60 font-mono sticky top-0 z-50">
            
            <div className="text-lg cursor-pointer hover:drop-shadow-[0_0_10px_rgba(34,240,94,1)] ">
                <a href="#">&gt;_ piyush.dev</a>
            </div>

            {/* <div className="flex items-center gap-8 text-sm text-white">
                <span className="cursor-pointer hover:text-green-300">/about</span>
                <span className="cursor-pointer hover:text-green-300">/skills</span>
                <span className="cursor-pointer hover:text-green-300">/projects</span>
                <span className="cursor-pointer hover:text-green-300">/contact</span>
            </div> */}

            <div className="flex items-center gap-8 text-sm text-white">
                <a href="#about" className="cursor-pointer hover:text-green-300">/about</a>
                <a href="#skills" className="cursor-pointer hover:text-green-300">/skills</a>
                <a href="#projects" className="cursor-pointer hover:text-green-300">/projects</a>
                <a href="#contact" className="cursor-pointer hover:text-green-300">/contact</a>
            </div>

            </nav>

            <div className="h-[1px] w-full bg-green-500/30"></div>
        </>
    )
}

export default Navbar