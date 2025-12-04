import type { Route } from "../../.react-router/types/app/routes/+types/home";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "The Great Conspiracy | Roman Britain Timeline" },
        {
            name: "description",
            content: "The barbarian attack that shook Roman Britain in 367 CE."
        }
    ];
}

export default function GreatConspiracy() {
    return (
        <div className="flex flex-row p-6 gap-4 min-h-screen items-stretch">
            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    The Great Conspiracy
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    367 CE
                </p>

                <h3 className="text-xl font-semibold mb-2">
                    The barbarian attack that shook Roman Britain
                </h3>

                <p className="mb-4">
                    A coordinated simultaneous attack on Roman Britain from
                    three directions by the Picts, Scots, and Saxons. The event
                    exposed the vulnerabilities of Roman military control in
                    Britain and led to significant social and economic
                    disruptions. The Picts attacked from the north, the Scots
                    from the west (across from Ireland), and the Saxons from the
                    east by sea. This coordinated assault may have been
                    deliberately planned or opportunistic, but it overwhelmed
                    the depleted Roman garrison.
                </p>

                <p className="mb-4">
                    The Great Conspiracy marked a turning point in Roman
                    Britain's fortunes. Roman troops were withdrawn from
                    Hadrian's Wall to defend the south, leaving the frontier
                    vulnerable. Towns and villas were destroyed or abandoned.
                    The event demonstrated that Rome could no longer adequately
                    defend the province and foreshadowed the final withdrawal of
                    legions just decades later. This crisis period saw increased
                    Germanic settlement in the east and accelerated the decline
                    of Roman authority.
                </p>

                <h3 className="text-xl font-semibold mb-2">Further Reading</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <a
                            href="https://www.roman-britain.co.uk/roman-conquest-and-occupation-of-britain/late-4th-century-britain/the-great-conspiracy-2/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Roman Britain - The Great Conspiracy
                        </a>
                    </li>
                </ul>

                <NavLink
                    to="/#great-conspiracy"
                    className="inline-block mt-4 text-blue-600"
                >
                    &larr; Back to Home
                </NavLink>
            </div>

            <div className="max-w-1/3 min-w-1/4">
                <img
                    src="https://labrujulaverde.b-cdn.net/en/wp-content/uploads/2024/07/LHomme_et_la_terre.hommenature_04-2.jpg"
                    alt="The Great Conspiracy"
                    className="rounded-lg shadow-lg sticky top-10 w-full"
                />
            </div>
        </div>
    );
}
