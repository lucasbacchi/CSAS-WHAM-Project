import type { Route } from "../../.react-router/types/app/routes/+types/home";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Construction of Hadrian's Wall | Roman Britain Timeline" },
        {
            name: "description",
            content:
                "The northern frontier is established with Hadrian's Wall in 122 CE."
        }
    ];
}

export default function ConstructionHadriansWall() {
    return (
        <div className="flex flex-row p-6 gap-4 min-h-screen items-stretch">
            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    Construction of Hadrian's Wall
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    122 CE
                </p>

                <h3 className="text-xl font-semibold mb-2">
                    The northern frontier is established
                </h3>

                <p className="mb-4">
                    Marks the shift from Roman expansion to Roman consolidation.
                    They stopped trying to conquer the whole island and decided
                    to fortify their existing position. Emperor Hadrian visited
                    Britain personally in 122 CE. He was famous for traveling
                    his empire to inspect and improve his provinces. The wall
                    was intended not only to serve a defensive purpose against
                    northern raids, but also to separate the Romans from the
                    barbarian Caledonian tribes, and to control cross-border
                    movement and tax collection. The wall's construction
                    required significant resources, labor, and
                    coordination—thousands of workers including soldiers,
                    slaves, and local laborers worked for years to complete the
                    massive project.
                </p>

                <p className="mb-4">
                    It stretched 73 miles (80 Roman miles) from the River Tyne
                    (Newcastle) to the Solway Firth. Built mainly of stone in
                    the east and turf in the west (later replaced by stone).
                    Featured a 'Milecastle' every Roman mile and two turrets in
                    between each milecastle. 14-17 major forts were built along
                    the line of the wall to house troops. It remains the most
                    significant monument of Roman Britain and defined the
                    northern frontier for nearly 300 years.
                </p>

                <h3 className="text-xl font-semibold mb-2">Further Reading</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <NavLink
                            to="/hadrians-wall"
                            className="text-blue-600 hover:underline"
                        >
                            More about Hadrian's Wall
                        </NavLink>
                    </li>
                </ul>

                <NavLink
                    to="/#construction-hadrians-wall"
                    className="inline-block mt-4 text-blue-600"
                >
                    &larr; Back to Home
                </NavLink>
            </div>

            <div className="max-w-1/3 min-w-1/4">
                <img
                    src="https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/housesteads-roman-fort/housesteads-crags-hadrians-wall-c-roger-clegg-hwhl.jpg"
                    alt="Hadrian's Wall"
                    className="rounded-lg shadow-lg sticky top-10 w-full"
                />
            </div>
        </div>
    );
}
