import type { Route } from "./+types/mons-graupius";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Battle of Mons Graupius | Roman Britain Timeline" },
        {
            name: "description",
            content:
                "The Battle of Mons Graupius and Rome's attempt to occupy Scotland."
        }
    ];
}

export default function MonsGraupius() {
    return (
        <div className="flex flex-row p-6 gap-4 min-h-screen items-stretch">
            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    The Battle of Mons Graupius and Scotland Occupation Attempt
                </h2>
                <p className="text-lg mb-4">
                    The drive to conquer northern territory was led by Governor
                    Gnaeus Julius Agricola, who arrived in Britain in 77 CE.
                    Agricola spent years pushing up in the northern territory
                    the Romans called Caledonia (modern day Scotland) in
                    response to threats from powerful northern tribes such as
                    the Brigantes, Caledonni, and Maeatae. He believed the only
                    way to achieve peace was to conquer Caledonia and control
                    the whole island.The Flavian Frontier and a line of
                    temporary timber forts known as the Gask Ridge were built
                    along the narrow waist of modern day Scotland in 79-83 CE.
                </p>
                <p className="text-lg mb-4">
                    Eventually in 83 CE, the Caledonian tribes united, gathering
                    a massive force of over 30,000 led by chieftain Calgacus to
                    fight for their freedom and land. They stood in a defensive
                    position on high ground overlooking a plain around an area
                    called Mons Graupius (likely in the Scottish Highlands).
                    Agricola fought with auxiliary troops on the front line,
                    while using his 4 legions to maneuver around and flank the
                    Caledonian army from the rear. This unexpected attack caused
                    the Caledonians to break formation and retreat, claiming the
                    Romans victorious. This battle later became known as the
                    Battle of Mons Graupius but the victory was short as the
                    Romans also withdrew due to high costs and significant
                    losses.
                </p>
                <p className="text-lg mb-4">
                    The Romans' occupation attempts of Caledonia were
                    unsuccessful and high in cost. This prompted Emperor
                    Hadrian, who took power in 117 CE, to change strategy and
                    secure Britannia's existing border instead. As a result,
                    Hadrian's wall was built in 122 CE, establishing a
                    permanently fixed boundary between the Romans and
                    Caledonians. The wall served as defense against raids as
                    well as providing the Romans with complete control of the
                    border.
                </p>

                <p className="text-lg mb-4">
                    Despite Agricola's tactical victory, the Battle of Mons
                    Graupius represented the practical limit of Roman expansion
                    northward. Scotland's mountainous terrain, the determined
                    resistance of the Caledonian tribes, and the heavy costs of
                    maintaining distant garrisons made permanent conquest
                    impractical. This battle became a turning point after which
                    Rome accepted the need for a fixed frontier across northern
                    Britain, which would later become Hadrian's Wall.
                </p>

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/90/Calgacus.JPG"
                    alt="Steel engraving of a sketch depicting the speech of Calgacus before the Caledonians at the Battle of Mons Graupius. Credit: https://commons.wikimedia.org/wiki/File:Calgacus.JPG"
                    className="max-w-1/4"
                />
                <NavLink to="/" className="inline-block mt-4 text-blue-600">
                    &larr; Back to Home
                </NavLink>
            </div>
        </div>
    );
}
