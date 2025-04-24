import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const tools = [
        "Git",
        "VSCode",
        "Jupyter",
        "G-Suite",
        "Clip Studio Paint",
        "Figma",
        "Godot"
    ];

    const development = [
        "Java",
        "Python",
        "SQL",
        "HTML/CSS",
        "React"
    ];

    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#41662d] to-[#85a831] bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="mb-6">
                            Passionate developer with expertise in building scalable web
                            applications and creating innovative solutions. 
                        
                            I am open to all types of opportunities!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> TOOLS </h3>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-[#41662d]/10 text-[#41662d] py-1 px-3 rounded-full text-sm 
                                                hover:bg-[#41662d]/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                                                transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> DEVELOPMENT </h3>
                            <div className="flex flex-wrap gap-2">
                                {development.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-[#41662d]/10 text-[#41662d] py-1 px-3 rounded-full text-sm 
                                                hover:bg-[#41662d]/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                                                transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Education </h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <strong> B.S. in Mathematics - Computer Science </strong> - University of California, San Diego (2021-2025)
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold"> Software Engineer in Training @ Revature (MAR 2025 - Present) </h4>
                                    <p>Developed social media blog API</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}