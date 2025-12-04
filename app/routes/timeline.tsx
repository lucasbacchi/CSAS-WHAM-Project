import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import type { Route } from "../../.react-router/types/app/routes/+types/home";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Timeline of Roman Britain" },
        {
            name: "timeline",
            content: "Timeline that simply details how Roman Britain evolved"
        }
    ];
}

export default function Timeline() {
    const events: Array<{
        date: string;
        title: string;
        subtitle: string;
        content: string;
        link?: string;
        imageLink?: string;
    }> = [
        {
            date: "Before 43 CE",
            title: "Pre-Roman Britain",
            subtitle: "From around 900,000 years ago to 43 CE.",
            content:
                "During this period there were large independent tribal groups which were led by powerful kings and queens. These tribal groups maintained their own territories and resources.",
            link: "https://www.english-heritage.org.uk/learn/story-of-england/prehistory/",
            imageLink:
                "https://digitalmapsoftheancientworld.com/wp-content/uploads/2024/03/iron-age-old-sarum.jpg"
        },
        {
            date: "55 BCE",
            title: "First Contact",
            subtitle: "Caesarean Incursions 55 and 54 BCE.",
            content:
                "Julius Caesar took two expeditionary forces into early Britain. During these incursions the Romans gained knowledge of the valuable resources found in southern Britain. They eventually negotiated a peace deal which advantaged the Romans. This led to the development of political and trading relationships amount some of the southern tribes and Rome though the northern tribes were largely wary and opposed.",
            link: "https://www.english-heritage.org.uk/learn/story-of-england/romans/romans-introduction/",
            imageLink:
                "https://i0.wp.com/militaryhistorynow.com/wp-content/uploads/2019/08/Pictures_of_English_History_Plate_III_-_The_Romans_Conquer_Britain.jpg"
        },
        {
            date: "43 CE",
            title: "Claudius Invasion",
            subtitle: "Emperor Claudius began his rule and invasion.",
            content:
                "Emperor Claudius began his rule and was looked down upon because he was slightly deaf and had a limp. Seeking to overcome his natural shortcomings he would pick up the plans of his murdered predecessor and continue the previous invasion preparations. This action would solidify his rule. On the back of the previous invasion preparations and its failures Claudius would find glory with a successful invasion. There were 2 major battles.",
            link: "https://www.english-heritage.org.uk/learn/story-of-england/romans/invasion/",
            imageLink:
                "https://www.usni.org/sites/default/files/Iacono-NH-ND-23%201%20Hero.jpg"
        },
        {
            date: "60-61 CE",
            title: "Boudiccan Revolt",
            subtitle: "The Iceni rebellion against Roman rule.",
            content:
                "The Boudiccan Revolt was a major uprising against Roman rule in Britain led by Queen Boudicca of the Iceni tribe. The revolt was sparked by the mistreatment of Boudicca and her daughters following the death of her husband, King Prasutagus. The Romans had ignored his will, annexed his kingdom, and subjected Boudicca to public humiliation. In response, Boudicca united several tribes and launched a series of attacks on Roman settlements, including Camulodunum (Colchester), Londinium (London), and Verulamium (St Albans). The revolt caused significant destruction and loss of life before being ultimately suppressed by the Roman governor Suetonius Paulinus at the Battle of Watling Street.",
            link: "https://www.roman-britain.co.uk/roman-conquest-and-occupation-of-britain/boudica-the-iceni-warrior-queen/",
            imageLink:
                "https://cdn.mos.cms.futurecdn.net/NyVsZhibmAHs5VATqSsUVT-1200-80.jpg"
        },
        {
            date: "83-84 CE",
            title: "Battle of Mons Graupius",
            subtitle: "Agricola and the Battle of Mons Graupius (AD 83-84)",
            content:
                "The 'High Water Mark' of Roman expansion into Scotland (Caledonia). The Governor of Britain at the time, Gnaeus Julius Agricola, pushed the frontier far north into the Scottish Highlands and fought against the Caledonians. The short-term result was a Roman victory, but they did not hold the territory for long. Troops were withdrawn shortly after to fight elsewhere in the empire, and the Romans retreated to the line that would eventually become Hadrian’s Wall.",
            link: "/mons-graupius",
            imageLink:
                "https://www.forcesnews.com/sites/default/files/Agricola%27s%20Army%20is%20drawn%20up.jpg"
        },
        {
            date: "122 CE",
            title: "Construction of Hadrian's Wall",
            subtitle: "The northern frontier is established.",
            content:
                "Marks the shift from Roman expansion to Roman consolidation. They stopped trying to conquer the whole island and decided to fortify their existing position. Emperor Hadrian visited Britain personally in AD 122. He was famous for traveling his empire. The wall was intended not only to serve a defensive purpose, but also to separate the Romans from the barbarians and control cross-border movement/taxation. It stretched 73 miles (80 Roman miles) from the River Tyne (Newcastle) to the Solway Firth. Built mainly of stone in the east and turf in the west (later replaced by stone). Featured a 'Milecastle' every Roman mile and two turrets in between each milecastle. 14-17 major forts were built along the line of the wall to house troops. It remains the most significant monument of Roman Britain and defined the northern frontier for nearly 300 years.",
            link: "/hadrians-wall",
            imageLink:
                "https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/housesteads-roman-fort/housesteads-crags-hadrians-wall-c-roger-clegg-hwhl.jpg"
        },
        // {
        //     date: "200",
        //     title: "Roman Rule Established",
        //     subtitle: "Londinium or London was established in this time.",
        //     content:
        //         "During the Romanization of Britain the populace would begin living in urban settlements and towns. Place more here later",
        //     link: "https://www.english-heritage.org.uk/learn/story-of-england/romans/daily-life/"
        // },
        {
            date: "208-211 CE",
            title: "Severan Campaigns",
            subtitle: "The Imperial Court in York",
            content:
                "For a brief period, the capital of the Roman Empire was effectively in York, not Rome. Septimius Severus, an African-born Emperor, arrived in Britain with his two sons (Caracalla and Geta) and a massive army. The northern tribes (Caledonians and Maeatae) were raiding. Severus wanted to conquer Scotland once and for all, succeeding where previous attempts failed. It was a brutal guerrilla war. The Romans cut down forests and built bridges to root out the enemy. The tribes refused to meet in open battle. Severus fell ill and died in Eboracum (York) in AD 211. Succession: His death caused a power struggle between his sons. They abandoned the Scottish conquest, made peace with the tribes, and returned to Rome. The border remained at Hadrian’s Wall.",
            link: "https://www.archaeologyuk.org/resource/the-campaigns-of-septimius-severus-in-the-far-north-of-britain.html",
            imageLink:
                "https://upload.wikimedia.org/wikipedia/commons/0/08/Portrait_of_family_of_Septimius_Severus_-_Altes_Museum_-_Berlin_-_Germany_2017.jpg"
        },
        {
            date: "286-296 CE",
            title: "Carausian Revolt",
            subtitle: 'The "British Empire" of Carausius',
            content:
                "A strange decade where Britain functioned as its own breakaway empire.",
            link: "https://www.roman-britain.co.uk/roman-conquest-and-occupation-of-britain/carausius-and-the-late-third-century/",
            imageLink:
                "https://upload.wikimedia.org/wikipedia/commons/f/fb/Antoninianus_Carausius_leg4-RIC_0069v.jpg"
        },
        // {
        //     date: "300",
        //     title: "Scotland Occupation Attempt",
        //     subtitle: "The scots",
        //     content: "summary / bullet list"
        // },
        {
            date: "306 CE",
            title: "Proclamation of Constantine",
            subtitle: "Constantine the Great is proclaimed Emperor in York.",
            content:
                "Following the death of his father, Constantius Chlorus, in Eboracum (York), Constantine was proclaimed Emperor by the local troops. This event marked the beginning of Constantine's rise to power, eventually leading to his sole rule over the Roman Empire and his significant role in the spread of Christianity.",
            link: "https://www.historyofyork.org.uk/themes/constantine-the-great",
            imageLink:
                "https://upload.wikimedia.org/wikipedia/commons/c/c8/Statua_di_Costantino_ai_musei_capitolini.jpg"
        },
        {
            date: "367 CE",
            title: "The Great Conspiracy",
            subtitle: "The barbarian attack that shook Roman Britain.",
            content:
                "A coordinated simultaneous attack on Roman Britain from three directions by the Picts, Scots, and Saxons. The event exposed the vulnerabilities of Roman military control in Britain and led to significant social and economic disruptions.",
            link: "https://www.roman-britain.co.uk/roman-conquest-and-occupation-of-britain/late-4th-century-britain/the-great-conspiracy-2/",
            imageLink:
                "https://labrujulaverde.b-cdn.net/en/wp-content/uploads/2024/07/LHomme_et_la_terre.hommenature_04-2.jpg"
        },
        {
            date: "410 CE",
            title: "End of Roman Rule",
            subtitle:
                "The official political separation of Britain from the Roman Empire.",
            content:
                'The Empire was crumbling. Rome itself was under threat from Visigoths (sacked in 410 AD). Troops had been gradually withdrawn from Britain to protect Italy. The British towns, suffering from Saxon raids, wrote to Emperor Honorius asking for military support. The Emperor replied, telling the British cities to "look to their own defences."',
            link: "https://www.english-heritage.org.uk/learn/story-of-england/romans/end-of-roman-britain/",
            imageLink:
                "https://www.english-heritage.org.uk/siteassets/home/visit/inspire-me/why-did-the-romans-leave-britain/ic084_007---1200x630.jpg"
        }
        // {
        //     date: "500",
        //     title: "Post Roman Period",
        //     subtitle: "All roads lead to London",
        //     content: ""
        // }
    ];

    const contentStyle = {
        background: "rgba(33,150,243,0.56)",
        color: "#fff"
    } as const;
    const contentArrowStyle = {
        borderRight: "7px solid  rgb(33, 150, 243)"
    } as const;
    const iconStyle = { background: "rgb(96,22,158)", color: "#fff" } as const;

    return (
        <>
            <h1 className="flex justify-center text-3xl p-6">
                A Brief Timeline Of Roman History
            </h1>
            <div className="mt-6 flex flex-wrap gap-3 text-xl">
                <VerticalTimeline>
                    {events.map((event) => (
                        <VerticalTimelineElement
                            key={`${event.date}-${event.title}`}
                            className={`vertical-timeline-element--${event.date}`}
                            date={event.date}
                            iconStyle={iconStyle}
                            contentStyle={contentStyle}
                            contentArrowStyle={contentArrowStyle}
                        >
                            <h3
                                className={
                                    "vertical-timeline-element-title text-xl" +
                                    (event.link ? " hover:underline" : "")
                                }
                            >
                                {event.link ? (
                                    <a href={event.link}>{event.title}</a>
                                ) : (
                                    event.title
                                )}
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle mb-4">
                                {event.subtitle}
                            </h4>
                            {event.imageLink && (
                                <img src={event.imageLink} alt="" />
                            )}
                            <p>{event.content}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
            <div className="flex flex-wrap gap-3 text-xl justify-center m-8">
                <NavLink
                    to="/"
                    className="inline-block rounded-full border border-gray-200 text-white px-4 py-2 text-sm hover:opacity-90"
                >
                    Take me home
                </NavLink>
            </div>
        </>
    );
}
