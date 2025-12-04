import type { Route } from "../../.react-router/types/app/routes/+types/home";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        {
            title: "First Contact - Caesar's Incursions | Roman Britain Timeline"
        },
        {
            name: "description",
            content:
                "Julius Caesar's expeditionary forces into Britain in 55 and 54 BCE."
        }
    ];
}

export default function FirstContact() {
    return (
        <div className="flex flex-row p-6 gap-4 min-h-screen items-stretch">
            <div>
                <h2 className="text-2xl font-semibold mb-4">First Contact</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    55 BCE
                </p>

                <h3 className="text-xl font-semibold mb-2">
                    Caesarean Incursions 55 and 54 BCE
                </h3>

                <p className="mb-4">
                    Julius Caesar took two expeditionary forces into early
                    Britain. During these incursions the Romans gained knowledge
                    of the valuable resources found in southern Britain. They
                    eventually negotiated a peace deal which advantaged the
                    Romans. This led to the development of political and trading
                    relationships among some of the southern tribes and Rome
                    though the northern tribes were largely wary and opposed.
                </p>

                <h3 className="text-xl font-semibold mb-2">Further Reading</h3>
                <ul className="list-disc ml-6 mb-4">
                    <li>
                        <a
                            href="https://www.english-heritage.org.uk/learn/story-of-england/romans/romans-introduction/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            English Heritage - Romans Introduction
                        </a>
                    </li>
                </ul>

                <NavLink
                    to="/timeline"
                    className="inline-block mt-4 text-blue-600"
                >
                    &larr; Back to Timeline
                </NavLink>
            </div>
            <div className="max-w-1/3 min-w-1/4">
                <img
                    src="https://i0.wp.com/militaryhistorynow.com/wp-content/uploads/2019/08/Pictures_of_English_History_Plate_III_-_The_Romans_Conquer_Britain.jpg"
                    alt="Romans conquering Britain"
                    className="rounded-lg shadow-lg sticky top-10 w-full"
                />
            </div>
        </div>
    );
}
