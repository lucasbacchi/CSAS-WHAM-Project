import type { Route } from "../../.react-router/types/app/routes/+types/home";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "End of Roman Rule | Roman Britain Timeline" },
        {
            name: "description",
            content:
                "The official political separation of Britain from the Roman Empire in 410 CE."
        }
    ];
}

export default function EndRomanRule() {
    return (
        <div className="flex flex-row p-6 gap-4 min-h-screen items-stretch">
            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    End of Roman Rule
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    410 CE
                </p>

                <h3 className="text-xl font-semibold mb-2">
                    The official political separation of Britain from the Roman
                    Empire
                </h3>

                <p className="mb-4">
                    The Empire was crumbling. Rome itself was under threat from
                    Visigoths (sacked in 410 AD). Troops had been gradually
                    withdrawn from Britain to protect Italy. The British towns,
                    suffering from Saxon raids, wrote to Emperor Honorius asking
                    for military support. The Emperor replied, telling the
                    British cities to "look to their own defences."
                </p>

                <p className="mb-4">
                    This event marked the official end of Roman Britain, though
                    the process of withdrawal had been gradual. Roman
                    administrative structures, towns, and economic systems that
                    had flourished for nearly four centuries began to collapse.
                    The legions departed, fortifications were abandoned, and
                    Romano-British civilization fragmented into smaller regional
                    kingdoms. Britain entered the early medieval period, where
                    Germanic peoples gradually migrated and settled, especially
                    in the east. Many Roman achievements—roads, buildings,
                    administrative practices—eventually fell into disrepair,
                    though their influence would persist in place names,
                    Christianity, and cultural memory. The departure of Rome
                    from Britain was less a sudden end and more the final
                    acknowledgment of a relationship that had already
                    substantially declined over the previous decades.
                </p>

                <h3 className="text-xl font-semibold mb-2">Further Reading</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <a
                            href="https://www.english-heritage.org.uk/learn/story-of-england/romans/end-of-roman-britain/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            English Heritage - End of Roman Britain
                        </a>
                    </li>
                </ul>

                <NavLink
                    to="/#end-roman-rule"
                    className="inline-block mt-4 text-blue-600"
                >
                    &larr; Back to Home
                </NavLink>
            </div>

            <div className="max-w-1/3 min-w-1/4">
                <img
                    src="https://www.english-heritage.org.uk/siteassets/home/visit/inspire-me/why-did-the-romans-leave-britain/ic084_007---1200x630.jpg"
                    alt="End of Roman Britain"
                    className="rounded-lg shadow-lg sticky top-10 w-full"
                />
            </div>
        </div>
    );
}
