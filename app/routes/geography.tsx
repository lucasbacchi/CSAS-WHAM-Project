import { NavLink } from "react-router";

export default function Geography() {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">
                Geography of Roman Britain
            </h1>

            {/* Hero Image */}
            <div className="mb-8">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/01/Map_of_Roman_Britain.jpg"
                    alt="Map of Roman Britain showing major settlements and roads"
                    className="w-full max-w-1/2 mx-auto h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                    Map of Roman Britain showing major settlements and roads.
                    Credit: Wikimedia Commons
                </p>
            </div>

            {/* Interactive Map */}
            <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-center">
                    Interactive Map of Roman Britain
                </h2>
                <div className="flex justify-center">
                    <iframe
                        src="https://www.google.com/maps/d/u/0/embed?mid=1LSHNzLcBU35NrgYdrKrKMBjRYcNQ0d0&ehbc=2E312F"
                        width="640"
                        height="480"
                        className="rounded-lg shadow-lg w-full max-w-4xl"
                        title="Interactive map of Roman Britain"
                    />
                </div>
            </div>

            {/* Geography Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-4 border-b-2 pb-2">
                    Regional Geography and Resources
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-3">
                            Geographic Divisions
                        </h3>
                        <p className="mb-4">
                            Britain was divided into two main regions:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">▪</span>
                                <div>
                                    <strong>Lowlands:</strong> The south, east,
                                    and midlands were flat and suitable for
                                    farming/agriculture while being open to the
                                    continent.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">▪</span>
                                <div>
                                    <strong>Uplands:</strong> Devon, Cornwall,
                                    Wales, and northern England, which were more
                                    than 600 feet above sea level. They had deep
                                    valleys and mountainous terrain.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-3">
                            Resources and Economy
                        </h3>
                        <p className="mb-4">
                            The Roman economy in Britain was mainly agrarian
                            (the cultivation of land), with the army's needs
                            increasing production.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">▪</span>
                                <div>
                                    <strong>Agriculture:</strong> Lowlands ideal
                                    for growing grain, heavily taxed to feed
                                    troops.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">▪</span>
                                <div>
                                    <strong>Mining:</strong> Extraction of lead,
                                    iron, and silver from various districts.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">▪</span>
                                <div>
                                    <strong>Trade:</strong> Britain exported
                                    wheat, wool, and minerals; imported luxury
                                    goods.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-3">
                        Administration and Military
                    </h3>
                    <p className="mb-4">
                        The Romans initially governed the whole of Britain as a
                        single province, but later divided it into multiple
                        provinces:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-semibold text-red-600 dark:text-red-400">
                                Military Areas
                            </h4>
                            <p>
                                The uplands served as military frontiers, with
                                forts and strategic roads.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-blue-600 dark:text-blue-400">
                                Civil Areas
                            </h4>
                            <p>
                                The lowlands were the scene of civil life, with
                                towns and country houses.
                            </p>
                        </div>
                    </div>
                    <p className="mt-4">
                        The Roman Army played a critical role in the economic
                        development of frontier regions, encouraging cereal
                        production and the growth of settlements. The Roman road
                        system was critical for military control and efficient
                        administration.
                    </p>
                </div>

                <p className="text-sm italic text-gray-600 dark:text-gray-400">
                    Resource: Britannica Editors. "Roman Britain". Encyclopedia
                    Britannica, 11 Sep. 2025,
                    https://www.britannica.com/place/Roman-Britain. Accessed 18
                    November 2025.
                </p>
            </section>

            {/* Major Sites Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 border-b-2 pb-2">
                    Major Regional Sites
                </h2>

                <div className="space-y-8">
                    {/* Londinium */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/2/26/Remains_of_Roman_Wall_-_geograph.org.uk_-_4232928.jpg"
                                    alt="Remains of the Roman Wall in London"
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                            <div className="p-6 md:w-1/2">
                                <h3 className="text-2xl font-semibold mb-3">
                                    Londinium (London)
                                </h3>
                                <p>
                                    Established by the Romans north of the
                                    valley of the Thames, Londinium quickly
                                    became a center of commerce filled with
                                    traders. It was sacked by Iceni tribesmen
                                    under Queen Boudicca in 60 CE but was later
                                    reconstructed with significant structures
                                    like a great basilica. By the 3rd century,
                                    Londinium was enclosed by a defensive wall
                                    and had timber harbors with rebuilt public
                                    buildings.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Hadrian's Wall */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <div className="md:flex md:flex-row-reverse">
                            <div className="md:w-1/2">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Hadrian%27s_Wall_west_of_Housesteads_3.jpg"
                                    alt="Hadrian's Wall stretching across the northern frontier"
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                            <div className="p-6 md:w-1/2">
                                <h3 className="text-2xl font-semibold mb-3">
                                    Hadrian's Wall
                                </h3>
                                <p>
                                    A massive earthwork that stretches across
                                    the northern frontier of Britain, it was
                                    built to protect against invasions and
                                    control the border between Roman Britannia
                                    and Caledonia.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Roman Baths */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Ba%C3%B1os_Romanos%2C_Bath%2C_Inglaterra%2C_2014-08-12%2C_DD_39-41_HDR.JPG"
                                    alt="The Roman Baths in Bath"
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                            <div className="p-6 md:w-1/2">
                                <h3 className="text-2xl font-semibold mb-3">
                                    Roman Baths
                                </h3>
                                <p>
                                    A well-preserved Roman bathhouse that was
                                    built around naturally hot springs in the
                                    1st century. The site showcases the
                                    sophisticated engineering and social
                                    importance of bathing in Roman culture.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Other Sites Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-3">
                                Camulodunnum
                            </h3>
                            <p>
                                The first capital of the Roman province of
                                Britannia, located in the heart of the county of
                                Essex. An important military and civilian center
                                in the early years of Roman occupation.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-3">
                                Aesica
                            </h3>
                            <p>
                                A Roman fort built in order to protect the
                                Ravenglass to Brougham Roman Road and serve as a
                                supply base for Hadrian's Wall, demonstrating
                                the strategic military network.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <NavLink
                to="/"
                className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                &larr; Back to Home
            </NavLink>
        </div>
    );
}
