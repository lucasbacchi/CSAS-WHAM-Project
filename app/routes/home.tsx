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

                    <div className="mt-6 flex flex-wrap gap-3">
                        <h1 className="text-3xl font-semibold">Learn about: </h1>
                        <div className="mt-6 flex flex-wrap gap-3">

                                <a
                                    className="inline-block rounded-full border border-gray-200 text-white px-4 py-2 text-sm hover:opacity-90"
                                >
                                    <NavLink to={"British-Resources"}>
                                        Early Britain's Resources
                                    </NavLink>
                                </a>
                                <a
                                    className="inline-block rounded-full border border-gray-200 text-white px-4 py-2 text-sm hover:opacity-90"
                                >
                                    <NavLink to={"geography-culture"}>
                                        Geography and Culture
                                    </NavLink>
                                </a>
                                <a
                                    className="inline-block rounded-full border border-gray-200 text-white px-4 py-2 text-sm hover:opacity-90"
                                    href="https://www.britishmuseum.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    British Museum
                                </a>
                                <a
                                    className="inline-block rounded-full border border-gray-200 text-white px-4 py-2 text-sm hover:opacity-90"
                                    href="https://www.vindolanda.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Vindolanda Trust
                                </a>
                                {/*
                        <NavLink
                            to="/timeline"
                            className="inline-block rounded-full border border-gray-200 text-white px-4 py-2 text-sm hover:opacity-90"
                        >
                            The Timeline
                        </NavLink>*/}

                        </div>
                    </div>
                </div>

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/84/Vindolanda_bathhouse_-_2007-05-19.jpg"
                    alt="Military bathhouse at Vindolanda. Credit: https://commons.wikimedia.org/wiki/File:Vindolanda_bathhouse_-_2007-05-19.jpg"
                    className="order-first md:order-last flex justify-center w-full h-auto rounded-lg shadow-md"
                />
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
