import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [
            project1Ref.current,
            project2Ref.current,
            project3Ref.current
        ];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        });

        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )
    }, []);

    return (
        <section
            id="work"
            className="py-16 px-4 md:px-8"
        >
            <div className="project-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="news-card">
                    <div className="w-full h-48 md:h-56 relative overflow-hidden rounded-lg mb-4">
                        <img
                            src= "/images/SocialMediaBlogAPI.jpg"
                            alt="Social Media Blog API"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="card-content">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="font-bold">2021/04/25</span>
                            <span className="px-3 py-1 text-xs rounded-md bg-gray-800 text-lime-50">Backend</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">Social Media Blog API</h3>
                        <p className="text-sm text-gray-100">A backend server built with JDBC, Java and Javalin
                            to manage and store accounts and messages.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects