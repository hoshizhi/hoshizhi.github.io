import { useState } from "react"
import { expCards } from "../constants"

const Experience = () => {
    const [selected, setSelected] = useState(0)
    const card = expCards[selected]

    return (
        <div id="experience" className="w-[80%] md:w-[60%] lg:w-[50%] mx-auto min-h-screen flex flex-col justify-center">
            <p className="mb-4 section-title">EXPERIENCE</p>

            <div className="flex flex-row">
                <div className="flex flex-col border-r-2 border-gray-300 dark:border-gray-600">
                    {expCards.map((c, i) => (
                        <button
                            key={c.company}
                            onClick={() => setSelected(i)}
                            className={`px-4 py-3 text-left text-sm transition-colors -mr-[2px] border-r-2 ${
                                selected === i
                                    ? "border-[#688734] dark:border-[#b9d37f] text-[#688734] dark:text-[#b9d37f] font-semibold bg-[#688734]/10 dark:bg-[#b9d37f]/10"
                                    : "border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#688734] dark:hover:text-[#b9d37f]"
                            }`}
                        >
                            {c.company}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col ml-6 flex-1">
                    <h1 className="font-semibold text-2xl text-[#688734] dark:text-[#b9d37f]">
                        {card.title} @ {card.company}
                    </h1>
                    <p className="my-2 text-gray-500 dark:text-gray-400">{card.date}</p>
                    <ul className="list-disc ms-5 mt-2 flex flex-col gap-4">
                        {card.responsibilities.map((responsibility) => (
                            <li key={responsibility}>{responsibility}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Experience
