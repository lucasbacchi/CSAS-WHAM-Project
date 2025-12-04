import { NavLink } from "react-router";

export default function MonsGraupius() {
    return (
        <div className="flex flex-row p-6 gap-4 min-h-screen items-stretch">
            <div>
                <h2 className="text-2xl font-semibold mb-4">The Battle of Mons Graupius</h2>
                <p className="mb-4">
                    The battle of Mons Graupius, known primarily the writings of Tacitus, was a confrontation between Governor Gnaues Julius Agricola, and his forces, and the Caledonians. The battle was fought somewhere in northern Scotland with its location being a point of debate. The accounts of the battle have been scrutinized for potentially embellishing the nature of the victory.
                </p>
                <p className="mb-4">
                    Mons Graupius was a significant military effort with estimates placing the Roman army between 17,000 and 30,000. The opposing force, often cited to be led by Calgacus, is stated to be over 30,000 strong. During the battle a decisive flanking maneuver would lead to the pursuit of the remaining Caledonian forces into the woods. The Battle of Mons Graupius would foreshadow the need for construction of something like Hadrian's wall.
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
