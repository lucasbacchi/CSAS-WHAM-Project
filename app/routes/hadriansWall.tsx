import { NavLink } from "react-router";

export default function HadriansWall() {
    return (
        <div className="flex flex-row p-6 gap-4 min-h-screen items-stretch">
            <div>
                <h2 className="text-2xl font-semibold mb-4">Hadrian's Wall</h2>
                <p className="mb-4">
                    Hadrian's Wall was a defensive fortification in the Roman
                    province of Britannia, begun in AD 122 during the rule of
                    Emperor Hadrian. It stretched across the width of northern
                    Britain, from the banks of the River Tyne near the North Sea
                    to the Solway Firth on the Irish Sea. The wall was built to
                    protect the Roman province from the tribes in what is now
                    Scotland and to control movement across the frontier.
                </p>
                <p className="mb-4">
                    The wall was approximately 73 miles (117 kilometers) long
                    and featured a series of forts, milecastles, and turrets
                    along its length. It was constructed using stone and turf,
                    with a significant garrison of Roman soldiers stationed at
                    various points along the wall. Hadrian's Wall served both
                    military and administrative purposes, acting as a symbol of
                    Roman power and control.
                </p>
                <p className="mb-4">
                    Beyond its military function, Hadrian's Wall served as a
                    customs border where goods and people could be taxed and
                    monitored. Civilian settlements flourished around the major
                    forts, creating economic opportunities for traders,
                    craftspeople, and service workers. The wall's maintenance
                    required constant supply lines and repairs, stimulating
                    local economic activity. Archaeological evidence reveals
                    that the wall facilitated cultural exchange between Roman
                    and native British peoples, with mixed-origin families
                    living in the settlements near the fortifications.
                </p>
                <table className="table-auto border-collapse border border-gray-400 mb-4">
                    <thead>
                        <tr>
                            <th className="border px-2 py-1 text-left">
                                Feature
                            </th>
                            <th className="border px-2 py-1 text-left">
                                Hadrian's Wall
                            </th>
                            <th className="border px-2 py-1 text-left">
                                Antonine Wall
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-2 py-1">Date Started</td>
                            <td className="border px-2 py-1">AD 122</td>
                            <td className="border px-2 py-1">AD 142</td>
                        </tr>
                        <tr>
                            <td className="border px-2 py-1">Material</td>
                            <td className="border px-2 py-1">Stone (mostly)</td>
                            <td className="border px-2 py-1">Turf/Earth</td>
                        </tr>
                        <tr>
                            <td className="border px-2 py-1">Length</td>
                            <td className="border px-2 py-1">
                                73 miles (80 Roman miles)
                            </td>
                            <td className="border px-2 py-1">37 miles</td>
                        </tr>
                        <tr>
                            <td className="border px-2 py-1">Location</td>
                            <td className="border px-2 py-1">
                                Tyne–Solway (Northern England)
                            </td>
                            <td className="border px-2 py-1">
                                Forth–Clyde (Central Scotland)
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-2 py-1">Lifespan</td>
                            <td className="border px-2 py-1">~300 years</td>
                            <td className="border px-2 py-1">~20 years</td>
                        </tr>
                    </tbody>
                </table>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Hadrians_Wall_map.svg"
                    alt="Map of Hadrian's Wall. Credit: https://commons.wikimedia.org/wiki/File:Hadrians_Wall_map.svg"
                    className="max-w-1/4"
                />
                <NavLink to="/" className="inline-block mt-4 text-blue-600">
                    &larr; Back to Home
                </NavLink>
            </div>
            <div className="max-w-1/3 min-w-1/4 aspect-4561/6842">
                <iframe
                    data-original-width="4561"
                    data-original-height="6842"
                    src="https://www.thinglink.com/view/scene/2049977828786569893"
                    className="border-none aspect-4561/6842 w-full sticky top-10"
                    allowFullScreen
                ></iframe>
                <script
                    async
                    src="//cdn.thinglink.me/jse/responsive.js"
                ></script>
            </div>
        </div>
    );
}
