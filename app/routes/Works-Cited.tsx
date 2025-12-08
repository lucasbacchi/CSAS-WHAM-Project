import type { Route } from "./+types/Works-Cited";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Works Cited - Roman Britain Project" },
        {
            name: "description",
            content:
                "Complete bibliography and works cited for the Archaeology of Roman Britain project."
        }
    ];
}

interface Citation {
    text: string;
}

const citations: Citation[] = [
    {
        text: 'BBC. "BBC - History: British History Timeline." BBC, 2014, www.bbc.co.uk/history/british/timeline/romanbritain_timeline_noflash.shtml.'
    },
    {
        text: '"Britannia." Wikipedia, The Free Encyclopedia, Wikimedia Foundation, en.wikipedia.org/wiki/Britannia. Accessed 1 Dec. 2025.'
    },
    {
        text: '"Boudica – The Iceni Warrior Queen." Roman-Britain.co.uk, 27 Sept. 2023, www.roman-britain.co.uk/roman-conquest-and-occupation-of-britain/boudica-the-iceni-warrior-queen/. Accessed 1 Dec. 2025.'
    },
    {
        text: '"Boudican Revolt." Wikipedia, The Free Encyclopedia, Wikimedia Foundation, en.wikipedia.org/wiki/Boudican_revolt. Accessed 1 Dec. 2025.'
    },
    {
        text: '"Caligula\'s Planned Invasion of Britain - War History." War History, 27 Mar. 2021, warhistory.org/@msw/article/caligulas-planned-invasion-of-britain.'
    },
    {
        text: '"Campaigns of Septimius Severus in the Far North of Britain, The." Council for British Archaeology, www.archaeologyuk.org/resource/the-campaigns-of-septimius-severus-in-the-far-north-of-britain.html. Accessed 4 Dec. 2025.'
    },
    {
        text: '"Carausius and the Late Third Century." Roman-Britain.co.uk, 27 Sept. 2023, www.roman-britain.co.uk/roman-conquest-and-occupation-of-britain/carausius-and-the-late-third-century/. Accessed 4 Dec. 2025.'
    },
    {
        text: '"Carausian Revolt." Wikipedia, The Free Encyclopedia, Wikimedia Foundation, en.wikipedia.org/wiki/Carausian_revolt. Accessed 7 Dec. 2025.'
    },
    {
        text: '"Cartimandua, Queen of the Brigantes." English Heritage, www.english-heritage.org.uk/learn/histories/women-in-history/cartimandua/.'
    },
    {
        text: '"Edict of Milan." Encyclopædia Britannica, Encyclopædia Britannica, Inc., www.britannica.com/topic/Edict-of-Milan. Accessed 4 Dec. 2025.'
    },
    {
        text: '"Edict of Milan." Wikipedia, The Free Encyclopedia, Wikimedia Foundation, en.wikipedia.org/wiki/Edict_of_Milan. Accessed 4 Dec. 2025.'
    },
    {
        text: '"Emperor Hadrian." English Heritage, www.english-heritage.org.uk/visit/places/hadrians-wall/hadrians-wall-history-and-stories/hadrian/.'
    },
    {
        text: '"Europe 287: Carausian Revolt." OmniAtlas, omniatlas.com/maps/europe/2870213/. Accessed 4 Dec. 2025.'
    },
    {
        text: '"File:Calgacus.JPG - Wikimedia Commons." Wikimedia.org, 2022, commons.wikimedia.org/wiki/File:Calgacus.JPG. Accessed 7 Dec. 2025.'
    },
    {
        text: '"File:Roman Britain 410.Jpg - Wikimedia Commons." Wikimedia.org, 2022, commons.wikimedia.org/wiki/File:Roman_Britain_410.jpg. Accessed 7 Dec. 2025.'
    },
    {
        text: '"File:Roman.Britain.Mining.jpg." Wikipedia, The Free Encyclopedia, Wikimedia Foundation, en.wikipedia.org/wiki/File:Roman.Britain.Mining.jpg.'
    },
    {
        text: '"Great Conspiracy." Wikipedia, The Free Encyclopedia, Wikimedia Foundation, en.wikipedia.org/wiki/Great_Conspiracy. Accessed 1 Dec. 2025.'
    },
    {
        text: 'Grout, James. "Mons Graupius." Encyclopaedia Romana, University of Chicago, penelope.uchicago.edu/encyclopaedia_romana/britannia/monsgraupius/monsgraupius.html. Accessed 1 Dec. 2025.'
    },
    {
        text: '"Hadrian\'s Wall." Odyssey Adventures, www.odysseyadventures.ca/articles/hadrian-wall/article_hadrianswall-thewall.htm. Accessed 1 Dec. 2025.'
    },
    {
        text: '"Hadrian\'s Wall." Wikipedia, The Free Encyclopedia, Wikimedia Foundation, en.wikipedia.org/wiki/Hadrian%27s_Wall. Accessed 1 Dec. 2025.'
    },
    {
        text: '"History of Hadrian\'s Wall." English Heritage, www.english-heritage.org.uk/visit/places/hadrians-wall/hadrians-wall-history-and-stories/history/. Accessed 1 Dec. 2025.'
    },
    {
        text: 'Hobbs, Richard. "The Vindolanda Tablets | British Museum." British Museum, www.britishmuseum.org/collection/galleries/roman-britain/vindolanda-tablets.'
    },
    {
        text: '"Home." London Museum, 2024, www.londonmuseum.org.uk/.'
    },
    {
        text: 'Johnson, Ben. "Timeline of the Romans in Britain." Historic UK, 22 Jan. 2015, www.historic-uk.com/HistoryUK/HistoryofBritain/Timeline-of-Roman-Britain/.'
    },
    {
        text: '"Julius Caesar\'s Invasions of Britain." Wikipedia, The Free Encyclopedia, Wikimedia Foundation, 20 Oct. 2019, en.wikipedia.org/wiki/Julius_Caesar%27s_invasions_of_Britain.'
    },
    {
        text: '"Mons Graupius Identified." Scottish History, www.scottishhistory.org/articles/mons-graupius-identified/. Accessed 1 Dec. 2025.'
    },
    {
        text: 'Pattison, Paul. "The Roman Invasion of Britain." English Heritage, www.english-heritage.org.uk/learn/story-of-england/romans/invasion/.'
    },
    {
        text: '"React-Vertical-Timeline-Component." Npm, 11 Dec. 2024, www.npmjs.com/package/react-vertical-timeline-component. Accessed 7 Dec. 2025.'
    },
    {
        text: '"Roman Britain Timeline." World History Encyclopedia, www.worldhistory.org/timeline/Roman_Britain/.'
    },
    {
        text: '"Roman Conquest of Britain." Wikipedia, The Free Encyclopedia, Wikimedia Foundation, 21 Mar. 2019, en.wikipedia.org/wiki/Roman_conquest_of_Britain.'
    },
    {
        text: '"Romans: Daily Life." English Heritage, www.english-heritage.org.uk/learn/story-of-england/romans/daily-life/.'
    },
    {
        text: '"Scotland during the Roman Empire." Wikipedia, The Free Encyclopedia, Wikimedia Foundation, 25 July 2023, en.wikipedia.org/wiki/Scotland_during_the_Roman_Empire.'
    },
    {
        text: '"Severan Dynasty." Wikipedia, The Free Encyclopedia, Wikimedia Foundation, en.wikipedia.org/wiki/Severan_dynasty. Accessed 4 Dec. 2025.'
    },
    {
        text: '"The Boudica Revolt." Warwick Classics Network, University of Warwick, warwick.ac.uk/fac/arts/classics/warwickclassicsnetwork/romancoventry/resources/boudica/revolt/. Accessed 1 Dec. 2025.'
    },
    {
        text: '"The Roman Gask Project." Archive.org, 2025, web.archive.org/web/20080329182931/www.theromangaskproject.org.uk/Pages/Introduction/Agricola-hecame.html. Accessed 7 Dec. 2025.'
    },
    {
        text: '"Vindolanda Tablets." Wikipedia, The Free Encyclopedia, Wikimedia Foundation, 20 Apr. 2021, en.wikipedia.org/wiki/Vindolanda_tablets.'
    },
    {
        text: '"Vindolanda Tablets - Home | Roman Inscriptions of Britain." Romaninscriptionsofbritain.org, romaninscriptionsofbritain.org/tabvindol.'
    }
];

export default function Resources() {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Works Cited</h1>
            <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
                Complete bibliography for the Archaeology of Roman Britain
                project
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
                <ol className="space-y-6 list-none">
                    {citations.map((citation, index) => (
                        <li
                            key={index}
                            className="text-gray-700 dark:text-gray-300 leading-relaxed"
                        >
                            <span className="block pl-8 -indent-8">
                                {citation.text}
                            </span>
                        </li>
                    ))}
                </ol>
            </div>

            <div className="flex items-center justify-center mt-10">
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
