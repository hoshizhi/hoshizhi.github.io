import { socials } from "../constants"

const About = () => {
    return (
        <div id="about" className="w-[80%] md:w-[60%] lg:w-[40%] mx-auto mt-20">
            <div className="w-24 m-auto">
                <img 
                    src="/images/persona.png" 
                    alt="persona"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="m-auto">
                <p className="text-4xl mb-4 font-semibold text-center">
                hi! i'm ash
                </p>
                <p className="text-center mb-4">
                    I'm a software engineer based in California with a passion for creation.
                    I'm fascinated by the use of automated software systems to simply tasks and boost efficiency.
                </p> 
            </div>

            <div className="m-auto flex items-center justify-center">
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
