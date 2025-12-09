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
                        roads and everyday objects. Below are links to explore
                        the culture, geography, resources, and key
                        archaeological sites of Roman Britain.
                    </p>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Learn More About:
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Internal Links */}
                            <NavLink
                                to="british-resources"
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
                                    <svg
                                        className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
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
                                    <svg
                                        className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </NavLink>

                            <NavLink
                                to="culture"
                                className="group relative overflow-hidden rounded-lg bg-linear-to-r from-green-500 to-green-600 p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-green-700"
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
                                    <svg
                                        className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
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
                                    <svg
                                        className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </NavLink>

                            <NavLink
                                to="hadrians-wall"
                                className="group relative overflow-hidden rounded-lg bg-linear-to-r from-red-500 to-red-600 p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-red-600 hover:to-red-700"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            Hadrian's Wall
                                        </h3>
                                        <p className="text-sm text-red-100 mt-1">
                                            The iconic Roman fortification
                                        </p>
                                    </div>
                                    <svg
                                        className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </NavLink>

                            <NavLink
                                to="vindolanda"
                                className="group relative overflow-hidden rounded-lg bg-linear-to-r from-teal-500 to-teal-600 p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-teal-600 hover:to-teal-700"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            Vindolanda Fort
                                        </h3>
                                        <p className="text-sm text-teal-100 mt-1">
                                            Deep dive into Vindolanda
                                        </p>
                                    </div>
                                    <svg
                                        className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="order-first md:order-last">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Vindolanda_bathhouse_-_2007-05-19.jpg/1024px-Vindolanda_bathhouse_-_2007-05-19.jpg"
                        alt="Military bathhouse at Vindolanda"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                        Military bathhouse at Vindolanda Roman fort near
                        Hadrian's Wall. Credit: Wikimedia Commons
                    </p>
                </div>
            </section>

            <section className="mt-12 mb-8">
                <div className="bg-linear-to-r from-indigo-900 to-purple-800 rounded-lg p-8 shadow-xl text-white">
                    <div className="flex items-start gap-4">
                        <div className="shrink-0">
                            <svg
                                className="w-12 h-12 text-amber-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3">
                                Why Study Roman Britain?
                            </h3>
                            <p className="text-lg leading-relaxed text-indigo-50">
                                Studying Roman Britain reveals crucial insights
                                into imperial expansion, cultural exchange, and
                                technological innovation. Through archaeological
                                evidence, we understand how Roman and Celtic
                                societies interacted, how infrastructure
                                transformed landscapes, and how material culture
                                reflects social change across nearly four
                                centuries of occupation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Timeline />
        </>
    );
}
