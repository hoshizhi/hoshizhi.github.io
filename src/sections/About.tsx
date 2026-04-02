import { socials, tools } from "../constants"

const About = () => {
    return (
        <div id="about" className="w-[80%] md:w-[60%] lg:w-[40%] mx-auto min-h-screen flex flex-col justify-center">
            <div className="intro m-auto mb-10">
                <div className="w-36 m-auto mb-0">
                    <img 
                        src="/images/persona.png" 
                        alt="persona"
                        className="w-full h-full object-cover"
                    />
                </div>

                <p className="text-4xl font-bold text-center">
                    hi! <span className="text-[#688734] dark:text-[#b9d37f]">i'm ash</span>
                </p>
                <p className="text-center m-2">
                    engineer, developer, and illustrator
                </p>

                <p className="text-center">
                    Based in California with a passion for creation.
                    I'm fascinated by the use of automated software systems to simplify tasks and boost efficiency.
                </p>
            </div>
            
            <div className="m-auto mt-0 flex flex-row gap-8">
                <div className="flex flex-col gap-4 flex-1">
                    <p>I...</p>
                    <ul className="list-disc ms-5">
                        <li>create web applications</li>
                        <li>draw things i like</li>
                        <li>am learning about cyber security</li>
                        <li>drink a lot of matcha and (milk) tea</li>
                    </ul>

                    <div>
                        <p className="section-title">OTHER INTERESTS</p>
                        <ul className="list-disc ms-5">
                            <li>game development</li>
                            <li>music! singing, guitar, piano, kalimba, recorder...</li>
                            <li>baking</li>
                            <li>one piece</li>
                        </ul>
                    </div>

                    <div>
                        <p className="section-title">LANGUAGE PROFICIENCY</p>
                        Native English, can speak conversational Mandarin and Japanese.
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <p className="section-title mb-2">TOOLS</p>
                    <div className="flex flex-wrap gap-2">
                        {tools.map((tool) => (
                            <span
                                key={tool}
                                className="px-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#444444] shadow-sm transition-transform hover:translate-y-0.5"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="m-auto pb-12 flex items-center justify-center">
                <div className="flex gap-2">
                    {socials.map(( social, index ) => (
                        <a key={index} href={social.link}>
                            <img 
								src={social.icon}
								alt={`social-icon-${index}`}
								className="w-12 h-12 border p-3 border-gray-300 dark:border-gray-600 bg-white dark:bg-[#444444] rounded-xl"
							/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default About
