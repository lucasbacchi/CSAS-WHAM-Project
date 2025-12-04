import { NavLink } from "react-router";

export default function VindolandaTablets() {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">
                The Vindolanda Tablets: Artifacts of Roman Britain
            </h1>

            {/* Hero Image */}
            <div className="mb-8">
                <img
                    src="https://www.britishmuseum.org/sites/default/files/styles/uncropped_huge/public/2023-12/Vindolanda%20tablet%20intelligence%20report%20600%20x%20732.png?itok=lHflfJC8"
                    alt="Vindolanda writing tablet showing ancient handwriting"
                    className="w-full max-w-1/2 mx-auto h-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                    A Vindolanda tablet showing Roman cursive script. Credit: British Museum
                </p>
            </div>

            {/* Introduction */}
            <section className="mb-12">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
                    <h2 className="text-3xl font-semibold mb-4 border-b-2 pb-2">
                        What are the Vindolanda Tablets?
                    </h2>
                    <p className="text-lg mb-4">
                        The Vindolanda tablets are the oldest surviving hand written tablets from Roman Britain, with most dating 
                        back to around 100 AD. They're made of thin, postcard-sized sheets of wood that were written on using a 
                        carbon-based ink, documenting life on the northern frontier of Britannia.
                    </p>
                    <p className="text-lg">
                        The content on them includes official military matters and personal messages to and from commanding officers, 
                        their families, and even slaves. These tablets provide an unprecedented glimpse into the daily lives of people 
                        living on the Roman frontier and are among the most important archaeological finds in Britain.
                    </p>
                </div>
            </section>

            {/* Discovery and Preservation */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 border-b-2 pb-2">
                    Discovery and Preservation
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                            The Discovery
                        </h3>
                        <p className="mb-3">
                            The tablets were first discovered in 1973 when archaeologist Robin Birley and his student excavator 
                            Keith Liddell found some at the Vindolanda fort near Hadrian's Wall. The waterlogged, anaerobic 
                            conditions at the site preserved the thin wooden tablets that would normally have decayed long ago.
                        </p>
                        <p>
                            As of 2023, more than 1,700 tablets have been recovered, making this one of the most significant 
                            archives of Roman documents outside of Egypt. A majority of them are held at the British Museum with 
                            arrangements for some to be displayed at Vindolanda.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">
                            Remarkable Preservation
                        </h3>
                        <p className="mb-3">
                            The unique soil conditions at Vindolanda—wet, oxygen-free, and with specific chemical properties—
                            allowed organic materials like wood, leather, and textiles to survive for nearly 2,000 years.
                        </p>
                        <p>
                            Modern conservation techniques, including infrared photography and digital imaging, have made 
                            it possible to read faded text that is invisible to the naked eye, revealing hidden messages 
                            from the Roman past.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content of the Tablets */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 border-b-2 pb-2">
                    What the Tablets Tell Us
                </h2>

                <div className="space-y-6">
                    <div className="bg-linear-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 shadow-md">
                        <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400">
                            Personal Letters
                        </h3>
                        <p className="mb-3">
                            Perhaps the most famous tablet is the birthday invitation from Claudia Severa to Sulpicia Lepidina, 
                            wife of the fort's commander. This personal letter, written around AD 100, is one of the earliest 
                            known examples of writing in Latin by a woman.
                        </p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded italic text-gray-700 dark:text-gray-300">
                            "...I give you a warm invitation to make sure that you come to us, to make the day more enjoyable 
                            for me by your arrival..."
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                            <h4 className="text-lg font-semibold mb-3 text-amber-600 dark:text-amber-400">
                                Military Records
                            </h4>
                            <p className="text-sm">
                                Strength reports, duty rosters, requests for leave, and reports on troop movements 
                                provide detailed insight into military organization and daily routines at the frontier.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                            <h4 className="text-lg font-semibold mb-3 text-teal-600 dark:text-teal-400">
                                Supply Lists
                            </h4>
                            <p className="text-sm">
                                Inventories of food, clothing, and equipment reveal what soldiers ate, wore, and used. 
                                Lists mention items like beer, fish sauce, venison, and even birthday gifts.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                            <h4 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">
                                Accounts and Orders
                            </h4>
                            <p className="text-sm">
                                Financial records, purchase orders, and business correspondence show the economic 
                                activities and trade networks connecting Vindolanda to the wider Roman Empire.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Historical Significance */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 border-b-2 pb-2">
                    Historical Significance
                </h2>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <span className="text-blue-500 text-2xl mr-3">▪</span>
                            <div>
                                <h4 className="font-semibold text-lg mb-2">Window into Daily Life</h4>
                                <p>
                                    Unlike formal inscriptions or literary texts, the Vindolanda tablets capture informal, 
                                    everyday writing. They reveal the personalities, concerns, and relationships of ordinary 
                                    people living on the Roman frontier.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <span className="text-green-500 text-2xl mr-3">▪</span>
                            <div>
                                <h4 className="font-semibold text-lg mb-2">Linguistic Treasure</h4>
                                <p>
                                    The tablets preserve colloquial Latin, including spelling variations, slang, and regional 
                                    expressions not found in formal literature. They provide invaluable evidence for how Latin 
                                    was actually spoken and written in the provinces.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <span className="text-purple-500 text-2xl mr-3">▪</span>
                            <div>
                                <h4 className="font-semibold text-lg mb-2">Social Insights</h4>
                                <p>
                                    The tablets reveal information about gender roles, social hierarchies, literacy levels, 
                                    and the presence of families at military sites. They show that Roman frontier life was 
                                    more complex and social than previously understood.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <span className="text-amber-500 text-2xl mr-3">▪</span>
                            <div>
                                <h4 className="font-semibold text-lg mb-2">Archaeological Innovation</h4>
                                <p>
                                    The discovery and study of the Vindolanda tablets have revolutionized archaeological 
                                    methods for preserving and analyzing organic materials. Techniques developed for these 
                                    tablets are now used worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 border-b-2 pb-2">
                    Notable Examples
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://media.britishmuseum.org/media/Repository/Documents/2023_6/12_13/d5d6204f_5f36_422e_8ea1_b01f00d696a3/mid_BCB89907.jpg"
                            alt="Vindolanda tablet from British Museum collection"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h4 className="font-semibold text-lg mb-2">Military Correspondence</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                An example of official military correspondence preserved on a wooden tablet, 
                                showcasing the administrative record-keeping of the Roman army.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://www.britishmuseum.org/sites/default/files/styles/1_1_media_small/public/2023-08/Vindolanda%20writing%20tablet%2C%201920%20x%201080.jpg?h=d1cb525d&itok=3HC7qWkm"
                            alt="Close-up of Vindolanda writing tablet"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h4 className="font-semibold text-lg mb-2">Preserved Writing Detail</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                A close-up view showing the remarkable detail of the carbon-based ink script 
                                preserved on the thin wooden sheets after nearly 2,000 years.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learn More Section */}
            <section className="mb-12">
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Where to Learn More</h3>
                    <p className="mb-4">
                        A majority of the Vindolanda tablets are housed at the British Museum in London, with arrangements 
                        for some to be displayed at Vindolanda. The Vindolanda Trust continues archaeological work at the 
                        site, and new discoveries are regularly made.
                    </p>
                    <p className="mb-4">
                        Digital archives of the tablets are available online, allowing researchers and the public to 
                        explore these remarkable documents and read translations of the ancient text.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Resource: <a 
                            href="https://www.britishmuseum.org/collection/galleries/roman-britain/vindolanda-tablets" 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            British Museum - Vindolanda Tablets Collection
                        </a>
                    </p>
                </div>
            </section>

            {/* Related Content Section */}
            <section className="mb-12">
                <div className="bg-linear-to-r from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 border-2 border-green-300 dark:border-green-700 rounded-lg p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-3 text-green-800 dark:text-green-300">
                                Explore Vindolanda
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                Learn more about the remarkable Roman fort where these tablets were discovered. 
                                Discover the archaeological site, its history, and the ongoing excavations that 
                                continue to reveal secrets of life on Hadrian's Wall.
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Explore the military structures, living quarters, and defensive features of this 
                                important frontier garrison.
                            </p>
                        </div>
                        <NavLink
                            to="/vindolanda"
                            className="group flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
                        >
                            <span className="font-semibold">Read More on Vindolanda</span>
                            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </NavLink>
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
