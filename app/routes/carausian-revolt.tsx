import type { Route } from "../../.react-router/types/app/routes/+types/home";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Carausian Revolt | Roman Britain Timeline" },
        {
            name: "description",
            content: "The British Empire of Carausius in 286-296 CE."
        }
    ];
}

export default function CarausianRevolt() {
    return (
        <div className="flex flex-row p-6 gap-4 min-h-screen items-stretch">
            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    Carausian Revolt
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    286-296 CE
                </p>

                <h3 className="text-xl font-semibold mb-2">
                    The "British Empire" of Carausius
                </h3>

                <p className="mb-4">
                    A strange decade where Britain functioned as its own
                    breakaway empire.
                </p>

                <h3 className="text-xl font-semibold mb-2">Further Reading</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <a
                            href="https://www.roman-britain.co.uk/roman-conquest-and-occupation-of-britain/carausius-and-the-late-third-century/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Roman Britain - Carausius and the Late Third Century
                        </a>
                    </li>
                </ul>

                <NavLink
                    to="/#carausian-revolt"
                    className="inline-block mt-4 text-blue-600"
                >
                    &larr; Back to Home
                </NavLink>
            </div>

            <div className="max-w-1/3 min-w-1/4">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Antoninianus_Carausius_leg4-RIC_0069v.jpg"
                    alt="Coin of Carausius"
                    className="rounded-lg shadow-lg sticky top-10 w-full"
                />
            </div>
        </div>
    );
}
