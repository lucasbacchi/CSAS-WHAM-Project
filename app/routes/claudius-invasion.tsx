import type { Route } from "../../.react-router/types/app/routes/+types/home";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Claudius Invasion | Roman Britain Timeline" },
        {
            name: "description",
            content:
                "Emperor Claudius began his rule and invasion of Britain in 43 CE."
        }
    ];
}

export default function ClaudiusInvasion() {
    return (
        <div className="flex flex-row p-6 gap-4 min-h-screen items-stretch">
            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    Claudius Invasion
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    43 CE
                </p>

                <h3 className="text-xl font-semibold mb-2">
                    Emperor Claudius began his rule and invasion
                </h3>

                <p className="mb-4">
                    Emperor Claudius began his rule and was looked down upon
                    because he was slightly deaf and had a limp. Seeking to
                    overcome his natural shortcomings and legitimize his rule,
                    he initiated a major invasion of Britain in 43 CE. Though
                    his predecessor Caligula had made an abortive attempt to
                    reach Britain, Claudius organized a serious military
                    campaign. This successful invasion would bring him the
                    military glory and prestige he needed to secure his position
                    as Emperor.
                </p>

                <p className="mb-4">
                    The invasion forces crossed the Channel and quickly
                    conquered the southeastern tribes. The Romans established a
                    permanent presence, building forts and roads that would form
                    the infrastructure of Roman Britain for the next 367 years.
                    Claudius himself visited Britain to receive the surrender of
                    the defeated tribes, cementing his status and popularity
                    with the Roman people. This successful conquest marked the
                    beginning of systematic Roman rule over Britain.
                </p>

                <h3 className="text-xl font-semibold mb-2">Further Reading</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <a
                            href="https://www.english-heritage.org.uk/learn/story-of-england/romans/invasion/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            English Heritage - Roman Invasion
                        </a>
                    </li>
                </ul>

                <NavLink
                    to="/#claudius-invasion"
                    className="inline-block mt-4 text-blue-600"
                >
                    &larr; Back to Home
                </NavLink>
            </div>

            <div className="max-w-1/3 min-w-1/4">
                <img
                    src="https://www.usni.org/sites/default/files/Iacono-NH-ND-23%201%20Hero.jpg"
                    alt="Claudius invasion"
                    className="rounded-lg shadow-lg sticky top-10 w-full"
                />
            </div>
        </div>
    );
}
