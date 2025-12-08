import type { Route } from "./+types/resources";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Resources of Roman Britain" },
        {
            name: "description",
            content:
                "Explore the wealth of natural resources and economic activities in Roman Britain."
        }
    ];
}

export default function Resources() {
    return (
        <div className="flex flex-row p-6 gap-4 min-h-screen items-stretch">
            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    The Wealth of Resources in Roman Britain
                </h2>
                <p className="text-lg mb-4">
                    The Roman economy in Britain was mainly agrarian (the
                    cultivation of land), with the army’s needs increasing
                    production. However, this was not the only way British rome
                    brought economic value to the empire.
                </p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingLeft: "40px",
                        paddingBottom: "20px"
                    }}
                >
                    <ul className="list-disc">
                        <li className="list-disc">
                            Agriculture: Since the lowlands were ideal for
                            growing grain, they were taxed heavily to feed the
                            troops
                        </li>
                        <li className="list-disc">
                            Mining: There was a large amount of extraction of
                            lead, iron, and silver from mines in various
                            districts.
                        </li>
                        <li className="list-disc">
                            Trade: Britain exported wheat, wool, and minerals.
                            The Romans also imported luxury goods such as wine
                            and tableware.
                        </li>
                    </ul>
                </div>

                <div className="flex items-stretch justify-around">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Roman.Britain.Mining.jpg"
                        alt="Roman Britain — Industrial Mining. Credit: https://en.wikipedia.org/wiki/File:Roman.Britain.Mining.jpg"
                        className="inline-block rounded max-w-1/4"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/67/Roman_Britain_410.jpg"
                        alt="Roman Britannia about 410. Credit: https://commons.wikimedia.org/wiki/File:Roman_Britain_410.jpg"
                        className="inline-block rounded max-w-1/4"
                    />
                </div>
                <div className={"flex items-center justify-center"}>
                    <NavLink to="/" className="inline-block mt-4 text-blue-600">
                        &larr; Back to Home
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
