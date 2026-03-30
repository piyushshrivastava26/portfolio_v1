const Navbar = () => {
    
    return (
        <>
            <nav className="w-full h-14 bg-black text-green-400 flex items-center justify-between px-56 font-mono sticky top-0 z-50">
            
            <div className="text-lg cursor-pointer hover:drop-shadow-[0_0_10px_rgba(34,240,94,1)] ">
                &gt;_ piyush.dev
            </div>

            <div className="flex items-center gap-8 text-sm text-white">
                <span className="cursor-pointer hover:text-green-300">/about</span>
                <span className="cursor-pointer hover:text-green-300">/skills</span>
                <span className="cursor-pointer hover:text-green-300">/projects</span>
                <span className="cursor-pointer hover:text-green-300">/contact</span>
            </div>

            </nav>

            <div className="h-[1px] w-full bg-green-500/30"></div>
        </>
    )
}

export default Navbar