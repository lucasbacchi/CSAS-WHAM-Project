import type { Route } from "../../.react-router/types/app/routes/+types/home";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Pre-Roman Britain | Roman Britain Timeline" },
        {
            name: "description",
            content:
                "Learn about Pre-Roman Britain, from around 900,000 years ago to 43 CE."
        }
    ];
}

export default function PreRomanBritain() {
    return (
        <div className="flex flex-row p-6 gap-4 min-h-screen items-stretch">
            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    Pre-Roman Britain
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    Before 43 CE
                </p>

                <h3 className="text-xl font-semibold mb-2">
                    From around 900,000 years ago to 43 CE
                </h3>

                <p className="mb-4">
                    During this period there were large independent tribal
                    groups which were led by powerful kings and queens. These
                    tribal groups maintained their own territories and
                    resources.
                </p>

                <h3 className="text-xl font-semibold mb-2">Further Reading</h3>
                <ul className="list-disc ml-6 mb-4">
                    <li>
                        <a
                            href="https://www.english-heritage.org.uk/learn/story-of-england/prehistory/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            English Heritage - Prehistory
                        </a>
                    </li>
                </ul>

                <NavLink
                    to="/#pre-roman-britain"
                    className="inline-block mt-4 text-blue-600"
                >
                    &larr; Back to Home
                </NavLink>
            </div>
            <div className="max-w-1/3 min-w-1/4">
                <img
                    src="https://digitalmapsoftheancientworld.com/wp-content/uploads/2024/03/iron-age-old-sarum.jpg"
                    alt="Iron Age settlement"
                    className="rounded-lg shadow-lg sticky top-10 w-full"
                />
            </div>
        </div>
    );
}
