import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 
                        className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#41662d] to-[#85a831] 
                                   bg-clip-text text-transparent text-center"
                    > 
                        Featured Projects 
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div 
                            className="p-6 rounded-xl border border-white/10 
                                       hover:-translate-y-1 hover:border-[#41662d]/30 
                                       hover:shadow-[0_2px_8px_rgba(139,168,136,0.2)]
                                       transition"
                        >
                            <h3 className="text-xl font-bold mb-2"> Social Media Blog API </h3>
                            <div className="py-4 h-64 overflow-hidden">
                                <img 
                                    src="/images/SocialMediaBlogAPI.jpg" 
                                    alt="Messages on social media"
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                            <p className="mb-4">
                                Backend social media application that provides an API for managing 
                                user accounts and messages. Users can register, log in, and perform 
                                CRUD operations on messages. The API will support retrieving all 
                                messages or filtering messages by a specific user. It is designed 
                                to handle data delivery and user actions without any frontend interface.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["JDBC", "Java", "Javalin"].map((tech, key) =>  (
                                    <span 
                                        key={key}
                                        className="bg-[#41662d]/10 text-[#41662d] py-1 px-3 rounded-full text-sm 
                                                   hover:bg-[#41662d]/20 hover:shadow-[0_2px_8px_rgba(139,168,136,0.1)]
                                                   transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a 
                                    href="https://github.com/hoshizhi/ashylin-pep-project.git"
                                    target="_blank"
                                    className="text-[#85a831] hover:text-[#85a831] transition-colors my-4"
                                >
                                    View Project &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}