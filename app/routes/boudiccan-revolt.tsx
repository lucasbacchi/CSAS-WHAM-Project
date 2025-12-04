import type { Route } from "../../.react-router/types/app/routes/+types/home";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Boudiccan Revolt | Roman Britain Timeline" },
        {
            name: "description",
            content:
                "The Iceni rebellion against Roman rule led by Queen Boudicca in 60-61 CE."
        }
    ];
}

export default function BoudiccanRevolt() {
    return (
        <div className="flex flex-row p-6 gap-4 min-h-screen items-stretch">
            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    Boudiccan Revolt
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    60-61 CE
                </p>

                <h3 className="text-xl font-semibold mb-2">
                    The Iceni rebellion against Roman rule
                </h3>

                <p className="mb-4">
                    The Boudiccan Revolt was a major uprising against Roman rule
                    in Britain led by Queen Boudicca of the Iceni tribe. The
                    revolt was sparked by the mistreatment of Boudicca and her
                    daughters following the death of her husband, King
                    Prasutagus. The Romans had ignored his will, annexed his
                    kingdom, and subjected Boudicca to public humiliation. In
                    response, Boudicca united several tribes and launched a
                    series of attacks on Roman settlements, including
                    Camulodunum (Colchester), Londinium (London), and Verulamium
                    (St Albans). The revolt caused significant destruction and
                    loss of life before being ultimately suppressed by the Roman
                    governor Suetonius Paulinus at the Battle of Watling Street.
                </p>

                <p className="mb-4">
                    Though ultimately defeated, Boudicca's rebellion had
                    significant consequences for Roman strategy in Britain. The
                    brutality of Suetonius Paulinus's suppression prompted Rome
                    to recall him and adopt a more conciliatory approach.
                    Subsequent Roman governors integrated British elites into
                    the administrative structure, offering them wealth and
                    prestige in exchange for loyalty. This shift in policy
                    proved more effective than military domination alone in
                    securing Roman control over Britain.
                </p>

                <h3 className="text-xl font-semibold mb-2">Further Reading</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <a
                            href="https://www.roman-britain.co.uk/roman-conquest-and-occupation-of-britain/boudica-the-iceni-warrior-queen/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Roman Britain - Boudica the Iceni Warrior Queen
                        </a>
                    </li>
                </ul>

                <NavLink
                    to="/#boudiccan-revolt"
                    className="inline-block mt-4 text-blue-600"
                >
                    &larr; Back to Home
                </NavLink>
            </div>

            <div className="max-w-1/3 min-w-1/4">
                <img
                    src="https://cdn.mos.cms.futurecdn.net/NyVsZhibmAHs5VATqSsUVT-1200-80.jpg"
                    alt="Boudicca"
                    className="rounded-lg shadow-lg sticky top-10 w-full"
                />
            </div>
        </div>
    );
}
