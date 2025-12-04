import type { Route } from "../../.react-router/types/app/routes/+types/home";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Proclamation of Constantine | Roman Britain Timeline" },
        {
            name: "description",
            content:
                "Constantine the Great is proclaimed Emperor in York in 306 CE."
        }
    ];
}

export default function ProclamationConstantine() {
    return (
        <div className="flex flex-row p-6 gap-4 min-h-screen items-stretch">
            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    Proclamation of Constantine
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    306 CE
                </p>

                <h3 className="text-xl font-semibold mb-2">
                    Constantine the Great is proclaimed Emperor in York
                </h3>

                <p className="mb-4">
                    Following the death of his father, Constantius Chlorus, in
                    Eboracum (York), Constantine was proclaimed Emperor by the
                    local troops. This event marked the beginning of
                    Constantine's rise to power, eventually leading to his sole
                    rule over the Roman Empire and his significant role in the
                    spread of Christianity.
                </p>

                <h3 className="text-xl font-semibold mb-2">Further Reading</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <a
                            href="https://www.historyofyork.org.uk/themes/constantine-the-great"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            History of York - Constantine the Great
                        </a>
                    </li>
                </ul>

                <NavLink
                    to="/timeline"
                    className="inline-block mt-4 text-blue-600 hover:underline"
                >
                    &larr; Back to Timeline
                </NavLink>
            </div>

            <div className="max-w-1/3 min-w-1/4">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Statua_di_Costantino_ai_musei_capitolini.jpg"
                    alt="Statue of Constantine"
                    className="rounded-lg shadow-lg sticky top-10 w-full"
                />
            </div>
        </div>
    );
}
