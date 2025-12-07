import { NavLink } from "react-router";

export default function Culture() {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">
                Culture of Roman Britain
            </h1>

            {/* Hero Image - Art Example */}
            <div className="mb-8">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Fishbourne_Roman_Palace_Mosaics_%2848203956862%29.jpg"
                    alt="Roman mosaic from Fishbourne Palace showing artistic craftsmanship"
                    className="w-full max-w-1/2 mx-auto h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                    Roman mosaic from Fishbourne Roman Palace, West Sussex - an
                    example of Roman artistic achievement in Britain. Credit:
                    Wikimedia Commons
                </p>
            </div>

            {/* Culture Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 border-b-2 pb-2">
                    Cultural Aspects of Roman Britain
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">
                            Religion
                        </h3>
                        <p>
                            There was a variety of religious cults, and people
                            practiced Roman paganism. However, Christianity
                            quickly took control as the main religion of
                            Britain. Many pagan temples and shrines were
                            converted into churches, and Christianity became the
                            dominant religion in post-Roman Britain.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-orange-600 dark:text-orange-400">
                            Language
                        </h3>
                        <p>
                            The language of the town populations was mostly
                            Latin, which became the language of administration,
                            commerce, and the educated classes throughout Roman
                            Britain.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-teal-600 dark:text-teal-400">
                            Art
                        </h3>
                        <p>
                            Art included works made in Britain by British
                            craftsmen as well as those made by artists from the
                            Mediterranean and the Middle East. Roman Britain
                            featured sculpture, fresco painting, mosaics, and
                            carved objects.
                        </p>
                    </div>
                </div>

                {/* Detailed Religion Section */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                        Religious Life
                    </h3>
                    <p className="mb-4">
                        Roman Britain was characterized by religious diversity.
                        Before Christianity's rise, the region was home to a
                        complex mix of Celtic deities, Roman gods, and various
                        mystery religions imported from across the empire.
                    </p>
                    <p className="mb-4">
                        The Romans were generally tolerant of local religious
                        practices, often syncretizing Celtic and Roman deities.
                        For example, the goddess Sulis was merged with Minerva
                        at Bath, creating Sulis Minerva. However, Christianity's
                        spread in the 4th century CE dramatically changed the
                        religious landscape.
                    </p>
                    <p>
                        As Christianity became the official religion of the
                        Roman Empire, pagan temples were either destroyed or
                        converted into Christian churches. This religious
                        transformation had lasting effects on British culture,
                        with Christianity remaining dominant throughout the
                        post-Roman period.
                    </p>
                </div>

                {/* Detailed Language Section */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-orange-600 dark:text-orange-400">
                        Language and Literacy
                    </h3>
                    <p className="mb-4">
                        Latin was the primary language of Roman administration,
                        law, and commerce in Britain. Urban populations,
                        particularly the elite and educated classes, adopted
                        Latin as their main language. This linguistic shift was
                        most pronounced in towns and military settlements.
                    </p>
                    <p className="mb-4">
                        However, in rural areas, Celtic languages (Brittonic)
                        continued to be spoken alongside Latin. The coexistence
                        of these languages created a bilingual society in many
                        parts of Roman Britain.
                    </p>
                    <p>
                        Literacy in Latin opened doors to administrative
                        positions and social advancement. Evidence of Latin
                        literacy can be found in numerous inscriptions on
                        buildings, tombstones, and the famous Vindolanda
                        tablets, which preserve everyday correspondence and
                        military records.
                    </p>
                </div>

                {/* Detailed Art Section */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-teal-600 dark:text-teal-400">
                        Art and Architecture
                    </h3>
                    <p className="mb-4">
                        Roman Britain developed a distinctive artistic tradition
                        that blended Roman techniques with local Celtic styles.
                        This cultural fusion is evident in various art forms:
                    </p>
                    <ul className="space-y-3 mb-4">
                        <li className="flex items-start">
                            <span className="text-teal-500 mr-2">▪</span>
                            <div>
                                <strong>Mosaics:</strong> Elaborate floor
                                mosaics featuring geometric patterns,
                                mythological scenes, and natural motifs adorned
                                wealthy villas and public buildings.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-teal-500 mr-2">▪</span>
                            <div>
                                <strong>Sculpture:</strong> Stone sculptures
                                ranged from military monuments to religious
                                statuary, often showing a mix of Roman realism
                                and Celtic abstraction.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-teal-500 mr-2">▪</span>
                            <div>
                                <strong>Frescoes:</strong> Wall paintings
                                decorated public and private buildings, though
                                fewer survive compared to continental examples.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-teal-500 mr-2">▪</span>
                            <div>
                                <strong>Metalwork:</strong> Skilled craftsmen
                                produced intricate jewelry, weapons, and
                                household items combining Roman and Celtic
                                designs.
                            </div>
                        </li>
                    </ul>
                    <p>
                        While some artists were imported from the Mediterranean
                        and Middle East, a vibrant local artistic tradition
                        developed. British craftsmen adapted Roman techniques to
                        create works that reflected both imperial culture and
                        local tastes.
                    </p>
                </div>
            </section>

            {/* Cultural Impact Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 border-b-2 pb-2">
                    Cultural Legacy
                </h2>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6">
                    <p className="mb-4">
                        The cultural impact of Roman Britain extended far beyond
                        the end of Roman rule in 410 CE. Latin remained the
                        language of the Church and scholarship throughout the
                        medieval period. Christian institutions established
                        during Roman times formed the foundation of British
                        ecclesiastical organization.
                    </p>
                    <p>
                        Roman artistic and architectural techniques influenced
                        British design for centuries. The synthesis of Celtic
                        and Roman cultural elements created a unique
                        British-Roman identity that shaped the island's cultural
                        development long after the legions departed.
                    </p>
                </div>
            </section>

            <NavLink
                to="/"
                className="inline-block mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
                &larr; Back to Home
            </NavLink>
        </div>
    );
}
