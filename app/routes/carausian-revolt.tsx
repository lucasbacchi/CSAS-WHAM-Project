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
                    breakaway empire, marking one of the most unusual periods in
                    Roman Britain's history.
                </p>

                <h4 className="text-lg font-semibold mb-2">
                    Background and Rise to Power
                </h4>
                <p className="mb-4">
                    Marcus Aurelius Mausaeus Carausius was a military commander
                    of Menapian origin (from the Low Countries) who rose to
                    prominence in the Roman navy. He was appointed by Emperor
                    Maximian to command the Classis Britannica, the fleet
                    responsible for defending the coasts of Britain and northern
                    Gaul against Saxon and Frankish pirates.
                </p>
                <p className="mb-4">
                    However, Carausius was accused of allowing pirates to raid
                    and then keeping the recovered booty for himself rather than
                    returning it to the treasury. When Maximian ordered his
                    execution in 286 CE, Carausius declared himself Emperor and
                    took control of Britain and northern Gaul.
                </p>

                <h4 className="text-lg font-semibold mb-2">
                    The Breakaway Empire
                </h4>
                <p className="mb-4">
                    For seven years, Carausius ruled Britain as an independent
                    state. He established his own mint, issued coins bearing the
                    legend "Restorer of Britain," and even depicted himself
                    alongside the legitimate emperors Diocletian and Maximian as
                    equals, claiming to be part of a triumvirate.
                </p>
                <p className="mb-4">
                    His control of the powerful British fleet made any invasion
                    attempt by Rome extremely difficult. The mainland Roman
                    Empire was struggling with multiple crises at the time,
                    including barbarian invasions and internal conflicts, which
                    prevented them from immediately responding to Carausius's
                    rebellion.
                </p>

                <h4 className="text-lg font-semibold mb-2">
                    Military Strength and Administration
                </h4>
                <p className="mb-4">
                    Carausius maintained strong defenses and appears to have
                    been a capable administrator. He strengthened coastal
                    fortifications (the Saxon Shore forts) and maintained good
                    relations with the British population. His coins show
                    sophisticated propaganda, often referencing Roman virtues
                    and divine favor, attempting to legitimize his rule.
                </p>

                <h4 className="text-lg font-semibold mb-2">
                    The Fall of the British Empire
                </h4>
                <p className="mb-4">
                    In 293 CE, Carausius was assassinated by his finance
                    minister Allectus, who took power in his place. Allectus
                    ruled for another three years, but he lacked Carausius's
                    military skill and popularity. In 296 CE, Constantius
                    Chlorus (the Caesar of the western empire) launched a
                    successful invasion of Britain.
                </p>
                <p className="mb-4">
                    Allectus was defeated and killed at the Battle of
                    Silchester, and Britain was restored to the Roman Empire.
                    Constantius was celebrated as "Restorer of the Eternal
                    Light" (Redditor Lucis Aeternae) for bringing Britain back
                    into the fold.
                </p>

                <h4 className="text-lg font-semibold mb-2">
                    Historical Significance
                </h4>
                <p className="mb-4">
                    The Carausian Revolt demonstrated Britain's strategic
                    importance and its potential for independence from Rome. It
                    also revealed the vulnerabilities of the late 3rd-century
                    Roman Empire during the Crisis of the Third Century. The
                    episode foreshadowed Britain's eventual separation from the
                    empire in the early 5th century and showed that the island
                    could function as an independent political entity.
                </p>

                <h3 className="text-xl font-semibold mb-2 mt-6">
                    Further Reading
                </h3>
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
