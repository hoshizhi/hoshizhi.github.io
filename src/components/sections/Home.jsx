import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 
                    bg-gradient-to-r from-[#41662d] to-[#85a831] 
                    bg-clip-text text-transparent leading-right"
                    >
                        hi! i'm ash
                    </h1>

                    <p className="text-lg mb-8 max-w-lg mx-auto">
                        I'm a full-stack developer who loves crafting clean, 
                        scalable applications and software. My goal is to build 
                        solutions that offer both exceptional performance and a 
                        delightful user experience. I love seeing my work make 
                        someone's day a little easier or brighter.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a 
                            href="#projects"
                            className="bg-[#41662d] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(139,168,136,0.4)]"
                        >
                            View Projects
                        </a>
                        <a 
                            href="#contact"
                            className="border border-[#41662d]/50 text-[#41662d] py-3 px-6 rounded font-medium transition-all duration-200 
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(139,168,136,0.4)] hover:bg-[#41662d]/10"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}