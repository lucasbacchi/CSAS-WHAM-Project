import { NavLink } from "react-router";

export default function Resources() {
    return (
        <div className="flex flex-row p-6 gap-4 min-h-screen items-stretch">
            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    Exhaustive Works Cited Page
                </h2>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingLeft: "40px",
                        paddingBottom: "20px"
                    }}
                ><ul>
                    <li>Pattison, Paul. “The Roman Invasion of Britain.” English Heritage, www.english-heritage.org.uk/learn/story-of-england/romans/invasion/.</li>
                    <li>Wikipedia Contributors. “Britannia.” Wikipedia, Wikimedia Foundation, 23 Nov. 2018, en.wikipedia.org/wiki/Britannia.</li>
                    <li>“Caligula’s Planned Invasion of Britain - War History.” War History, 27 Mar. 2021, warhistory.org/@msw/article/caligulas-planned-invasion-of-britain.</li>
                    <li>Wikipedia Contributors. “Roman Conquest of Britain.” Wikipedia, Wikimedia Foundation, 21 Mar. 2019, en.wikipedia.org/wiki/Roman_conquest_of_Britain.</li>
                    <li>Wikipedia Contributors. “Julius Caesar’s Invasions of Britain.” Wikipedia, Wikimedia Foundation, 20 Oct. 2019, en.wikipedia.org/wiki/Julius_Caesar%27s_invasions_of_Britain.</li>
                    <li>“Scotland during the Roman Empire.” Wikipedia, 25 July 2023, en.wikipedia.org/wiki/Scotland_during_the_Roman_Empire.</li>
                    <li>Wikipedia. “Vindolanda Tablets.” Wikipedia, 20 Apr. 2021, en.wikipedia.org/wiki/Vindolanda_tablets.</li>
                    <li>Hobbs, Richard. “The Vindolanda Tablets | British Museum.” Www.britishmuseum.org, www.britishmuseum.org/collection/galleries/roman-britain/vindolanda-tablets.</li>
                    <li>“Vindolanda Tablets - Home | Roman Inscriptions of Britain.” Romaninscriptionsofbritain.org, romaninscriptionsofbritain.org/tabvindol.</li>
                    <li>“React-Vertical-Timeline-Component.” Npm, 11 Dec. 2024, www.npmjs.com/package/react-vertical-timeline-component. Accessed 7 Dec. 2025.</li>
                    <li>“Chronology | Heilbrunn Timeline of Art History | the Metropolitan Museum of Art.” The Met’s Heilbrunn Timeline of Art History, www.metmuseum.org/toah/chronology#.</li>
                    <li>Metmuseum.org, 2020, www.metmuseum.org/toah/ht/05/euw.html.</li>
                    <li>“Login - ThingLink.” Thinglink.com, 2015, www.thinglink.com/login. Accessed 24 Oct. 2019.</li>
                    <li>Tableau.com, 2021, public.tableau.com/app/discover.</li>
                    <li>Johnson, Ben. “Timeline of the Romans in Britain.” Historic UK, 22 Jan. 2015, www.historic-uk.com/HistoryUK/HistoryofBritain/Timeline-of-Roman-Britain/.</li>
                    <li>BBC. “BBC - History : British History Timeline.” Bbc.co.uk, 2014, www.bbc.co.uk/history/british/timeline/romanbritain_timeline_noflash.shtml.</li>
                    <li>“Roman Britain Timeline.” Www.worldhistory.org, www.worldhistory.org/timeline/Roman_Britain/.</li>
                    <li>Pattison, Paul. “The Roman Invasion of Britain.” English Heritage, www.english-heritage.org.uk/learn/story-of-england/romans/invasion/.</li>
                    <li>“Romans: Daily Life.” English Heritage, www.english-heritage.org.uk/learn/story-of-england/romans/daily-life/.</li>
                    <li>Heritage, English. “Emperor Hadrian.” English Heritage, www.english-heritage.org.uk/visit/places/hadrians-wall/hadrians-wall-history-and-stories/hadrian/.</li>
                    <li>“Cartimandua, Queen of the Brigantes.” English Heritage, www.english-heritage.org.uk/learn/histories/women-in-history/cartimandua/.</li>
                    <li>“Home.” London Museum, 2024, www.londonmuseum.org.uk/.</li>
                    <li>“The Battle of Mons Graupius.” Uchicago.edu, 2024, penelope.uchicago.edu/encyclopaedia_romana/britannia/monsgraupius/monsgraupius.html.</li>
                    <li>“The Roman Gask Project.” Archive.org, 2025, web.archive.org/web/20080329182931/www.theromangaskproject.org.uk/Pages/Introduction/Agricola-hecame.html. Accessed 7 Dec. 2025.</li>
                </ul>
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
