import { useState, useEffect } from "react"

const NavBar = () => {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark)
    }, [dark])

    return (
        <nav className="sticky top-12 backdrop-blur-xs z-50 w-[80%] md:w-[60%] lg:w-[40%]
                        mx-auto flex justify-between px-8 py-4
                        bg-white/70 dark:bg-[#444444]/70 border border-gray-300 dark:border-gray-600 rounded-xl"
        >
            <div>
                Ashley Lin
            </div>
            <div className="gap-4 flex items-center">
                <a href="#about" className="hover:text-[#688734] dark:hover:text-[#b9d37f]">About</a>
                <a href="#experience" className="hover:text-[#688734] dark:hover:text-[#b9d37f]">Experience</a>
                <a href="#projects" className="hover:text-[#688734] dark:hover:text-[#b9d37f]">Projects</a>
                <button onClick={() => setDark(!dark)} className="ml-2 cursor-pointer" aria-label="Toggle dark mode">
                    {dark ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"/>
                            <line x1="12" y1="1" x2="12" y2="3"/>
                            <line x1="12" y1="21" x2="12" y2="23"/>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                            <line x1="1" y1="12" x2="3" y2="12"/>
                            <line x1="21" y1="12" x2="23" y2="12"/>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                        </svg>
                    )}
                </button>
            </div>
        </nav>
    )
}
export default NavBar
