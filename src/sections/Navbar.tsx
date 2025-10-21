const NavBar = () => {
    return (
        <nav className="sticky top-12 backdrop-blur-xs z-50 w-[80%] md:w-[60%] lg:w-[40%] 
                        mx-auto flex justify-between px-8 py-4 
                        bg-white/70 border border-gray-300 rounded-xl"
        >
            <div>
                Ashley Lin
            </div>
            <div className="gap-4 flex">
                <a href="#about" className="hover:text-[#b36f5e]">About</a>
                <a href="#experience" className="hover:text-[#b36f5e]">Experience</a>
                <a href="#projects" className="hover:text-[#b36f5e]">Projects</a>
            </div>
        </nav>
    )
}
export default NavBar
