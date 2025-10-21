const NavBar = () => {
    return (
        <nav className="sticky top-12 backdrop-blur-xs z-50 w-[60%] mx-auto 
                        flex justify-between px-8 py-4 
                        bg-white/70 border border-gray-300 rounded-xl"
        >
            <div>
                Ashley Lin
            </div>
            <div className="gap-4 flex">
                <a href="#about" className="hover:text-pink-300">About</a>
                <a href="#experience" className="hover:text-pink-300">Experience</a>
                <a href="#projects" className="hover:text-pink-300">Projects</a>
            </div>
        </nav>
    )
}
export default NavBar
