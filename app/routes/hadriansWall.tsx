import { NavLink } from "react-router";

export default function HadriansWall() {
    return (
        <div className="flex flex-row p-6 gap-6 min-h-screen items-stretch max-w-7xl mx-auto">
            <div className="flex-1">
                <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                    Hadrian's Wall
                </h1>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                        Overview
                    </h2>
                    <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        Hadrian's Wall was a defensive fortification in the
                        Roman province of Britannia, begun in AD 122 during the
                        rule of Emperor Hadrian. It stretched across the width
                        of northern Britain, from the banks of the River Tyne
                        near the North Sea to the Solway Firth on the Irish Sea.
                        The wall was built to protect the Roman province from
                        the tribes in what is now Scotland and to control
                        movement across the frontier.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        The wall was approximately 73 miles (117 kilometers)
                        long and featured a series of forts, milecastles, and
                        turrets along its length. It was constructed using stone
                        and turf, with a significant garrison of Roman soldiers
                        stationed at various points along the wall. Hadrian's
                        Wall served both military and administrative purposes,
                        acting as a symbol of Roman power and control.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                        Economic and Cultural Impact
                    </h2>
                    <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        Beyond its military function, Hadrian's Wall served as a
                        customs border where goods and people could be taxed and
                        monitored. Civilian settlements flourished around the
                        major forts, creating economic opportunities for
                        traders, craftspeople, and service workers. The wall's
                        maintenance required constant supply lines and repairs,
                        stimulating local economic activity. Archaeological
                        evidence reveals that the wall facilitated cultural
                        exchange between Roman and native British peoples, with
                        mixed-origin families living in the settlements near the
                        fortifications.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                        Comparison: Hadrian's Wall vs Antonine Wall
                    </h2>
                    <table className="table-auto border-collapse border border-gray-300 dark:border-gray-600 w-full">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">
                                    Feature
                                </th>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">
                                    Hadrian's Wall
                                </th>
                                <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">
                                    Antonine Wall
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">
                                    Date Started
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                    AD 122
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                    AD 142
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">
                                    Material
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                    Stone (mostly)
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                    Turf/Earth
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">
                                    Length
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                    73 miles (80 Roman miles)
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                    37 miles
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">
                                    Location
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                    Tyne–Solway (Northern England)
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                    Forth–Clyde (Central Scotland)
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium">
                                    Lifespan
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                    ~300 years
                                </td>
                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                    ~20 years
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                        Roman Frontier Walls in Britain
                    </h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        This map illustrates the two major Roman frontier walls
                        constructed in Britain. The southern wall is Hadrian's
                        Wall, built beginning in AD 122 under Emperor Hadrian.
                        It spans approximately 73 miles from the River Tyne in
                        the east to the Solway Firth in the west across northern
                        England. The northern wall is the Antonine Wall,
                        constructed starting in AD 142 under Emperor Antoninus
                        Pius. This shorter wall stretched about 37 miles across
                        central Scotland from the Firth of Forth to the Firth of
                        Clyde. While Hadrian's Wall was primarily built of stone
                        and remained in use for nearly 300 years, the Antonine
                        Wall was constructed of turf and earth and was only
                        occupied for approximately 20 years before the Romans
                        retreated back to Hadrian's Wall as the primary northern
                        frontier.
                    </p>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Hadrians_Wall_map.svg"
                        alt="Map showing both Hadrian's Wall and the Antonine Wall in Britain"
                        className="w-full max-w-lg mx-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 italic text-center">
                        Map credit:{" "}
                        <a
                            href="https://commons.wikimedia.org/wiki/File:Hadrians_Wall_map.svg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Wikimedia Commons
                        </a>
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex gap-4 flex-wrap">
                    <NavLink
                        to="/"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                        ← Back to Home
                    </NavLink>
                    <NavLink
                        to="/geography"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                        Explore Geography & Culture →
                    </NavLink>
                </div>
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
