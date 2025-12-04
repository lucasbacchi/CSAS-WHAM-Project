import type { Route } from "./+types/home";
import { NavLink } from "react-router";
import Timeline from "./timeline";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Archaeology of Roman Britain" },
        {
            name: "Brief description",
            content:
                "An introduction to key sites, finds, and methods used to study Roman Britain."
        }
    ];
}

export default function Home() {
    return (
        <>
            <section className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                    <h1 className="text-4xl font-semibold">
                        Archaeology of Roman Britain
                    </h1>
                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                        The Roman presence in Britain (c. 43-410 AD) left a
                        layered archaeological record of towns, forts, villas,
                        roads and everyday objects. Below are key sites, common
                        finds, and the methods archaeologists use to interpret
                        the past.
                    </p>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Learn More About:
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Internal Links */}
                            <NavLink 
                                to="British-Resources"
                                className="group relative overflow-hidden rounded-lg bg-linear-to-r from-blue-500 to-blue-600 p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            Early Britain's Resources
                                        </h3>
                                        <p className="text-sm text-blue-100 mt-1">
                                            Explore the wealth of Roman Britain
                                        </p>
                                    </div>
                                    <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </NavLink>

                            <NavLink 
                                to="geography"
                                className="group relative overflow-hidden rounded-lg bg-linear-to-r from-purple-500 to-purple-600 p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-purple-700"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            Geography of Roman Britain
                                        </h3>
                                        <p className="text-sm text-purple-100 mt-1">
                                            Explore the landscape and resources
                                        </p>
                                    </div>
                                    <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </NavLink>

                            <NavLink 
                                to="culture"
                                className="group relative overflow-hidden rounded-lg bg-linear-to-r from-pink-500 to-pink-600 p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:to-pink-700"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            Culture of Roman Britain
                                        </h3>
                                        <p className="text-sm text-pink-100 mt-1">
                                            Discover art, religion, and language
                                        </p>
                                    </div>
                                    <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </NavLink>

                            <NavLink 
                                to="vindolanda-tablets"
                                className="group relative overflow-hidden rounded-lg bg-linear-to-r from-amber-500 to-amber-600 p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:to-amber-700"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            Roman Artifacts
                                        </h3>
                                        <p className="text-sm text-amber-100 mt-1">
                                            Explore the Vindolanda Tablets
                                        </p>
                                    </div>
                                    <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="order-first md:order-last">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/84/Vindolanda_bathhouse_-_2007-05-19.jpg"
                        alt="Military bathhouse at Vindolanda"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                        Military bathhouse at Vindolanda Roman fort near Hadrian's Wall. Credit: Wikimedia Commons
                    </p>
                </div>
            </section>

            {/*<section className="mt-12 grid gap-8 md:grid-cols-3">
                <article className="rounded-lg border p-6 shadow-sm bg-white dark:bg-gray-800">
                    <h3 className="text-xl font-semibold">Key Sites</h3>
                    <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li>
                            <strong>Hadrian's Wall</strong> — Frontier with
                            forts, milecastles and civilian settlements.
                        </li>
                        <li>
                            <strong>Vindolanda</strong> — Fort and settlement
                            noted for wooden writing tablets and organic
                            preservation.
                        </li>
                        <li>
                            <strong>Bath (Aquae Sulis)</strong> — Spa-town built
                            around thermal springs and monumental baths.
                        </li>
                        <li>
                            <strong>Fishbourne</strong> — Large Roman residence
                            famous for mosaics and formal gardens.
                        </li>
                    </ul>
                </article>

                <article className="rounded-lg border p-6 shadow-sm bg-white dark:bg-gray-800">
                    <h3 className="text-xl font-semibold">Common Finds</h3>
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                        Pottery, coins, inscriptions, mosaics, building
                        foundations, and organic remains provide dating,
                        economic context and insight into daily life.
                    </p>
                </article>

                <article className="rounded-lg border p-6 shadow-sm bg-white dark:bg-gray-800">
                    <h3 className="text-xl font-semibold">Methods</h3>
                    <ul className="mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <li>Stratigraphic excavation and careful recording</li>
                        <li>
                            Geophysical survey (magnetometry, resistivity) and
                            LiDAR
                        </li>
                        <li>Radiocarbon and dendrochronology dating</li>
                        <li>
                            Environmental sampling and specialist conservation
                        </li>
                    </ul>
                </article>
            </section>*/}

            <section className="rounded-lg p-6">
                <article className="rounded-lg border p-6 shadow-sm bg-white dark:bg-gray-800">
                    <h3 className="text-xl font-semibold">Why It Matters</h3>
                    <p>
                        Studying Roman Britain helps us understand contacts
                        between imperial systems and local communities,
                        technological transfer, and changing landscapes.
                        Archaeology connects material culture to social
                        histories and long-term environmental change.
                    </p>
                </article>
            </section>
            <Timeline />
        </>
    );
}
