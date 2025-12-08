import type { Route } from "./+types/sitemap";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Site Map - Archaeology of Roman Britain" },
        {
            name: "description",
            content:
                "Navigate through all pages of the Archaeology of Roman Britain project."
        }
    ];
}

export default function Sitemap() {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Site Map</h1>
            <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
                Navigate through all pages of the Archaeology of Roman Britain
                project
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Main Pages */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400 border-b-2 pb-2">
                        Main Pages
                    </h2>
                    <ul className="space-y-3">
                        <li>
                            <NavLink
                                to="/"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors flex items-center gap-2"
                            >
                                <span className="text-xl">🏠</span>
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/british-resources"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors flex items-center gap-2"
                            >
                                <span className="text-xl">⛏️</span>
                                <span>British Resources</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/geography"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors flex items-center gap-2"
                            >
                                <span className="text-xl">🗺️</span>
                                <span>Geography</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/culture"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors flex items-center gap-2"
                            >
                                <span className="text-xl">🏛️</span>
                                <span>Culture</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Historical Events */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400 border-b-2 pb-2">
                        Historical Events
                    </h2>
                    <ul className="space-y-3">
                        <li>
                            <NavLink
                                to="/pre-roman-britain"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                            >
                                Pre-Roman Britain
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/first-contact"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                            >
                                First Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/claudius-invasion"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                            >
                                Claudius Invasion
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/boudiccan-revolt"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                            >
                                Boudiccan Revolt
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/mons-graupius"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                            >
                                Battle of Mons Graupius
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/construction-hadrians-wall"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                            >
                                Construction of Hadrian's Wall
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/severan-campaigns"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                            >
                                Severan Campaigns
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/carausian-revolt"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                            >
                                Carausian Revolt
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/proclamation-constantine"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                            >
                                Proclamation of Constantine
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/great-conspiracy"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                            >
                                Great Conspiracy
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/end-roman-rule"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                            >
                                End of Roman Rule
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Archaeological Sites */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400 border-b-2 pb-2">
                        Archaeological Sites
                    </h2>
                    <ul className="space-y-3">
                        <li>
                            <NavLink
                                to="/hadrians-wall"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors flex items-center gap-2"
                            >
                                <span className="text-xl">🧱</span>
                                <span>Hadrian's Wall</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/vindolanda"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors flex items-center gap-2"
                            >
                                <span className="text-xl">🏺</span>
                                <span>Vindolanda</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/vindolanda-tablets"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors flex items-center gap-2"
                            >
                                <span className="text-xl">📜</span>
                                <span>Vindolanda Tablets</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Resources */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-orange-600 dark:text-orange-400 border-b-2 pb-2">
                        Resources & References
                    </h2>
                    <ul className="space-y-3">
                        <li>
                            <NavLink
                                to="/sitemap"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors flex items-center gap-2"
                            >
                                <span className="text-xl">🗂️</span>
                                <span>Site Map</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/works-cited"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors flex items-center gap-2"
                            >
                                <span className="text-xl">📖</span>
                                <span>Works Cited</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-8 text-center">
                <NavLink
                    to="/"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline"
                >
                    &larr; Back to Home
                </NavLink>
            </div>
        </div>
    );
}
