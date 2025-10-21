import { expCards } from "../constants"

const Experience = () => {
    return (
        <div id="experience" className="w-[60%] mx-auto mt-20">
            <p className="mb-4">Experience</p>

            <div>
                {expCards.map((card) => (
                    <div
                        key={card.title}
                        className="justify-center"
                    >
                        <div className="flex flex-col">
                            <h1 className="font-semibold text-2xl">{card.title} @ Revature</h1>
                            <p className="my-2 text-gray-500">{card.date}</p>
                            <ul className="list-disc ms-5 mt-2 flex flex-col gap-4">
                                {card.responsibilities.map((responsibility) => (
                                    <li key={responsibility}>
                                        {responsibility}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
export default Experience
